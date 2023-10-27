"use client";

import { clsx } from "clsx";
import { Camera, HomeIcon, PlusIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
	{ name: "Accueil", href: "/dashboard", icon: HomeIcon },
	{
		name: "Créer un concours",
		href: "/dashboard/contests/create",
		icon: PlusIcon,
	},
	{
		name: "Concours",
		href: "/dashboard/contests",
		icon: Camera,
	},
	{ name: "Évaluateurs", href: "/dashboard/reviewers", icon: User },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-muted p-3 text-sm font-medium hover:bg-secondary-foreground hover:text-secondary md:flex-none md:justify-start md:p-2 md:px-3",
							{
								"bg-secondary-foreground text-secondary":
									pathname === link.href,
							},
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
