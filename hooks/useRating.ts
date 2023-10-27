import {getRatings} from "@/utils/get-ratings";
import {updateRating} from "@/utils/update-score";
import {participants, rating} from "@prisma/client";

type UseRating = {
	participants: participants[];
	reviewersContest: number;
	contestId: string;
};

export const useRating = async ({
	participants,
	reviewersContest,
	contestId,
}: UseRating) => {
	const ratings = await getRatings({ id: contestId });

	const updateParticipants = participants.map(async (participant) => {
		const score = await participantRating({
			participantId: participant.id,
			contestId,
			ratings,
			reviewersContest,
		});

		return updateRating({
			id: participant.id,
			contestId,
			score,
		});
	});

	await Promise.all(updateParticipants);

	return "success";
};

const participantRating = async ({
	participantId,
	contestId,
	ratings,
	reviewersContest,
}: {
	participantId: participants["id"];
	contestId: string;
	ratings: rating[];
	reviewersContest: number;
}) => {
	return ratings.reduce((acc, rating) => {
		if (rating.participant === participantId && rating.contest === contestId) {
			return (acc + rating.score) / reviewersContest;
		}
		return acc;
	}, 0);
};
