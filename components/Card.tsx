import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProps {
	title: string;
	image?: StaticImageData;
	url?: string;
	description: string;
	comments?: string;
}

const Card = (props: CardProps) => (
	<div className="bg-main-100 dark:bg-main-900 m-4 rounded-xl">
		{props.image ? (
			<Image
				src={props.image}
				className="w-full rounded-t-xl"
				alt={props.title}
				width={640}
				height={640}
				priority={true}
				placeholder="blur"
			/>
		) : (
			<></>
		)}

		<div className="p-4">
			{props.url ? (
				<Link
					href={props.url}
					className="text-xl cursor-pointer text-main-900 dark:text-main-100 hover:text-accent-600 dark:hover:text-accent-500 transition-colors"
				>
					{props.title}
				</Link>
			) : (
				<h2 className="text-xl text-main-900 dark:text-main-100">
					{props.title}
				</h2>
			)}

			<p className="text-main-800 dark:text-main-400 font-sans">
				{props.description}
				<br />
				{props.comments}
			</p>
		</div>
	</div>
);

export default Card;
