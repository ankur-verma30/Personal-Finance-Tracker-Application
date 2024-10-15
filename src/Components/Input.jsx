/* eslint-disable react/prop-types */

const Input = ({ label, state, setState, placeholder }) => {
	return (
		<div className="">
			<p className="capitalize mb-1 text-base">{label}</p>
			<input
				className="border-0 border-b w-full py-2 px-0 text-base focus:outline-none opacity-80 focus:opacity-100 focus:transition-all focus:duration-200 placeholder:text-gray-500 mb-2"
				type="text"
				placeholder={placeholder}
				value={state}
				onChange={(e) => setState(e.target.value)}
			/>
		</div>
	);
};

export default Input;
