import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ContestTableProps {
  // contestId: Row<"contest">["id"];
  // participants: Row<"participant">[];
}

export const ContestTable = ({} // contestId,
// participants,
: ContestTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nom</TableHead>
          <TableHead className="truncate">Titre de la photo</TableHead>
          <TableHead className="text-center">Photo</TableHead>
          <TableHead className="text-right">Note</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="cursor-pointer">
        {/*{participants*/}
        {/*  .sort((a, b) => b.score - a.score)*/}
        {/*  .map((participant) => (*/}
        {/*    <Link*/}
        {/*      key={participant.id}*/}
        {/*      href={`/dashboard/contest/${contestId}/participant/${participant.id}`}*/}
        {/*      legacyBehavior*/}
        {/*    >*/}
        {/*      <TableRow>*/}
        {/*        <TableCell className="font-medium">*/}
        {/*          {participant.participant}*/}
        {/*        </TableCell>*/}
        {/*        <TableCell>{participant.title}</TableCell>*/}
        {/*        <TableCell className="w-[100px] lg:w-[200px]">*/}
        {/*          <AspectRatio ratio={16 / 9}>*/}
        {/*            <Image*/}
        {/*              src={participant.photo ?? "/images/placeholder.png"}*/}
        {/*              alt="Image"*/}
        {/*              fill*/}
        {/*              className="rounded-md object-cover"*/}
        {/*            />*/}
        {/*          </AspectRatio>*/}
        {/*        </TableCell>*/}
        {/*        <TableCell className="text-end">{participant.score}</TableCell>*/}
        {/*      </TableRow>*/}
        {/*    </Link>*/}
        {/*  ))}*/}
      </TableBody>
    </Table>
  );
};
