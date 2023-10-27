import prisma from "@/lib/prisma";

export const revalidate = 0;

type UpdateRating = {
	id: string;
	contestId: string;
	score: number;
};

export const updateRating = async ({ id, contestId, score }: UpdateRating) => {
	try {
		return await prisma.participants.update({
			where: {
				id,
				contest: contestId,
			},
			data: {
				score: score,
			},
		});
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to update all participants.");
	}
};
