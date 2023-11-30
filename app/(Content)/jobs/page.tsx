import JobCard from '@/components/content/JobCard';
import SearchBar from '@/components/navigation/SearchBar';
import React from 'react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import JobCard2 from '@/components/content/JobCard2';
import JobCard3 from '@/components/content/JobCard3';
function JobsPage() {
  return (
		<main className="main">
			<h1 className="title">Job Listings</h1>

			<div className="flex gap-4 items-center mt-4 mb-8">
				<SearchBar />
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filters" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="filter-1">Filter 1</SelectItem>
						<SelectItem value="filter-2">Filter 2</SelectItem>
						<SelectItem value="filter-3">Filter 3</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="grid grid-cols-4 gap-4">
				<JobCard />
				<JobCard2 />
				<JobCard3 />
				<JobCard />
				<JobCard2 />
				<JobCard3 />
				<JobCard />
				<JobCard2 />
				<JobCard3 />
				<JobCard />
				<JobCard2 />
				<JobCard3 />
			</div>
		</main>
	);
}

export default JobsPage