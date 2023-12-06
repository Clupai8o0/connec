import Profile from "@/components/dashboard/Profile";
import Sidebar from "@/components/dashboard/Sidebar";
import { faker } from "@faker-js/faker";

function ProfilePage() {
	const user = {
		name: "Reem",
		pfp: "/reem.jpg",
		title: "Singer",
		desc: "Reem, an aspiring singer, radiates passion for music and an unyielding determination to captivate audiences with her soulful melodies. Embracing music as her lifeline, Reem's journey commenced with an innate love for rhythm and an unwavering desire to share her emotions through song. Her mellifluous voice intertwines effortlessly with heartfelt lyrics, leaving an indelible mark on listeners. Embracing diverse genres, from contemporary ballads to soul-stirring anthems, Reem's versatility amplifies her magnetic presence on stage. With dedication honed through countless rehearsals and performances, she strives to carve her place in the music industry. Reem's raw talent coupled with her earnest commitment reflects an artist poised to ascend to new heights, aiming to resonate with audiences globally through her compelling musical narratives.",
	};

	return (
		<>
			<Sidebar
				profile={{
					title: "Singer",
					name: "Reem",
					src: "/reem.jpg",
					url: "/reem",
				}}
			/>
			<Profile {...user} />
		</>
	);
}

export default ProfilePage;
