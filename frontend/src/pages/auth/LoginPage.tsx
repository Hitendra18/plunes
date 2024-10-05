import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CLASS = "flex flex-col";
const LABEL_CLASS = "text-sm";
const INPUT_CLASS = "border-2 border-primary-blue/70 rounded-lg px-4 py-3 outline-none bg-white";

type Inputs = {
	userid: string,
	password: string,
}

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<Inputs>({
		mode: "onTouched"
	})

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log("data", data)
		console.log("errors", errors)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[700px]">
			<div className={`${CLASS}`}>
				<label htmlFor="userid" className={`${LABEL_CLASS}`}>User ID</label>
				<input type="text" id="userid" placeholder="User ID (email)" className={`${INPUT_CLASS}`} {...register("userid", {
					required: "User ID is required.",
					pattern: {
						value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						message: "Invalid User ID."
					}
				})} />
				{errors.userid && errors.userid.message &&
					<p className="text-primary-red text-xs">{errors.userid.message}</p>}
			</div>
			<div className={`${CLASS}`}>
				<label htmlFor="password" className={`${LABEL_CLASS}`}>Password</label>
				<div className={`${INPUT_CLASS} flex justify-between gap-2`} >
					<input type={showPassword ? "text" : "password"} id="password" placeholder="Password" className="outline-none flex-grow" {...register("password", {
						required: "Password is required.",
					})} />
					<button type="button" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
					</button>
				</div>
				{errors.password && errors.password.message &&
					<p className="text-primary-red text-xs">{errors.password.message}</p>}
			</div>
			<button
				disabled={!isValid} type="submit"
				className="bg-primary-green hover:bg-secondary-green transition-all duration-300 text-white w-full rounded py-3 text-lg font-bold disabled:cursor-not-allowed disabled:bg-primary-green/50">Log In</button>
		</form>
	)
}

