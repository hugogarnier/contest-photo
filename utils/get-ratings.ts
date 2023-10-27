import prisma from "@/lib/prisma";

export const revalidate = 0;
type GetRatings = {
	id: string;
};

export const getRatings = async ({ id }: GetRatings) => {
	try {
		const ratings = await prisma.rating.findMany({
			where: {
				contest: id,
			},
		});

		return ratings;
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch all ratings.");
	}
};
