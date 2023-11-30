import Profile from "@/components/dashboard/Profile";
import { faker } from "@faker-js/faker";

//todo: btw this has to be done better
function ProfilePage() {
	const user = {
		name: faker.person.fullName(),
		pfp: faker.image.avatar(),
		title: faker.person.jobTitle(),
	};

	return <Profile {...user} />;
}

export default ProfilePage;
