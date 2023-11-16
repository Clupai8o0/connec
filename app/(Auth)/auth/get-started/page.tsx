"use client";

import { useUser, useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PaginatedForm from "@/components/form/PaginatedForm";

//* after signing up the user will be redirected here

//todo: check if user has already given important details
//todo: if they haven't then make them add those details
function GetStarted() {
	const router = useRouter();
	const { isLoaded, isSignedIn, user } = useUser();

	useEffect(() => {
		//todo: check if user has already finished "get-started"
		const hasFinishedSetup = false;

		if (hasFinishedSetup) router.replace("/app/dashboard");
	}, [isLoaded, isSignedIn]);

	return (
		<div className="w-full">
			<PaginatedForm />
		</div>
	);
}

export default GetStarted;
