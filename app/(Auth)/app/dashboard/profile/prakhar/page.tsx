import Profile from "@/components/dashboard/Profile";
import Sidebar from "@/components/dashboard/Sidebar";
import { faker } from "@faker-js/faker";

function ProfilePage() {
	const user = {
		name: "Prakhar",
		pfp: "/prakhar.jpg",
		title: "Golden Palace Hotel Owner",
		desc: "Prakhar, the visionary owner of the Golden Palace Hotel, redefines luxury hospitality with an unwavering commitment to excellence. His journey began with a passion for crafting unparalleled guest experiences, making the hotel a beacon of grandeur in the industry. Prakhar's dedication ensures every aspect, from impeccable service to cutting-edge amenities, surpasses expectations. His innovative spirit continually sets new benchmarks, keeping the hotel at the forefront of luxurious indulgence. Beyond hospitality, he values fostering enduring relationships, fostering a culture of camaraderie within the hotel. Prakhar's philanthropic efforts and commitment to sustainability highlight his aspiration to make a meaningful impact, reflecting a harmonious blend of visionary leadership and genuine dedication to offering guests an unforgettable experience.",
	};

	return (
		<>
			<Sidebar />
			<Profile {...user} />
		</>
	);
}

export default ProfilePage;
