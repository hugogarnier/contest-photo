import {inter} from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/toaster";
import {ReactNode} from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Toaster />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
