import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetContest = {
  id: string;
};

export const getContest = cache(async ({ id }: GetContest) => {
  try {
    return await prisma.contests.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all contests.");
  }
});
