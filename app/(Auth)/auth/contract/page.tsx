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
					content={`Welcome to "Unveiling Masterpieces," an exquisite art exhibition that invites you on a visual journey through captivating artistic expressions. This exhibition showcases an eclectic array of artworks from renowned local and international artists.

# Diverse Artistic Repertoire:
Immerse yourself in a diverse tapestry of artistic styles, from contemporary abstracts to classical portraits, ensuring a rich and varied experience for art enthusiasts and collectors alike.

# Featured Artists:
Discover the visions of both established and emerging artists, each piece a reflection of their unique perspectives and creative narratives. Our exhibition proudly presents a curated selection that encompasses a spectrum of emotions and techniques.

The exhibition's thematic approach invites contemplation and introspection, exploring themes of identity, nature, societal reflections, and the human condition. Each artwork serves as a window into the artist's soul, inviting interpretation and discourse.

# Interactive Engagement:
Engage with the art on a deeper level through interactive sessions led by curators or artists themselves. Gain insights into the creative process, inspirations, and stories behind the masterpieces displayed.

Participate in enlightening discussions and workshops, fostering artistic dialogues among attendees, artists, and experts. Delve into the world of artistry, exploring techniques, influences, and the ever-evolving art landscape.

Be captivated by specially curated installations and highlight pieces strategically placed to evoke emotional resonance and aesthetic appreciation. Witness the convergence of creativity and innovation.`}
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
