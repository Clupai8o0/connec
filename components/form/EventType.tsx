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
	{
		key: generateKey(),
		value: "concert",
		content: "Concert",
	},
	{
		key: generateKey(),
		value: "ceremony",
		content: "Ceremony",
	},
	{
		key: generateKey(),
		value: "conference",
		content: "Conference",
	},
	{
		key: generateKey(),
		value: "fashion-show",
		content: "Fashion Show",
	},
	{
		key: generateKey(),
		value: "festival",
		content: "Festival",
	},
	{
		key: generateKey(),
		value: "seminar",
		content: "Seminar",
	},
	{
		key: generateKey(),
		value: "wedding",
		content: "Wedding",
	},
	{
		key: generateKey(),
		value: "other",
		content: "Other",
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
