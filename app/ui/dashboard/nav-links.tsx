"use client";

import Link from "next/link";
import {Camera, HomeIcon, PlusIcon, User} from "lucide-react";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Accueil", href: "/dashboard", icon: HomeIcon },
  {
    name: "Créer un concours",
    href: "/dashboard/create-contest",
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
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-nAmber-foreground hover:text-nAmber md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-gray-600 dark:hover:bg-nAmber dark:hover:text-nAmber-foreground",
              {
                "bg-nAmber-foreground text-nAmber dark:bg-nAmber dark:text-nAmber-foreground":
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
