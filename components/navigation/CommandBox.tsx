"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { generateKey } from "@/lib/api";

const links = [
	{
		href: "/app",
		content: "Dashboard",
	},
	{
		href: "/get-started",
		content: "Get Started",
	},
	{
		href: "/app/create/venue",
		content: "Create Venue",
	},
	{
		href: "/app/create/service",
		content: "Create Service",
	},
	{
		href: "/app/create/event",
		content: "Create Event",
	},
];

export function CommandBox() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<CommandInput placeholder="Type a command or search..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					{links.map((link) => (
						<Link href={link.href} key={generateKey()}>
							<CommandItem>
								<ExternalLink className="mr-2 h-4 w-4" />
								<span>{link.content}</span>
							</CommandItem>
						</Link>
					))}
				</CommandGroup>
				<CommandSeparator />
			</CommandList>
		</CommandDialog>
	);
}
