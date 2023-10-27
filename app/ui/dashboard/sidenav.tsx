import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { LogOut } from "lucide-react";
import { ModeToggle } from "@/app/ui/mode-toggle";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-amber-900 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 md:w-40 text-white">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block dark:bg-gray-600"></div>

        <form className="flex flex-row justify-between gap-2">
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-nAmber-foreground hover:text-nAmber md:flex-none md:justify-start md:p-2 md:px-3 dark:bg-gray-600 dark:hover:bg-nAmber dark:hover:text-nAmber-foreground">
            <LogOut className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
          <ModeToggle />
        </form>
      </div>
    </div>
  );
}
