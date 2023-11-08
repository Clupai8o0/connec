import NextImage from "next/image";

import { Image } from "@/types";

interface Props {
	imgs: Image[];
}

const Gallery = ({ imgs }: Props) => {
	//todo: spotlight option
	//todo: view more option

	return (
		<div className="w-full flex flex-col md:flex-row gap-2 overflow-hidden rounded-2xl">
			<div className="w-full md:w-1/2 h-[400px] relative">
				<NextImage
					src={imgs[0].src}
					key={imgs[0].id}
					alt={imgs[0].alt}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className="w-full md:w-1/2 h-[400px] grid grid-cols-2 gap-2">
				<div className="w-full h-full relative">
					<NextImage
						src={imgs[1].src}
						key={imgs[1].id}
						alt={imgs[1].alt}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full relative">
					<NextImage
						src={imgs[2].src}
						key={imgs[2].id}
						alt={imgs[2].alt}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full relative">
					<NextImage
						src={imgs[3].src}
						key={imgs[3].id}
						alt={imgs[3].alt}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div className="w-full h-full relative">
          {/* //todo: turn this into button */}
					<NextImage
						src={imgs[4].src}
						key={imgs[4].id}
						alt={imgs[4].alt}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
