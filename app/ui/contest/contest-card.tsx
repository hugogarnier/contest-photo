import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Contest } from "@/prisma/definitions";
import { format } from "date-fns";
import { Pencil } from "lucide-react";

type ContestCardProps = Pick<
	Contest,
	"title" | "description" | "start_date" | "end_date" | "archived"
> & {
	participants: number;
	participantsInContest: number;
	participantsOutContest: number;
};
export const ContestCard = ({
	title,
	description,
	start_date,
	end_date,
	archived,
	participants,
	participantsInContest,
	participantsOutContest,
}: ContestCardProps) => {
	return (
		<Card className="w-full xl:w-64 xl:fixed top-32 left-74">
			<CardHeader>
				<CardTitle className="flex flex-row justify-between items-center pb-4">
					{title}

					{!archived ? (
						<div className="flex gap-2 items-center">
							<Pencil
								// onClick={() => setEditing((props) => !props)}
								className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
							/>
							{/*<ArchiveContestAlert id={contest.id} />*/}
						</div>
					) : null}
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-row gap-8 md:flex-col">
					<div>
						<p>Début du concours</p>
						<p className="text-sm text-muted-foreground mt-1">
							{format(start_date, "dd-MM-yyyy")}
						</p>
					</div>
					<div>
						<p>Fin du concours</p>
						<p className="text-sm text-muted-foreground mt-1">
							{format(end_date, "dd-MM-yyyy")}
						</p>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex flex-col justify-items-start items-start gap-8 mt-8 md:flex-row xl:flex-col">
				<Badge>{participants} participants</Badge>
				<Badge variant="secondary">
					{participantsInContest} dans le concours
				</Badge>
				<Badge variant="outline">{participantsOutContest} hors concours</Badge>
			</CardFooter>
		</Card>
	);
};
