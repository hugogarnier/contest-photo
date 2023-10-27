import { ContestCard } from "@/app/ui/contest/contest-card";
import Breadcrumbs from "@/app/ui/contests/breadcrumbs";
import { ContestTable } from "@/app/ui/contests/contest-table";
import { useRating } from "@/hooks/useRating";
import { getContest } from "@/utils/get-contest";
import { getParticipants } from "@/utils/get-participants";
import { getReviewers } from "@/utils/get-reviewers";

export default async function Page({ params }: { params: { id: string } }) {
	const contest = await getContest({ id: params.id });
	const participants = await getParticipants({ id: params.id });
	const reviewers = await getReviewers();
	const participantsInContest = participants.filter(
		(participant) => !participant.outside_contest,
	).length;
	const participantsOutContest = participants.filter(
		(participant) => participant.outside_contest,
	).length;

	await useRating({
		participants,
		contestId: contest?.id ?? "",
		reviewersContest: reviewers.length,
	});

	if (!contest) {
		return <p>Aucun concours trouvé</p>;
	}

	return (
		<section>
			<Breadcrumbs
				breadcrumbs={[
					{ label: "Concours", href: "/dashboard/contests" },
					{
						label: `${contest.title}`,
						href: `/dashboard/contests/${params.id}`,
						active: true,
					},
				]}
			/>
			<div className="flex flex-col xl:flex-row">
				<ContestCard
					title={contest.title}
					description={contest.description}
					start_date={contest.start_date}
					end_date={contest.end_date}
					archived={contest.archived}
					participants={participants.length}
					participantsInContest={participantsInContest}
					participantsOutContest={participantsOutContest}
				/>
				<ContestTable participants={participants} contestId={contest.id} />
			</div>
		</section>
	);
}
