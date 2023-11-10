import { faker } from "@faker-js/faker";

interface Props {
	name: string;
	title: string; //! this is all temporary
	className?: string;
}

const Profile = ({ name, title, className }: Props) => {
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
        <p className="large leading-tight">{name}</p>
        <span className="muted">{title}</span>
      </div>
		</div>
	);
};

export default Profile;
