import Link from 'next/link';
import React from 'react'

interface Props{
  href: string;
  src: string;
  label: string;
  desc: string;
}

const CategoryCard = ({ href, src, label, desc }: Props) => {
  return (
		<Link href={href} className="group relative block bg-black rounded-xl h-[300px] overflow-hidden">
			<img
				alt="Developer"
				src={src}
				className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-40"
			/>

			<div className="relative p-4 sm:p-6 lg:p-8 flex flex-col gap-2">
				<p className="text-base font-medium uppercase tracking-widest text-white">
					{label}
				</p>

				<div className="">
					<div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
						<p className="text-sm text-gray-200">
							{desc}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CategoryCard