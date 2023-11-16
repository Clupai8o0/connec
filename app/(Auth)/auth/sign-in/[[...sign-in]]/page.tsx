import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import { SignIn as ClerkSignIn } from "@clerk/nextjs";

function SignIn() {
	return (
		<div className="flex flex-col w-full">
			<Navbar />
			<main className="main mt-24 flex justify-center">
				<ClerkSignIn
					appearance={{
						elements: {
							card: "shadow-none border border-gray-300",
						},
					}}
				/>
			</main>
			<Footer variant />
		</div>
	);
}

export default SignIn;
