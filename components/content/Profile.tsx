import { faker } from "@faker-js/faker";

interface Props {
	className?: string;
	name?: string;
	title?: string;
	src?: string;
}

const Profile = ({ className, name, title, src }: Props) => {
	return (
		<div className={`flex gap-4 ${className}`}>
			<img
				src={(src && src) || faker.image.avatar()}
				width={64}
				height={64}
				alt="A random avatar from faker"
				className="rounded-full"
			/>
			<div className="flex flex-col justify-center">
				<p className="large leading-tight">
					{(name && name) || faker.person.fullName()}
				</p>
				<span className="muted">
					{(title && title) || faker.person.jobTitle()}
				</span>
			</div>
		</div>
	);
};

export default Profile;
