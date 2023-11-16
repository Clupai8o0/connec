"use client"

import { useState } from "react";
import { banner } from "@/lib/config";

const Banner = () => {
	const [showBanner, setShowBanner] = useState(banner.show);

	return (
		showBanner && (
			<div className="flex gap-8 justify-between items-start py-2 px-4 w-full sm:items-center bg-primary">
				<div className="w-full flex justify-center">
					<p className="text-sm text-white font-semibold">{banner.content}</p>
				</div>

				<button
					type="button"
					className="flex items-center text-white rounded-lg text-sm p-1.5 hover:opacity-80"
					onClick={() => setShowBanner(false)}
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		)
	);
};

export default Banner;
