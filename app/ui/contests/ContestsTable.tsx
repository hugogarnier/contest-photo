import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchContests } from "@/app/lib/data";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export async function ContestsTable() {
  const contests = await fetchContests();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead className="hidden md:flex flex-1 items-center">
            Description
          </TableHead>
          <TableHead>Date de début</TableHead>
          <TableHead>Date de fin</TableHead>
          <TableHead className="text-right">Statut</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="cursor-pointer">
        {contests.map((contest) => (
          <Link
            key={contest.id}
            href={`/dashboard/contest/${contest.id}`}
            legacyBehavior
          >
            <TableRow>
              <TableCell className="font-medium">{contest.title}</TableCell>
              <TableCell className="hidden md:flex max-w-xs lg:max-w-xl truncate flex-1 items-center bg-amber-400">
                {contest.description}
              </TableCell>
              <TableCell>{String(contest.start_date)}</TableCell>
              <TableCell>{String(contest.end_date)}</TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={
                    contest.status === "ACTIVE" ? "default" : "secondary"
                  }
                >
                  {contest.status === "ACTIVE" ? "Actif" : "Fermé"}
                </Badge>
              </TableCell>
            </TableRow>
          </Link>
        ))}
      </TableBody>
    </Table>
  );
}
