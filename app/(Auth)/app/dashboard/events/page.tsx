import Events from '@/components/dashboard/Events'
import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react'

function EventsPage() {
  return (
		<>
			<Sidebar
				profile={{
					title: "Singer",
					name: "Reem",
					src: "/reem.jpg",
					url: "/reem",
				}}
			/>
			<Events />
		</>
	);
}

export default EventsPage