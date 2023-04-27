import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface CardProps {
	title: string;
	image?: StaticImageData;
	url?: string;
	description: string;
	comments?: string;
}

const Card = ({ title, image, url, description, comments }: CardProps) => (
	<div className="bg-main-100 dark:bg-main-900 m-4 rounded-xl">
		{image ? (
			<Image
				src={image}
				className="w-full rounded-t-xl"
				alt={title}
				sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					400px"
				placeholder="blur"
			/>
		) : (
			<></>
		)}

		<div className="p-4">
			{url ? (
				<Link
					href={url}
					className="text-xl cursor-pointer text-main-900 dark:text-main-100 hover:text-accent-600 dark:hover:text-accent-500 transition-colors"
				>
					{title}
				</Link>
			) : (
				<h2 className="text-xl text-main-900 dark:text-main-100">{title}</h2>
			)}

			<p className="text-main-800 dark:text-main-400 font-sans">
				{description}
				<br />
				{comments}
			</p>
		</div>
	</div>
);

export default Card;
