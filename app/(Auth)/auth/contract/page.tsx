"use client";

import Markdown from "@/components/content/Markdown";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

function ContractPage() {
	const client = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL || "",
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
	);
	const router = useRouter();

	const handleAccept = async () => {
		await client.from("contract").update({
			verified: true
		}).eq("code", "123")
		router.push("/home");
	};

	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<main className="max-w-4xl w-full relative px-6 xl:px-0 mx-auto">
				<h1 className="title mt-12">Contract</h1>
				<h2 className="heading mt-6">About Event</h2>
				<Markdown
					content={`Harmonious Reverie: Reem's Melodic Voyage invites you to an unforgettable evening of musical enchantment. Set amidst the opulent grandeur of the city's renowned concert hall, the event promises an immersive experience that blends sophistication with the raw emotion of live music.

As the sun sets and the venue glimmers with ambient lights, guests are welcomed into a world where melodies become memories. Reem, a vocal virtuoso known for her emotive performances, takes center stage, her voice echoing through the hall, captivating every soul present.

The concert's program is meticulously curated, showcasing Reem's versatility with a repertoire that traverses through time and genres. From timeless classics that evoke nostalgia to contemporary chart-toppers, each song is woven with passion and precision, inviting the audience on an emotional rollercoaster.

Elevating the auditory journey, a symphony orchestra, and a small ensemble of renowned musicians accompany Reem, enriching the melodies with harmonies that resonate through the hall. Visual spectacles of lights and subtle stage effects complement the music, creating a multisensory experience that transcends mere entertainment.

During intermissions, guests indulge in a curated selection of refreshments, mingling in the venue's elegantly adorned foyer. Engaging with fellow music enthusiasts, they share in the anticipation of the performances yet to unfold.

The evening culminates in a crescendo of emotions as Reem delivers a powerful finale, leaving the audience spellbound. A standing ovation fills the hall, echoing gratitude for an evening that surpassed expectations.

Harmonious Reverie: Reem's Melodic Voyage is not just a concert; it's an immersive journey through emotions, artistry, and the unifying power of music. A night where melodies intertwine with memories, leaving an indelible mark on every heart fortunate enough to be part of this transcendent experience.`}
				/>
				<h2 className="heading mt-6">Expected of the venue owner</h2>
				<Markdown
					content={`1. Providing a Picturesque Setting: The venue owner should ensure Bahrain Bay Park offers a captivating and well-maintained outdoor environment. This involves keeping the waterfront serene, maintaining lush greenery, and arranging for adequate lighting to create a mesmerizing ambiance under the starlit sky.

2. Space Management for Performances: The venue needs to have appropriate stages or performance areas to accommodate world-class jazz artists and local talents. This includes setting up stages equipped with audiovisual systems to facilitate captivating performances and enhance the musical experience for the attendees.

3. Facilitating Vendor Spaces: The venue owner might be responsible for allocating spaces or booths for local vendors offering culinary delights and artisanal crafts. This involves organizing the layout to ensure smooth navigation for attendees and creating an inviting atmosphere for vendors to showcase their offerings.

4. Ensuring Adequate Facilities: The venue should provide necessary facilities such as restrooms, seating areas, and waste disposal arrangements to accommodate the expected number of attendees comfortably.

5. Coordination and Collaboration: Collaborating with event organizers to understand the specific requirements and ensuring seamless execution of the event. This may involve coordinating logistics, adhering to safety regulations, and providing support to the event management team during the festival.

6. Maintaining Safety and Security: Ensuring the safety and security of attendees by implementing adequate security measures, crowd management strategies, and emergency response plans to handle any unforeseen situations during the event.

7. Promotion and Marketing: Collaborating with event organizers for promotional activities or facilitating marketing efforts to attract a diverse audience and enhance the festival's visibility.

Overall, the venue owner's role is crucial in creating an immersive, safe, and enjoyable environment that complements the celebration of jazz music, fosters cultural diversity, and contributes to the success of the Bahrain International Jazz Festival.`}
				/>

				<h2 className="heading mt-6">Important Details</h2>
				<div>
					<p>Time: 6:00 P.M. to 10:00 P.M.</p>
					<p>Date: 10 December, 2023</p>
					<p className="large">Total: $300</p>
				</div>

				<div className="flex gap-2 mt-6">
					<Button onClick={handleAccept}>Accept</Button>
					<Button variant="destructive">Refuse</Button>
					<Button variant="secondary">Contact</Button>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default ContractPage;
