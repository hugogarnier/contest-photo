"use server";

import prisma from "@/lib/prisma";

type ActiveContestArgs = {
  id: string;
};

export const activeContest = async ({ id }: ActiveContestArgs) => {
  try {
    const foundActiveContest = await prisma.contests.findFirst({
      where: {
        status: "ACTIVE",
      },
    });

    if (foundActiveContest) {
      return { message: "Il y a deja un concours actif", status: 400 };
    }

    await prisma.contests.update({
      where: {
        id,
      },
      data: {
        status: "ACTIVE",
      },
    });

    return { message: "contest activated", status: 200 };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to activate contest.");
  }
};
