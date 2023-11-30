import React from 'react'

const JobCard = () => {
  return (
		<article className="group border border-gray-300 rounded-xl">
			<img
				alt="Lava"
				src="/security.jpg"
				className="h-56 w-full rounded-t-xl object-cover transition group-hover:grayscale-[50%]"
			/>

			<div className="p-4">
				<time dateTime="2023-12-10" className="block text-xs text-gray-500">
					10th Dec 2023
				</time>
				<a href="#">
					<h3 className="text-lg leading-tight font-medium text-gray-900 truncate">
						Security Guard
					</h3>
				</a>

				<p className="mb-2 line-clamp-3 text-sm/relaxed text-gray-500 truncate">
					As a Security Guard, you will be responsible for maintaining a safe
					and secure environment for the premises you are assigned to. Duties
					include monitoring surveillance equipment, patrolling designated
					areas, and ensuring compliance with security protocols. Strong
					observation skills, the ability to remain calm under pressure, and
					good judgment are vital in this role.
				</p>

				<p className="large">$17 / hour</p>
			</div>
		</article>
	);
}

export default JobCard