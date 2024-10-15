import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
const SignUpSignIn = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
		} catch (error) {
			console.log("Form submission ", error);
		}
	};
	return (
		<div className="w-[70%] max-w-[600px] h-auto shadow-[0px_0px_30px_8px_rgba(227,227,227,0.75)] rounded-2xl p-4 ">
			<h2 className="text-2xl text-center mt-0 mb-4 ">
				SignUp in{" "}
				<span className="font-semibold text-blue-700 ">Pennywise.</span>
			</h2>
			<form onSubmit={handleSubmit}>
				<Input
					label={"Full Name"}
					state={name}
					setState={setName}
					placeholder={"Ankur Verma"}
				/>
				<Input
					label={"Email"}
					state={email}
					setState={setEmail}
					placeholder={"abc123@gmail.com"}
				/>
				<Input
					label={"Password"}
					state={password}
					setState={setPassword}
					placeholder={"abc@123"}
				/>
				<Input
					label={"Confirm Password"}
					state={confirmPassword}
					setState={setConfirmPassword}
					placeholder={"abc@123"}
				/>
       <Button text={"Sign Up using Email and Password"} onClick={handleSubmit} blue={false}/>
       <p className="my-2 text-center font-medium mb-2">Or</p>
       <Button text={"Sign Up using Google"} onClick={handleSubmit} blue={true}/>
    
			</form>
		</div>
	);
};

export default SignUpSignIn;
