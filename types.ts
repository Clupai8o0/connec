export interface Venue {
	id: string;
	owner: {
		id: string;
		name: string;
		title: string;
	}; //! this is temporary btw
	title: string;
	desc: string;
	imgs: Image[];
	location: Location;
	package: Package;
  reviews: Review[]
}

export type Location = {
	//! this is also temporary
	google: string;
};

export type Image = {
	id: string;
	src: string;
	alt: string;
};

export type Price = {
	per: "day" | "hr" | "night" | "week";
  value: string;
};

export type Review = {
  user: { //! this is temporary
    id: string;
    name: string;
    title: string;
  },
  stars: number;
  subject: string;
  body: string;
}

export type Package = {
	title: string;
	price: Price;
	desc: string;
};