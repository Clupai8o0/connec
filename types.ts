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
	id: string;
	src: string;
	alt: string;
};

export type Price = {
	per: "day" | "hour" | "night" | "week";
  price: string;
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