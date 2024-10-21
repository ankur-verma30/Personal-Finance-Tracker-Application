import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const SignUpSignIn = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [loginform, setLoginform] = useState(false);
	const [loading, setloading] = useState(false);

	const createDoc = ({ uid }) => {
		//when we use google sign making doc is very difficult so we will make doc when the uid doesn't exist in the database
		//create a doc
		console.log(uid);
	};

	const LoginUsingEmail = () => {
		if (email != "" && password != "") {
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					toast.success("User logged in successfully");
					setloading(false);
					console.log(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(errorCode, errorMessage);
					setloading(false);
					toast.error(errorMessage);
				});
		} else {
			toast.error("Fill all the mandatory fields");
		}
	};

	const signUpWithEmail = () => {
		if (
			name != "" &&
			email != "" &&
			password != "" &&
			confirmPassword != "" &&
			password === confirmPassword
		) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user;
					toast.success("User created successfully");
					//clearing all the values
					setloading(false);
					setConfirmPassword("");
					setName("");
					setEmail("");
					setPassword("");
					console.log(user);
					//create a doc with user id as the following id
					createDoc(user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					toast.error(errorMessage);
					setloading(false);
					console.log(errorCode, errorMessage);
				});
		} else {
			if (
				name.length === 0 &&
				email.length === 0 &&
				password.length === 0 &&
				confirmPassword.length === 0
			) {
				toast.error("All fields are mandatory");
				return;
			} else if (password.length < 8) {
				toast.error("Password must be atleast 8 characters long");
				return;
			} else if (password !== confirmPassword) {
				toast.error("Passwords do not match");
			}
			toast.error("Something is wrong");
			setloading(false);
		}

		console.log(name, email, password, confirmPassword);
		//authenticate the user/create a new accound using email and password
	};

	const handleSubmit = () => {
		console.log(name, email, password, confirmPassword);
	};
	return (
		<>
			{loginform ? (
				<div className="w-[70%] max-w-[600px] h-auto shadow-[0px_0px_30px_8px_rgba(227,227,227,0.75)] rounded-2xl p-4 ">
					<h2 className="text-2xl text-center mt-0 mb-4 ">
						Login in{" "}
						<span className="font-semibold text-blue-700 ">Pennywise.</span>
					</h2>
					<form onSubmit={handleSubmit}>
						<Input
							type={"email"}
							label={"Email"}
							state={email}
							setState={setEmail}
							placeholder={"abc123@gmail.com"}
						/>
						<Input
							type={"password"}
							label={"Password"}
							state={password}
							setState={setPassword}
							placeholder={"abc@123"}
						/>
						<Button
							disabled={loading}
							text={loading ? "Loading..." : "Login Using Email and Password"}
							onClick={LoginUsingEmail}
							blue={false}
						/>
						<p className="my-2 text-center font-medium mb-2">Or</p>
						<Button
							text={loading ? "Loading..." : "Login using Google"}
							blue={true}
						/>
						<p className="my-2 text-center font-medium mb-2">
							Or Don&#39;t have an account{" "}
							<span
								onClick={() => setLoginform(!loginform)}
								className="text-blue-700 font-semibold cursor-pointer">
								Click Here
							</span>
						</p>
					</form>
				</div>
			) : (
				<div className="w-[70%] max-w-[600px] h-auto shadow-[0px_0px_30px_8px_rgba(227,227,227,0.75)] rounded-2xl p-4 ">
					<h2 className="text-2xl text-center mt-0 mb-4 ">
						SignUp in{" "}
						<span className="font-semibold text-blue-700 ">Pennywise.</span>
					</h2>
					<form onSubmit={handleSubmit}>
						<Input
							type={"text"}
							label={"Full Name"}
							state={name}
							setState={setName}
							placeholder={"Ankur Verma"}
						/>
						<Input
							type={"email"}
							label={"Email"}
							state={email}
							setState={setEmail}
							placeholder={"abc123@gmail.com"}
						/>
						<Input
							type={"password"}
							label={"Password"}
							state={password}
							setState={setPassword}
							placeholder={"abc@123"}
						/>
						<Input
							type={"password"}
							label={"Confirm Password"}
							state={confirmPassword}
							setState={setConfirmPassword}
							placeholder={"abc@123"}
						/>
						<Button
							disabled={loading}
							text={loading ? "Loading..." : "Sign Up using Email and Password"}
							onClick={signUpWithEmail}
							blue={false}
						/>
						<p className="my-2 text-center font-medium mb-2">Or</p>
						<Button
							text={loading ? "Loading..." : "Sign Up using Google"}
							blue={true}
						/>

						<p className="my-2 text-center font-medium mb-2">
							Already have an account?{" "}
							<span
								onClick={() => setLoginform(!loginform)}
								className="text-blue-700 font-semibold cursor-pointer">
								Click Here
							</span>
						</p>
					</form>
				</div>
			)}
		</>
	);
};

export default SignUpSignIn;
