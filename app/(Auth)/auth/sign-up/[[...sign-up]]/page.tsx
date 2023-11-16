import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { SignUp as ClerkSignUp } from "@clerk/nextjs";

function SignUp() {
	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<main className="main mt-24 flex justify-center">
				<ClerkSignUp
					appearance={{
						elements: {
							card: "shadow-none border border-gray-300",
						},
					}}
					afterSignUpUrl="/auth/get-started"
				/>
			</main>
			<Footer variant />
		</div>
	);
}

export default SignUp;
