import { cache } from "react";
import prisma from "@/lib/prisma";

export const revalidate = 0;

export const getReviewers = cache(async () => {
	try {
		return await prisma.users.findMany({
			where: {
				role: "REVIEWER",
			},
		});
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch all reviewers.");
	}
});
