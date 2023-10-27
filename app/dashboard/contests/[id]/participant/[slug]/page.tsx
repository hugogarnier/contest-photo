import Breadcrumbs from "@/app/ui/contests/breadcrumbs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { getContestTitle } from "@/utils/get-contest-title";
import { getParticipant } from "@/utils/get-participant";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import placeholder from "../../../../../../images/placeholder.png";

type Props = {
	params: { id: string; slug: string };
	searchParams: { ratingReviewer: string };
};

export default async function Page({ params, searchParams }: Props) {
	const { title } = await getContestTitle({ id: params.id });
	const participant = await getParticipant({ id: params.slug });

	const buffer = await fetch(participant.image_url).then(async (res) =>
		Buffer.from(await res.arrayBuffer()),
	);
	const { base64 } = await getPlaiceholder(buffer);

	return (
		<section>
			<Breadcrumbs
				breadcrumbs={[
					{ label: "Concours", href: "/dashboard/contests" },
					{
						label: title,
						href: `/dashboard/contests/${params.id}`,
					},
					{
						label: participant.name,
						href: `/dashboard/contests/${params.id}/participant/${params.slug}`,
						active: true,
					},
				]}
			/>
			<div className="mt-12">
				<h1 className="my-5">
					Note de {title} - {participant.name} : {participant.score}
				</h1>
				<p>
					{searchParams.ratingReviewer === "undefined"
						? "donner une note"
						: "chnager la note"}
				</p>
				<AspectRatio ratio={16 / 9}>
					<Image
						src={participant.image_url ?? placeholder}
						alt="Image"
						fill
						placeholder={"blur"}
						blurDataURL={base64}
						className="rounded-md object-cover"
					/>
				</AspectRatio>
			</div>
		</section>
	);
}
