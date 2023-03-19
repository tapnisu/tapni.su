export interface ButtonProps {
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
	<button
		className="text-accent-50 font-semibold bg-accent-700 m-4 p-4 rounded-full hover:bg-accent-600 shadow-accent-600 shadow transition-colors"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
