import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetParticipant = {
	id: string;
};

export const getParticipant = cache(async ({ id }: GetParticipant) => {
	try {
		const participant = await prisma.participants.findUnique({
			where: {
				id,
			},
		});

		if (!participant) {
			throw new Error("Participant not found.");
		}

		return participant;
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch participant.");
	}
});
