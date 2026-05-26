import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
	const [showPassword, setShowPassword] = useState(false);

	const toggleShow = () => setShowPassword((s) => !s);

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#0d1a2e] py-12">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#173046_0,_transparent_20%),radial-gradient(circle_at_80%_20%,_rgba(58,167,255,0.12)_0,_transparent_12%)]" />

			<div className="relative w-[420px] max-w-[92vw] rounded-[30px] border border-white/10 bg-[#1f2b3f] px-8 py-12 shadow-[0_40px_80px_rgba(5,10,24,0.7)]">
				<Link to="/" aria-label="Close" className="absolute top-6 right-6">
					<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#11c1a8] to-[#3aa7ff] p-[2px]">
						<span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#0f2a42]">
							<svg className="h-5 w-5 text-[#7ef0df]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</span>
					</span>
				</Link>
				
                
				<div className="mb-6 text-center">
					<div className="flex items-center justify-center gap-3 mb-4">
						<span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1ed0c8] to-[#33bdf6] text-[16px] text-[#0b1020]">CM</span>
						<span className="text-xl font-semibold text-white">Clean<span className="text-[#22d2c8]">Master</span></span>
					</div>
					<h2 className="text-2xl font-semibold text-white">Welcome back</h2>
					<p className="mt-2 text-sm text-[#9fb0c9]">Sign in to continue to CleanMaster</p>
				</div>

				<form className="space-y-4">
					<label className="block text-[13px] font-medium text-[#9fb0c9]">
						Email Address
						<input
							type="email"
							placeholder="user@email.com"
							className="mt-3 w-full rounded-2xl border border-white/10 bg-[#2f3a4f] px-6 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none transition focus:border-[#22d2c8]"
						/>
					</label>

					<label className="block text-[13px] font-medium text-[#9fb0c9]">
						Password
						<div className="mt-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-[#2f3a4f] px-6 py-4">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="********"
								className="w-full bg-transparent text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
							/>
							<button
								type="button"
								onClick={toggleShow}
								className="grid h-9 w-9 place-items-center rounded-full bg-white/5 text-[#9fb0c9]"
								aria-label={showPassword ? "Hide password" : "Show password"}
							>
								{showPassword ? '👁️' : '👁️‍🗨️'}
							</button>
						</div>
					</label>

					<button
						type="button"
						className="w-full rounded-2xl bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] px-6 py-4 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(17,193,168,0.22)]"
					>
						Sign In
					</button>

					<p className="mt-4 text-center text-[13px] text-[#9fb0c9]">
						Don't have an account? <Link to="/signup" className="text-[#22d2c8]">Sign up</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

