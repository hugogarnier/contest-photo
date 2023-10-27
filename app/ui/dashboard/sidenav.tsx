import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { ModeToggle } from "@/app/ui/mode-toggle";
import { LogOut } from "lucide-react";
import Link from "next/link";

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2">
			<Link
				className="mb-2 flex h-20 items-end justify-start rounded-md bg-primary p-4 md:h-40"
				href="/"
			>
				<div className="w-32 md:w-40 text-primary-foreground">
					<AcmeLogo />
				</div>
			</Link>
			<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
				<div className="hidden h-auto w-full grow rounded-md bg-muted md:block" />

				<form className="flex flex-row justify-between gap-2">
					<button
						type="button"
						className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-muted p-3 text-sm font-medium hover:bg-secondary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3"
					>
						<LogOut className="w-6" />
						<div className="hidden md:block">Se déconnecter</div>
					</button>
					<ModeToggle />
				</form>
			</div>
		</div>
	);
}
