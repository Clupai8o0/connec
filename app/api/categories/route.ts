import { NextRequest } from "next/server";

import { handleError, handleSuccess } from "@/lib/api";
import { CategoryType as category } from "@/types";

const tempData = [
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
	{
		icon: {
			src: "/event.png",
			alt: "A picture of a calendar with a star",
		},
		name: "Category",
	},
];

export async function GET(req: NextRequest) {
	try {
		const type: string = req.nextUrl.searchParams.get("type") || "";
		if (!type) throw new Error("Missing required query category type");

		let data: any; //todo: this needs a type too
		if (type === category.Events) data = tempData;
		else if (type === category.Services) data = tempData;
		else if (type === category.Venues) data = tempData;
    else throw new Error("Given category type query does not exist")

		return handleSuccess("Successfully retrieved categories", data);
	} catch (e: any) {
		return handleError("Could not get categories", e);
	}
}
