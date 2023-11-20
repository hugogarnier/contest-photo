import Breadcrumbs from "@/app/ui/contests/breadcrumbs";
import { Form } from "@/app/ui/contests/create-form";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Concours", href: "/dashboard/contests" },
          {
            label: "Créer un concours",
            href: "/dashboard/contests/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
