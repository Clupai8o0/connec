"use client";

import Markdown from "@/components/content/Markdown";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";

function ContractPage() {
	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<main className="max-w-4xl w-full relative px-6 xl:px-0 mx-auto">
				<h1 className="title mt-12">Contract</h1>
				<h2 className="heading mt-6">About Event</h2>
				<Markdown
					content={`# Celebrating Jazz Rhythms Amidst Bahrain's Splendor
The Bahrain International Jazz Festival returns to Bahrain Bay Park, promising an unforgettable evening dedicated to the timeless and soulful melodies of jazz. This vibrant event unites passionate jazz enthusiasts and music aficionados for a night of enchanting performances and musical discovery.

# Captivating Performances by World-Class Artists
Experience the magic of live jazz with captivating performances by an eclectic lineup of acclaimed international jazz musicians. From smooth melodies to upbeat rhythms, witness the versatility and innovation of this beloved genre showcased by both seasoned jazz legends and emerging talents.

# Local Talent Spotlight
In addition to international acts, the festival proudly highlights Bahrain's vibrant jazz scene, providing a platform for local jazz musicians to showcase their talent. Experience the rich tapestry of jazz interpretations, reflecting the region's unique musical influences and cultural diversity.

# Immersive Outdoor Setting
The enchanting Bahrain Bay Park serves as the perfect backdrop for this musical extravaganza. Amidst the serene waterfront and lush greenery, attendees can revel in the ambiance, socialize, and delight in the communal celebration of jazz music under the starlit sky.

# Culinary Delights and Artisanal Crafts
Explore a variety of culinary offerings from local vendors offering delectable cuisines and beverages. Indulge in gourmet delights while browsing through artisanal crafts and merchandise available at the festival, adding to the holistic experience of the event.`}
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
				<div></div>

				<div className="flex gap-2">
					<Button>Accept</Button>
					<Button variant="destructive">Refuse</Button>
					<Button variant="secondary">Contact</Button>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default ContractPage;
