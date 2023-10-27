import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Participant } from "@/prisma/definitions";
import { getRatings } from "@/utils/get-ratings";
import Image from "next/image";
import Link from "next/link";
import placeholder from "../../../images/placeholder.png";

interface ContestTableProps {
	contestId: string;
	participants: Participant[];
}

export const ContestTable = async ({
	participants,
	contestId,
}: ContestTableProps) => {
	const ratings = await getRatings({ id: contestId });
	const foundReviewer = ratings.filter(
		(rating) => rating.user === "410544b2-4001-4271-9855-fec4b6a6442a",
	);
	const reviewerRating = (participant: string) => {
		return (
			foundReviewer.find((reviewer) => reviewer.participant === participant)
				?.score ?? undefined
		);
	};

	return (
		<Table className="mt-10 xl:mt-0 xl:ml-72 xl:w-3/4">
			<TableHeader>
				<TableRow>
					<TableHead className="w-24">Note</TableHead>
					<TableHead>Photo</TableHead>
					<TableHead className="">Nom</TableHead>
					<TableHead className="hidden xl:flex items-center justify-start">
						Titre
					</TableHead>
					<TableHead className="text-center">Votre note</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="cursor-pointer">
				{participants
					.sort((a, b) => b.score - a.score)
					.map((participant) => (
						<Link
							key={participant.id}
							href={`/dashboard/contests/${contestId}/participant/${
								participant.id
							}?ratingReviewer=${reviewerRating(participant.id)}`}
							legacyBehavior
						>
							<TableRow>
								<TableCell className="w-24">{participant.score}</TableCell>
								<TableCell className="w-[100px] lg:w-[200px]">
									<AspectRatio ratio={16 / 9}>
										<Image
											src={participant.image_url ?? placeholder}
											alt="Image"
											fill
											className="rounded-md object-cover"
										/>
									</AspectRatio>
								</TableCell>
								<TableCell className="font-medium w-72 truncate">
									{participant.name}
								</TableCell>
								<TableCell className="truncate">{participant.title}</TableCell>
								<TableCell className="text-center">
									{reviewerRating(participant.id) === undefined
										? "A noter"
										: reviewerRating(participant.id)}
								</TableCell>
							</TableRow>
						</Link>
					))}
			</TableBody>
		</Table>
	);
};
