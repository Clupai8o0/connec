import React from "react";

const JobCard2 = () => {
	return (
		<article className="group border border-gray-300 rounded-xl">
			<img
				alt="Lava"
				src="/customer-service.jpg"
				className="h-56 w-full rounded-t-xl object-cover transition group-hover:grayscale-[50%]"
			/>

			<div className="p-4">
				<time dateTime="2023-12-10" className="block text-xs text-gray-500">
					10th Dec 2023
				</time>
				<a href="#">
					<h3 className="text-lg leading-tight font-medium text-gray-900 truncate">
						Customer Service Representative
					</h3>
				</a>

				<p className="mb-2 line-clamp-3 text-sm/relaxed text-gray-500 truncate">
					As a Customer Service Representative, you will interact with customers
					to handle inquiries, resolve issues, and provide exceptional service.
					Responsibilities include answering phone calls, responding to emails,
					and assisting customers with product information and support. Strong
					communication skills and the ability to multitask in a fast-paced
					environment are essential.
				</p>

				<p className="large">$15.50 / hour</p>
			</div>
		</article>
	);
};

export default JobCard2;
