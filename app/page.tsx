import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="main">
			<Link href="/venue/123">
				<Button>Venue</Button>
			</Link>
		</main>
	);
}
