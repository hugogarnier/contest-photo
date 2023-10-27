import { fetchCards } from "@/lib/data";
import { CalendarCheck2, Camera, UserCircle, UserCog } from "lucide-react";

const iconMap = {
	current: CalendarCheck2,
	contests: Camera,
	participants: UserCircle,
	users: UserCog,
};

export async function Cards() {
	const { contestCount, participantCount, userCount } = await fetchCards();
	return (
		<>
			<Card title="Total de concours" value={contestCount} type="contests" />
			<Card
				title="Total de participants"
				value={participantCount}
				type="participants"
			/>
			<Card title="Total d'utilisateur" value={userCount} type="users" />
		</>
	);
}

function Card({
	title,
	value,
	type,
}: {
	title: string;
	value: number | string;
	type: "current" | "contests" | "participants" | "users";
}) {
	const Icon = iconMap[type];

	return (
		<div className="rounded-xl bg-muted p-2 shadow-sm">
			<div className="flex p-4">
				{Icon ? <Icon className="h-5 w-5 text-primary" /> : null}
				<h3 className="ml-2 text-sm font-medium">{title}</h3>
			</div>
			<p className="truncate rounded-xl bg-primary-foreground px-4 py-8 text-center text-2xl">
				{value}
			</p>
		</div>
	);
}
