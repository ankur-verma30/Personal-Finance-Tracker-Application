const Header = () => {
	const logoutFnc = () => {
    alert('Logged out');
  };
	return (
		<div className="bg-blue-500 sticky top-0 left-0 font-bold text-2xl h-12 w-full flex justify-between items-center px-4">
			<p className="font-semibold text-white m-0">Pennywise</p>
			<p onClick={logoutFnc} className="font-semibold text-white opacity-80 hover:opacity-100 cursor-pointer hover:transition hover:duration-800">Logout</p>
		</div>
	);
};

export default Header;
