import Image from "next/image";

import SearchBar from "../navigation/SearchBar";

const Hero = () => {
	return (
		<div className="relative w-full h-[600px] z-0">
			<Image
				src="/hero.jpg"
				fill
				alt="Music festival event"
				className="object-cover"
			/>
			<div className="absolute w-full h-full bg-black bg-opacity-40" />

			{/* Content */}
			<div className="w-full relative z-10 h-full flex flex-col justify-center items-center text-white">
				<h1 className="hero max-w-xl text-center">
          {/* //todo: good lord that color is disgusting */}
					Turning Dreams <br/> Into Reality: <span className="text-primary">Events</span>
				</h1>
				<p className="paragraph max-w-2xl text-center text-gray-200">
					Transforming dreams into unforgettable events. Our team's passion and
					expertise bring your vision to life, creating cherished memories with
					every occasion.
				</p>
        <SearchBar />
			</div>
		</div>
	);
};

export default Hero;
