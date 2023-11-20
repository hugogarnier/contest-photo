import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetParticipantName = {
  id: string;
};

export const getParticipantName = cache(async ({ id }: GetParticipantName) => {
  try {
    const name = await prisma.participants.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
      },
    });

    if (!name) {
      throw new Error("Participant not found.");
    }
    return name;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch participant.");
  }
});
