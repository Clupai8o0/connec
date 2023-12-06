import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { generateKey } from "@/lib/api";

const types = [
	{
		key: generateKey(),
		value: "party",
		content: "Party",
	},
	{
		key: generateKey(),
		value: "non-profit",
		content: "Non Profit",
	},
];

const EventType = () => {
	return (
		<Select>
			<SelectTrigger className="w-[350px]">
				<SelectValue placeholder="Event Type..." />
			</SelectTrigger>
			<SelectContent>
				{types.map((type) => (
					<SelectItem value={type.value} key={type.key}>
						{type.content}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default EventType;
