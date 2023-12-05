import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Input } from "../ui/input";

const Price = () => {
	return (
		<div className="flex items-center gap-2">
			<Input className="w-[80px]" placeholder="$999" /> <span className="text-lg">/</span>{" "}
			<Select>
				<SelectTrigger className="w-[120px]">
					<SelectValue placeholder="Price Per..." />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="hour" defaultChecked>Hour</SelectItem>
					<SelectItem value="day">Day</SelectItem>
					<SelectItem value="night">Night</SelectItem>
					<SelectItem value="week">Week</SelectItem>
				</SelectContent>
			</Select>
		</div>
	);
};

export default Price;
