import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { generateKey } from "@/lib/api";

const types = [
	{
		label: "Morning",
		items: [
			{ value: "06:00", content: "06:00 AM" },
			{ value: "07:00", content: "07:00 AM" },
			{ value: "08:00", content: "08:00 AM" },
			{ value: "09:00", content: "09:00 AM" },
			{ value: "10:00", content: "10:00 AM" },
			{ value: "11:00", content: "11:00 AM" },
		],
	},
	{
		label: "Afternoon",
		items: [
			{ value: "12:00", content: "12:00 PM" },
			{ value: "13:00", content: "01:00 PM" },
			{ value: "14:00", content: "02:00 PM" },
			{ value: "15:00", content: "03:00 PM" },
			{ value: "16:00", content: "04:00 PM" },
			{ value: "17:00", content: "05:00 PM" },
		],
	},
	{
		label: "Evening",
		items: [
			{ value: "18:00", content: "06:00 PM" },
			{ value: "19:00", content: "07:00 PM" },
			{ value: "20:00", content: "08:00 PM" },
			{ value: "21:00", content: "09:00 PM" },
		],
	},
	{
		label: "Night",
		items: [
			{ value: "22:00", content: "10:00 PM" },
			{ value: "23:00", content: "11:00 PM" },
			{ value: "00:00", content: "12:00 AM" },
			{ value: "01:00", content: "01:00 AM" },
			{ value: "02:00", content: "02:00 AM" },
			{ value: "03:00", content: "03:00 AM" },
			{ value: "04:00", content: "04:00 AM" },
			{ value: "05:00", content: "05:00 AM" },
		],
	},
];

const TimeDropdown = ({ placeholder }: { placeholder: string }) => {
	return (
		<Select>
			<SelectTrigger className="w-[120px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{types.map((group) => (
					<SelectGroup key={generateKey()}>
						<SelectLabel>{group.label}</SelectLabel>
						{group.items.map((type) => (
							<SelectItem value={type.value} key={generateKey()}>
								{type.content}
							</SelectItem>
						))}
					</SelectGroup>
				))}
			</SelectContent>
		</Select>
	);
};

export default TimeDropdown;
