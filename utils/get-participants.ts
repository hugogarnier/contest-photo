import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetParticipants = {
  id: string;
};

export const getParticipants = cache(async ({ id }: GetParticipants) => {
  try {
    return await prisma.participants.findMany({
      where: {
        contest: id,
      },
    });
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all contests.");
  }
});
