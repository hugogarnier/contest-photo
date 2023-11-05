const { sql } = require("@vercel/postgres");

const {
  contests,
  participants,
  users,
} = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

async function seedUsers() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        role VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return sql`
        INSERT INTO users (id, name, email, password, role)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.role})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedContests() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "contests" table if it doesn't exist
    const createTable = await sql`
    CREATE TABLE IF NOT EXISTS contests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    archived BOOLEAN NOT NULL
  );
`;

    console.log(`Created "contests" table`);

    // Insert data into the "invoices" table
    const insertedContests = await Promise.all(
      contests.map(
        (contest) => sql`
        INSERT INTO contests (id, title, description, start_date, end_date, status, archived)
        VALUES (${contest.id}, ${contest.title}, ${contest.description}, ${contest.start_date}, ${contest.end_date}, ${contest.status}, ${contest.archived})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedContests.length} contests`);

    return {
      createTable,
      invoices: insertedContests,
    };
  } catch (error) {
    console.error("Error seeding contests:", error);
    throw error;
  }
}

async function seedParticipants() {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "participants" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS participants (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        score INT NOT NULL,
        outside_contest BOOLEAN NOT NULL,
        contest UUID NOT NULL REFERENCES contests(id)
      );
    `;

    console.log(`Created "participants" table`);

    // Insert data into the "participants" table
    const insertedParticipants = await Promise.all(
      participants.map(
        (participant) => sql`
        INSERT INTO participants (id, name, email, image_url, title, score, outside_contest, contest)
        VALUES (${participant.id}, ${participant.name}, ${participant.email}, ${participant.image_url}, ${participant.title}, ${participant.score}, ${participant.outside_contest}, ${participant.contest})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedParticipants.length} participants`);

    return {
      createTable,
      participants: insertedParticipants,
    };
  } catch (error) {
    console.error("Error seeding participants:", error);
    throw error;
  }
}

(async () => {
  await seedUsers();
  await seedContests();
  await seedParticipants();
})();
