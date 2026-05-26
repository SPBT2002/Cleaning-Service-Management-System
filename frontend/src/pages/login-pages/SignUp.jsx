import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-[#0d1a2e] py-12">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,_#173046_0,_transparent_20%),radial-gradient(circle_at_80%_20%,_rgba(58,167,255,0.08)_0,_transparent_12%)]" />

			<div className="relative w-[520px] max-w-[96vw] rounded-[30px] border border-white/10 bg-[#1f2b3f] px-10 py-12 shadow-[0_40px_90px_rgba(5,10,24,0.75)]">
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
					<h2 className="text-2xl font-semibold text-white">Create your account</h2>
					<p className="mt-2 text-sm text-[#9fb0c9]">Join CleanMaster to start booking services</p>
				</div>

				<form className="space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<input
							type="text"
							placeholder="First name"
							className="rounded-2xl border border-white/10 bg-[#2f3a4f] px-5 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
						/>
						<input
							type="text"
							placeholder="Last name"
							className="rounded-2xl border border-white/10 bg-[#2f3a4f] px-5 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
						/>
					</div>

					<input
						type="email"
						placeholder="user@email.com"
						className="w-full rounded-2xl border border-white/10 bg-[#2f3a4f] px-6 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
					/>

					<div className="flex items-center gap-4">
						<input
							type="password"
							placeholder="Password"
							className="flex-1 rounded-2xl border border-white/10 bg-[#2f3a4f] px-6 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
						/>
					</div>

                    <div className="flex items-center gap-4">
						<input
							type="password"
							placeholder="Confirm password"
							className="flex-1 rounded-2xl border border-white/10 bg-[#2f3a4f] px-6 py-4 text-[15px] text-white placeholder:text-[#8b97a8] outline-none"
						/>
					</div>

					<button
						type="button"
						className="w-full rounded-2xl bg-gradient-to-r from-[#11c1a8] to-[#3aa7ff] px-6 py-4 text-[16px] font-semibold text-white shadow-[0_18px_40px_rgba(17,193,168,0.22)]"
					>
						Create account
					</button>

					<p className="mt-3 text-center text-[13px] text-[#9fb0c9]">
						Already have an account? <Link to="/signin" className="text-[#22d2c8]">Sign in</Link>
					</p>
				</form>
			</div>
		</div>
	);
}

