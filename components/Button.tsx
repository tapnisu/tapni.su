export interface ButtonProps {
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
	<button
		className="text-black bg-main-100 dark:bg-main-900 dark:text-main-100 hover:bg-main-100 dark:hover:bg-main-800 m-4 p-4 rounded-full border-main-300 dark:border-main-800 hover:border-main-200 dark:hover:border-main-700 transition-colors border-2"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
