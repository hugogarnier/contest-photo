import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetContestTitle = {
  id: string;
};

export const getContestTitle = cache(async ({ id }: GetContestTitle) => {
  try {
    const title = await prisma.contests.findUnique({
      where: {
        id,
      },
      select: {
        title: true,
      },
    });

    if (!title) {
      throw new Error("Contest not found.");
    }
    return title;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all contests.");
  }
});
