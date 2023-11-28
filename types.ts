export type Venue = {
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
	reviews: Review[];
};
export type Event = {
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
	reviews: Review[];
};
export type Service = {
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
	reviews: Review[];
};

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
	user: {
		//! this is temporary
		id: string;
		name: string;
		title: string;
	};
	stars: number;
	subject: string;
	body: string;
};

export type Package = {
	title: string;
	price: Price;
	desc: string;
};

export enum CategoryType {
	Events = "events",
	Services = "services",
	Venues = "venues",
}

export enum ControlTypes {
	Input = "input",
	Date = "date",
	Location = "location",
	Textarea = "textarea",
	File = "file",
	Checkbox = "checkbox",
}

export enum DashboardContent {
	Events = "events",
	Services = "services",
	Venues = "venues",
	Profile = "profile",
}
