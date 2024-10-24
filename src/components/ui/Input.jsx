
const Input = ({ className, ...props }) => {
    return (
        <input
            className={`border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 ${className}`}
            {...props}
        />
    );
};

export default Input;
