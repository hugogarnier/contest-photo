import { fetchLastContest } from "@/lib/data";
import { clsx } from "clsx";
import { ArrowRightIcon } from "lucide-react";

export default async function Contests() {
	const contest = await fetchLastContest();
	return (
		<div className="flex w-full flex-col md:col-span-4 lg:col-span-4">
			<h2 className="mb-4 text-xl md:text-2xl">Dernier concours</h2>
			<div className="flex grow flex-col justify-between rounded-xl bg-muted p-4">
				<div className="bg-primary-foreground px-6">
					<div
						key={contest.id}
						className={clsx("flex flex-row items-center justify-between py-4")}
					>
						<div className="flex items-center">
							<div className="min-w-0">
								<p className="truncate text-sm font-semibold md:text-base">
									{contest.title}
								</p>
								<p className="hidden text-sm text-primary sm:block">
									{contest.description}
								</p>
							</div>
						</div>
						<p className="truncate text-sm font-medium md:text-base">
							{contest.status}
						</p>
					</div>
				</div>
				<div className="flex items-center pb-2 pt-6">
					<ArrowRightIcon className="h-5 w-5 text-primary" />
					<h3 className="ml-2 text-sm text-primary">Updated just now</h3>
				</div>
			</div>
		</div>
	);
}
