import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const getContests = cache(async () => {
  try {
    const contests = await prisma.contests.findMany();

    return contests.sort((a, b) => {
      if (a.status === "ACTIVE") return -1;
      if (b.status === "ACTIVE") return 1;
      return (
        new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
      );
    });
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all contests.");
  }
});
