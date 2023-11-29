import Banner from "@/components/content/Banner";
import CTA from "@/components/content/CTA";
import Categories from "@/components/content/Categories";
import FAQs from "@/components/content/FAQs";
import Featured from "@/components/content/Featured";
import Guides from "@/components/content/Guides";
import Hero from "@/components/content/Hero";
import JumbotronCards from "@/components/content/JumbotronCards";
import Sponsors from "@/components/content/Sponsors";
import Testimonials from "@/components/content/Testimonials";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

// todo: a sidebar for easier navigation?
// todo: also we need a one shortcut all solutions thing
//todo: also the scrollbar
//todo: also its missing the important venues services and events thing but lets decide that later
//todo: also missing the loading (that thing I forgot the name) animation transition

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<Banner />
			<Navbar darkMode absolute />
			<main className="w-full h-full relative flex flex-col items-center">
				<Hero />
				<Sponsors />
				<JumbotronCards />
				<Featured />
				<Categories />
				<Testimonials />
				<Guides />
				<FAQs />
				<CTA />
			</main>
			<Footer />
		</div>
	);
}
