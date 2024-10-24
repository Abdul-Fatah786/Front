
const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`py-2 px-4 rounded bg-gray-800 hover:bg-gray-700 text-white ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
