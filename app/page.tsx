import Categories from "@/components/content/Categories";
import Featured from "@/components/content/Featured";
import Guides from "@/components/content/Guides";
import Hero from "@/components/content/Hero";
import JumbotronCards from "@/components/content/JumbotronCards";
import Sponsors from "@/components/content/Sponsors";
import Testimonials from "@/components/content/Testimonials";

export default function Home() {
	return (
		<main className="w-full h-full relative flex flex-col items-center">
			<Hero />
			<Sponsors />
			<JumbotronCards />
			<Featured />
			<Categories />
			<Testimonials />
			<Guides />
			<Hero />
		</main>
	);
}
