import Image from "next/image";
import { faker } from "@faker-js/faker";
import { Button } from "../ui/button";

const BusinessProfile = () => {
	return (
		<div className="w-full">
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
							src={faker.image.avatar()}
							alt="A random avatar from faker"
							className="rounded-full w-36 h-36"
						/>
					</div>
				</div>

				<div className="mt-8">
					<p className="title font-semibold pb-2">{faker.person.fullName()}</p>
					<span className="muted">{faker.person.jobTitle()}</span>
				</div>
			</div>

			<div className="px-12 flex gap-4 mt-6">
				<div className="w-2/3">
					<div className="flex flex-col gap-4">
						<h2 className="heading">About</h2>
						<img
							src="/about.jpg"
							alt="underwater somewhere"
							className="w-full rounded-md h-80 object-cover"
						/>
						<p>
							Meet Evelyn, a vivacious soul wrapped in an aura of creativity and
							boundless curiosity. With her vibrant mane of auburn curls that
							cascade down her shoulders, she often pairs her eclectic fashion
							sense with oversized spectacles that add a touch of whimsy to her
							look. Evelyn's passion for storytelling is palpable in every
							conversation she engages in, her expressive gestures painting
							vivid pictures as she speaks. An avid traveler and a voracious
							reader, she carries the world in her heart and the library in her
							mind, always eager to explore new cultures and delve into
							uncharted literary realms.
						</p>
						<p>
							Beyond her artistic pursuits, Evelyn possesses a keen intellect
							and a razor-sharp wit that she wields with kindness. Her laughter
							echoes through rooms, effortlessly drawing people into her
							magnetic presence. As an advocate for social causes, she channels
							her empathy into action, often volunteering her time to support
							community initiatives and championing inclusivity and equality.
							Behind her gentle demeanor lies a resilient spirit, forged through
							life's trials, which fuels her determination to make a positive
							impact in the world, one step at a time.
						</p>
					</div>
				</div>

				<div className="w-1/3 flex flex-col gap-6">
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
							<Button>Create Now</Button>
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
							<Button>Create Now</Button>
							<Button variant="outline">Learn More</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessProfile;
