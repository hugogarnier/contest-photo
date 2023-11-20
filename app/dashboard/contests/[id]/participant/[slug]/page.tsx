import Breadcrumbs from "@/app/ui/contests/breadcrumbs";
import { getContestTitle } from "@/utils/get-contest-title";
import { getParticipantName } from "@/utils/get-participant-name";

export default async function Page({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { title } = await getContestTitle({ id: params.id });
  const { name } = await getParticipantName({ id: params.slug });

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
            label: name,
            href: `/dashboard/contests/${params.id}/participant/${params.slug}`,
            active: true,
          },
        ]}
      />
      <p>id: {params.id}</p> <p>slug : {params.slug}</p>
    </section>
  );
}
