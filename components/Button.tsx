export interface ButtonProps {
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
	<button
		className="text-accent-100 font-semibold bg-accent-500 dark:bg-accent-400 m-4 p-4 rounded-full hover:bg-accent-400 dark:hover:bg-accent-300 shadow-accent-500 dark:shadow-accent-400 shadow transition-colors"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
