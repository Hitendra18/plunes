import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CLASS = "flex flex-col";
const LABEL_CLASS = "text-sm";
const INPUT_CLASS = "border-2 border-primary-blue/70 rounded-lg px-4 py-3 outline-none bg-white";

type Inputs = {
	userid: string,
	mobile: string,
	password: string,
	confirmPassword: string
}

export default function SignupPage() {
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const {
		register,
		handleSubmit,
		watch,
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
				<label htmlFor="mobile" className={`${LABEL_CLASS}`}>Mobile No.</label>
				<input type="text" placeholder="Mobile Number" id="mobile" className={`${INPUT_CLASS}`} {...register("mobile", {
					required: "Mobile is required.",
					pattern: {
						value: /^\+?[1-9]\d{0,2}[- ]?\d{8,15}$/,
						message: "Invalid Mobile Number."
					}
				})} />
				{errors.mobile && errors.mobile.message &&
					<p className="text-primary-red text-xs">{errors.mobile.message}</p>}
			</div>
			<div className={`${CLASS}`}>
				<label htmlFor="password" className={`${LABEL_CLASS}`}>Password</label>
				<div className={`${INPUT_CLASS} flex justify-between gap-2`} >
					<input type={showPassword ? "text" : "password"} id="password" placeholder="Password" className="outline-none flex-grow" {...register("password", {
						required: "Password is required.",
						pattern: {
							message: "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
							value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/
						},
						minLength: {
							value: 8,
							message: "Password must be at least 8 characters long."
						}
					})} />
					<button type="button" onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
					</button>
				</div>
				{errors.password && errors.password.message &&
					<p className="text-primary-red text-xs">{errors.password.message}</p>}
			</div>
			<div className={`${CLASS}`}>
				<label htmlFor="confirmPassword" className={`${LABEL_CLASS}`}>Confirm Password</label>
				<div className={`${INPUT_CLASS} flex justify-between gap-2`} >
					<input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" placeholder="Confirm Password" className="outline-none flex-grow" {...register("confirmPassword", {
						required: "Please confirm your password.",
						validate: (value) => {
							const { password } = watch()
							return password === value || "Passwords do not match.";
						}
					})} />
					<button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
						{showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
					</button>
				</div>
				{!errors.password && errors.confirmPassword && errors.confirmPassword.message &&
					<p className="text-primary-red text-xs">{errors.confirmPassword.message}</p>}
			</div>
			<button
				disabled={!isValid} type="submit"
				className="bg-primary-green hover:bg-secondary-green transition-all duration-300 text-white w-full rounded py-3 text-lg font-bold disabled:cursor-not-allowed disabled:bg-primary-green/50">Sign Up</button>
		</form>
	)
}

