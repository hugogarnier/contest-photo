import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

type GetReviewer = {
	id: string;
};

export const getReviewer = cache(async ({ id }: GetReviewer) => {
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
