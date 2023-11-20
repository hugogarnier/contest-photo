"use server";

import prisma from "@/lib/prisma";

type DeleteContestArgs = {
  id: string;
};

export const deleteContest = async ({ id }: DeleteContestArgs) => {
  try {
    await prisma.contests.delete({
      where: {
        id,
      },
    });
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to delete contest.");
  }
};
