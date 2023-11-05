"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createContest(formData: {
  description: string;
  title: string;
  start_date: Date;
  end_date: Date;
}) {
  console.log("createContest", formData);

  const { description, title, start_date, end_date } = formData;

  try {
    await sql`
    INSERT INTO contests (title, description, start_date, end_date, status, archived)
    VALUES (${title}, ${description}, ${start_date.toDateString()}, ${end_date.toDateString()}, 'ACTIVE', false)`;

    revalidatePath("/dashboard/contests");
    redirect("/dashboard/contests");
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to insert contest.");
  }
}
