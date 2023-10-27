"use client";

import AutoForm from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { createContest } from "@/utils/create-contest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

export function Form() {
	const { toast } = useToast();
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const formSchema = z
		.object({
			title: z
				.string({
					required_error: "Nom obligatoire.",
					description: "Nom du concours",
				})
				// You can use zod's built-in validation as normal
				.max(50, "Le nom ne doit pas dépasser 50 caractères."),
			description: z.string(),
			start_date: z.coerce
				.date({ description: "Date de début" })
				.refine((data) => data > new Date(), {
					message: "La date de début doit être supérieure à la date actuelle.",
				}),
			end_date: z.coerce.date({ description: "Date de fin" }),
		})
		.refine((data) => data.end_date > data.start_date, {
			message: "La date de fin doit être supérieure à la date de début.",
		});

	return (
		<Card className="max-w-xl mx-auto mt-14">
			<CardHeader>
				<CardTitle>Nouveau concours</CardTitle>
				<CardDescription>Création d&apos;un nouveau concours.</CardDescription>
			</CardHeader>
			<CardContent className="space-y-2">
				<AutoForm
					formSchema={formSchema}
					fieldConfig={{
						title: {
							inputProps: {
								type: "text",
							},
						},
						description: {
							fieldType: "textarea",
						},
					}}
					onSubmit={async (values) => {
						setLoading(true);
						const { status } = await createContest({
							title: values.title,
							description: values.description,
							start_date: values.start_date.toISOString(),
							end_date: values.end_date.toISOString(),
						});

						if (status === 201) {
							setLoading(false);
							return router.push("/dashboard/contests");
						}

						toast({
							variant: "destructive",
							title: "Une erreur est survenue",
							description:
								"Un problème est survenu lors de la création du concours.",
							duration: 3000,
						});

						setLoading(false);
					}}
				>
					<Button type="submit" disabled={loading}>
						Créer le concours
					</Button>
				</AutoForm>
			</CardContent>
		</Card>
	);
}
