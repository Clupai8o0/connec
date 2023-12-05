import Profile from "@/components/dashboard/Profile";
import { faker } from "@faker-js/faker";
import { Sidebar } from "lucide-react";

//todo: btw this has to be done better
function ProfilePage() {
	const user = {
		name: faker.person.fullName(),
		pfp: faker.image.avatar(),
		title: faker.person.jobTitle(),
	};

	return (
		<>
			<Sidebar />
			<Profile {...user} />
		</>
	);
}

export default ProfilePage;
