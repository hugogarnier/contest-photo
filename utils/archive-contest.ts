"use server";

import prisma from "@/lib/prisma";

type ArchiveContestArgs = {
  id: string;
};

export const archiveContest = async ({ id }: ArchiveContestArgs) => {
  try {
    await prisma.contests.update({
      where: {
        id,
      },
      data: {
        status: "ARCHIVED",
        archived: true,
      },
    });
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to archive contest.");
  }
};
