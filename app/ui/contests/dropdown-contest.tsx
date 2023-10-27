"use client";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/components/ui/use-toast";
import { activeContest } from "@/utils/active-contest";
import { archiveContest } from "@/utils/archive-contest";
import { deleteContest } from "@/utils/delete-contest";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
	id: string;
	status: string;
};
export const DropdownContest = ({ id, status }: Props) => {
	const router = useRouter();
	const { toast } = useToast();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{status === "INACTIVE" ? (
					<DropdownMenuItem
						onClick={async () => {
							const { status, message } = await activeContest({ id });
							if (status === 200) {
								return router.refresh();
							}
							if (status === 400) {
								return toast({
									variant: "destructive",
									title: "Une erreur est survenue",
									description: message,
									duration: 3000,
								});
							}
						}}
						className="cursor-pointer"
					>
						Activer
					</DropdownMenuItem>
				) : null}
				{status !== "CLOSED" ? (
					<>
						<DropdownMenuItem
							onClick={async () => {
								await archiveContest({ id });
								router.refresh();
							}}
							className="cursor-pointer"
						>
							Archiver
						</DropdownMenuItem>
						<DropdownMenuSeparator />
					</>
				) : null}

				<DropdownMenuItem
					onClick={async () => {
						await deleteContest({ id });
						router.refresh();
					}}
					className="cursor-pointer text-red-600 hover:text-red-600"
				>
					Supprimer
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
