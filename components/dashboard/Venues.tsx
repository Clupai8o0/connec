import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Venues = () => {
	return (
		<div>
			<Link href="/app/create/venue">
				<Button>Create Venue</Button>
			</Link>
		</div>
	);
};

export default Venues;
