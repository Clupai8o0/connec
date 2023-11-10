import { FaStar, FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

interface Props {
	stars: number;
}

//todo: little loading thing
const Rating = ({ stars }: Props) => {
	const starsList = [];
	let n = stars;
	//todo: I hate this algorithm
	for (let i = 0; i < 5; i++) {
		n -= 1;
		if (n === -0.5) starsList.push(0.5);
		else if (n < -0.5) starsList.push(0);
		else starsList.push(1);
	}

	return (
		<div className="flex">
			{starsList.map((star) =>
				star === 1 ? (
					<FaStar />
				) : star === 0 ? (
					<FaRegStar />
				) : (
					<FaStarHalfStroke />
				)
			)}
		</div>
	);
};

export default Rating;
