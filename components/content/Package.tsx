import { Package } from "@/types";

import Markdown from "./Markdown";
import { Button } from "../ui/button";

const Package = ({ desc, price, title }: Package) => {
	return (
		<div className="rounded-xl bg-gray-100 sticky top-6 p-6">
			<h1 className="subsubheading">{title}</h1>
			<h2 className="mt-4 title">
				{price.value}/{price.per}
			</h2>
			<Markdown content={desc} />

			<div className="flex gap-x-2">
				<Button className="w-1/2">Book Now</Button>
				<Button className="w-1/2 border-gray-300" variant="outline">Contact Us</Button>
			</div>
		</div>
	);
};

export default Package;
