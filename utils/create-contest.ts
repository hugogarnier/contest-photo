"use server";

import prisma from "@/lib/prisma";

type CreateContest = {
  description: string;
  title: string;
  start_date: string;
  end_date: string;
};
export const createContest = async ({
  description,
  title,
  start_date,
  end_date,
}: CreateContest) => {
  try {
    if (!description || !title || !start_date || !end_date)
      return { message: "params missing", status: 400 };
    await prisma.contests.create({
      data: {
        title,
        description,
        start_date,
        end_date,
        status: "INACTIVE",
        archived: false,
      },
    });

    return { message: "contest created", status: 201 };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to create contest.");
  }
};
