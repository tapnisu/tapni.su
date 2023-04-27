export interface ButtonProps {
	children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
	<button
		className="text-main-50 font-semibold bg-accent-600 p-4 rounded-xl hover:bg-accent-700 transition-colors"
		type="button"
	>
		{children}
	</button>
);

export default Button;
