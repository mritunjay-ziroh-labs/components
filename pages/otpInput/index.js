import OTPInput from "../../src/components/OTPInput";

export default function OTPInputPage() {
	return (
		<>
			OTPInput
			<div>
				-----------
				<OTPInput
					autoFocus
					length={6}
					className="otpContainer"
					inputClassName="otpInput"
					onChangeOTP={(otp) => console.log(otp)}
				/>
			</div>
		</>
	);
}
