export interface LayoutProps {
	children: React.ReactNode;
}

const Button = (props: LayoutProps) => (
	<button
		className="text-black bg-white dark:bg-neutral-900 dark:text-white hover:bg-indigo-100 dark:hover:bg-neutral-800 m-4 p-4 rounded-full border-neutral-300 dark:border-neutral-800 hover:border-indigo-200 dark:hover:border-neutral-700 transition-colors border-2"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
