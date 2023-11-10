import { Review } from "@/types";

import Profile from "./Profile";
import Rating from "./Rating";
import Markdown from "./Markdown";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
	return (
		<div>
			<h1 className="heading mt-12 mb-6">Reviews</h1>
			<div className="flex flex-col gap-y-4">
				{reviews.map((review) => (
					<div className="bg-gray-100 w-full p-6 rounded-xl">
						<Profile {...review.user} className="mb-4" />
						<Rating stars={review.stars} />
						<h2 className="subsubheading mt-6">{review.subject}</h2>
						<Markdown content={review.body} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Reviews;
