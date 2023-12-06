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
		value: "singer",
		content: "Singer",
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
