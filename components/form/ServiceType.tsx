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
		value: "artist",
		content: "Artist",
	},
	{
		key: generateKey(),
		value: "singer",
		content: "Singer",
	},
	{
		key: generateKey(),
		value: "catering",
		content: "Catering",
	},
	{
		key: generateKey(),
		value: "event-planning",
		content: "Event Planning",
	},
	{
		key: generateKey(),
		value: "graphic-design",
		content: "Graphic Design",
	},
	{
		key: generateKey(),
		value: "photography",
		content: "Photography",
	},
	{
		key: generateKey(),
		value: "security",
		content: "Security",
	},
	{
		key: generateKey(),
		value: "sound-lighting",
		content: "Sound & Lighting",
	},
	{
		key: generateKey(),
		value: "transportation",
		content: "Transportation",
	},
	{
		key: generateKey(),
		value: "other",
		content: "Other",
	},
];

const ServiceType = () => {
	return (
		<Select>
			<SelectTrigger className="w-[350px]">
				<SelectValue placeholder="Service Type..." />
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

export default ServiceType;
