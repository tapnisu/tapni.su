export interface ButtonProps {
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
	<button
		className="text-black bg-main-200 dark:bg-main-800 dark:text-main-100 m-4 p-4 rounded-full border-main-200 dark:border-main-800 hover:border-main-300 dark:hover:border-main-700 shadow-main-300 dark:shadow-main-700 hover:shadow-lg transition-colors border-2"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
