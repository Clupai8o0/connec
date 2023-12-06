import Image from "next/image";
import { faker } from "@faker-js/faker";
import { Button } from "../ui/button";
import Link from "next/link";
import { Pencil } from "lucide-react";

interface Props {
	pfp: string;
	name: string;
	title: string;
	desc?: string;
}

const Profile = ({ pfp, name, title, desc }: Props) => {
	return (
		<div className="w-full min-h-screen">
			<h1 className="hidden" aria-hidden>
				Profile
			</h1>

			<div className="relative w-full h-48">
				<Image
					src="/profile-bg.jpg"
					alt="buncha mountains"
					fill
					className="object-cover"
				/>
			</div>

			{/* profile */}
			<div className="px-12">
				<div className="relative h-[72px]">
					<div className="absolute w-36 h-36 rounded-full border-4 border-white -top-[72px] shadow-md">
						<img
							src={pfp}
							alt="A random avatar from faker"
							className="rounded-full w-36 h-36"
						/>
					</div>
				</div>

				<div className="mt-8 flex gap-4">
					<div>
						<p className="title font-semibold pb-2">{name}</p>
						<span className="muted">{title}</span>
					</div>

					<Link href="/app/settings">
						<Button
							variant="ghost"
							className="flex items-center gap-2 text-gray-600"
						>
							<Pencil /> Customize
						</Button>
					</Link>
				</div>
			</div>

			<div className="px-12 flex gap-4 mt-6">
				<div className="w-full">
					<div className="flex flex-col gap-4">
						<h2 className="heading">About</h2>
						<p>{desc}</p>
					</div>
				</div>

				{/* <div className="w-1/3 flex flex-col gap-6">
					<h2 className="heading px-4">Customize Your Profile</h2>

					<div className="rounded-md p-4 bg-gray-50">
						<h3 className="subsubheading">
							Get Started with your business profile
						</h3>
						<p>
							Creating a business profile offers numerous advantages for
							individuals looking to establish a professional presence or
							promote their brand. Here are a few compelling reasons why
							creating a business profile is...
						</p>
						<div className="flex gap-2 mt-2">
							<Link href="/app/dashboard/business">
								<Button>Create Now</Button>
							</Link>
							<Button variant="outline">Learn More</Button>
						</div>
					</div>

					<div className="rounded-md p-4 bg-gray-50">
						<h3 className="subsubheading">
							Get Started with your creative profile
						</h3>
						<p>
							Creating a creative profile can be immensely beneficial for
							individuals seeking to showcase their artistic talents, innovative
							ideas, or unique skills. Here are several reasons why crafting a
							creative profile is...
						</p>
						<div className="flex gap-2 mt-2">
							<Link href="/app/dashboard/artist">
								<Button>Create Now</Button>
							</Link>
							<Button variant="outline">Learn More</Button>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Profile;
