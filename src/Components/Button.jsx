/* eslint-disable react/prop-types */

const Button = ({ text, onClick, blue, disabled }) => {
	return (
		<div
			onClick={onClick}
			className={
				blue
					? "bg-blue-500 text-white hover:bg-white  hover:border-2 hover:border-gray-400 hover:text-blue-500 hover:transition-all hover:duration-300 flex items-center justify-center p-2 rounded-lg"
					: "text-blue-500 bg-white text-center w-full my-4 mx-F0 p-2 rounded-md cursor-pointer flex items-center justify-center h-auto hover:bg-blue-500 hover:text-white hover:transition-all hover:duration-300  border-2 border-gray-400"
			}
			disabled={disabled}>
			{text}
		</div>
	);
};

export default Button;
