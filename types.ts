import type { v4 } from "uuid";

export interface Venue {
	id: typeof v4;
	owner: {
		id: typeof v4;
		name: string;
		title: string;
	}; //! this is temporary btw
	title: string;
	desc: string;
	imgs: Image[];
	location: Location;
	package: {
		title: string;
		price: Price;
    desc: string;
	};
  reviews: Review[]
}

export type Location = {
	//! this is also temporary
	google: string;
};

export type Image = {
	id: typeof v4;
	src: string;
	alt: string;
};

export type Price = {
	per: "day" | "hour" | "night" | "week";
  price: string;
};

export type Review = {
  user: { //! this is temporary
    id: typeof v4;
    name: string;
    title: string;
  },
  stars: number;
  subject: string;
  body: string;
}