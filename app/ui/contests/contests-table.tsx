import { DropdownContest } from "@/app/ui/contests/dropdown-contest";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getContests } from "@/utils/get-contests";
import { format } from "date-fns";
import Link from "next/link";

export async function ContestsTable() {
	const contests = await getContests();

	return (
		<Table className="max-w-screen-2xl">
			<TableHeader>
				<TableRow>
					<TableHead>Nom</TableHead>
					<TableHead className="hidden lg:flex flex-1 items-center">
						Description
					</TableHead>
					<TableHead className="w-32 text-center">Date de début</TableHead>
					<TableHead className="w-32 text-center">Date de fin</TableHead>
					<TableHead className="w-24 text-center">Statut</TableHead>
					<TableHead className="w-12 text-center" />
				</TableRow>
			</TableHeader>
			<TableBody className="">
				{contests.map((contest) => (
					<TableRow key={contest.id}>
						<Link
							key={contest.id}
							href={`/dashboard/contests/${contest.id}`}
							legacyBehavior
						>
							<TableCell className="font-medium cursor-pointer">
								{contest.title}
							</TableCell>
						</Link>
						<TableCell className="hidden lg:flex truncate flex-1 items-center">
							{contest.description}
						</TableCell>
						<TableCell className="w-32 text-center">
							{format(contest.start_date, "dd-MM-yyyy")}
						</TableCell>
						<TableCell className="w-32 text-center">
							{format(contest.end_date, "dd-MM-yyyy")}
						</TableCell>

						<TableCell className="text-center">
							<Badge
								variant={
									contest.status === "ACTIVE"
										? "default"
										: contest.status === "INACTIVE"
										  ? "secondary"
										  : "destructive"
								}
							>
								{contest.status === "ACTIVE"
									? "Actif"
									: contest.status === "INACTIVE"
									  ? "Inactif"
									  : "Archivé"}
							</Badge>
						</TableCell>
						<TableCell>
							<DropdownContest id={contest.id} status={contest.status} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
