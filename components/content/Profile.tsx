import { faker } from "@faker-js/faker";

interface Props {
	className?: string;
}

const Profile = ({ className }: Props) => {
	return (
		<div className={`flex gap-4 ${className}`}>
			<img
				src={faker.image.avatar()}
				width={64}
				height={64}
				alt="A random avatar from faker"
        className="rounded-full"
			/>
      <div className="flex flex-col justify-center">
        <p className="large leading-tight">{faker.person.fullName()}</p>
        <span className="muted">{faker.person.jobTitle()}</span>
      </div>
		</div>
	);
};

export default Profile;
