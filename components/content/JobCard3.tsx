import React from "react";

const JobCard3 = () => {
	return (
		<article className="group border border-gray-300 rounded-xl">
			<img
				alt="Lava"
				src="/cook.jpg"
				className="h-56 w-full rounded-t-xl object-cover transition group-hover:grayscale-[50%]"
			/>

			<div className="p-4">
				<time dateTime="2023-12-10" className="block text-xs text-gray-500">
					10th Dec 2023
				</time>
				<a href="#">
					<h3 className="text-lg leading-tight font-medium text-gray-900 truncate">
						Line Cook
					</h3>
				</a>

				<p className="mb-2 line-clamp-3 text-sm/relaxed text-gray-500 truncate">
					As a Line Cook, you&apos;ll be responsible for preparing and cooking
					food items as per the established recipes and guidelines. Your role
					involves working on a specific station in the kitchen, ensuring that
					dishes are prepared accurately, efficiently, and to high-quality
					standards. Collaboration with the kitchen team and the ability to work
					in a fast-paced environment are crucial.
				</p>

				<p className="large">$16.50 / hour</p>
			</div>
		</article>
	);
};

export default JobCard3;
