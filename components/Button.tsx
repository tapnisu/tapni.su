export interface ButtonProps {
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => (
	<button
		className="text-main-50 font-semibold bg-accent-700 m-4 p-4 rounded-xl hover:bg-accent-600 transition-colors"
		type="button"
	>
		{props.children}
	</button>
);

export default Button;
