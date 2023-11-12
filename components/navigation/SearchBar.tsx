"use client";

import { useEffect, useRef, useState } from "react";

import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/components/ui/command";

const SearchBar = () => {
	const [focused, setFocused] = useState(false);

	return (
		<div className="max-w-2xl dark">
      {/* //todo: design it properly dumbass */}
			<Command>
				<CommandInput
					placeholder="Type a command or search..."
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
				{focused && (
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>Profile</CommandItem>
							<CommandItem>Billing</CommandItem>
							<CommandItem>Settings</CommandItem>
						</CommandGroup>
					</CommandList>
				)}
			</Command>
		</div>
	);
};

export default SearchBar;
