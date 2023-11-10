import Link from "next/link";
;
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<main className="main">
			<Button>
				<Link href="/venue/123">Venue</Link>
			</Button>
		</main>
	);
}
