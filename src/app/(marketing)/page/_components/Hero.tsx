import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

export function Hero() {
	return (
		<section className="relative overflow-hidden pt-10 pb-14 bg-[#254256] bg-linear-to-b from-white/5 to-transparent">
			<div
				className="absolute inset-0 bg-cover bg-center opacity-20"
				style={{
					backgroundImage: "url('/images/hero-background.webp')",
				}}
			/>

			{/* dark overlay */}
			<div className="absolute inset-0 bg-[#254256]/40" />
			<Container className="relative">
				<div className="grid items-center gap-10 md:grid-cols-12">
					<div className="md:col-span-7">
						<div className="mb-5 flex flex-wrap gap-2">
							<Pill className="border border-amber-300/30 bg-amber-200/10">
								<p className="text-amber-100/90 p-1 font-semibold text-xs tracking-wide">
									Bookkeeping for small businesses in
									Richmond, VA
								</p>
							</Pill>
						</div>

						<h1 className="text-3xl font-bold tracking-normal sm:text-4xl md:text-5xl text-white">
							Monthly{" "}
							<span className="relative inline-block">
								{/* softer, premium emphasis */}
								<span className="relative z-10 text-amber-200">
									bookkeeping
								</span>
								<span
									aria-hidden="true"
									className="absolute inset-x-0 -bottom-1 z-0 h-3 rounded-md"
									// style={{
									// 	background: "rgba(212,167,44,0.18)",
									// }}
								/>
							</span>{" "}
							that keeps you confident and compliant.
						</h1>

						<p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg text-white/70">
							Monthly bookkeeping + clean-up support for service
							businesses. Simple onboarding, consistent
							communication, and reporting you can actually use.
						</p>

						<div className="mt-8 flex flex-wrap items-center gap-3">
							<Button
								href="#contact"
								primary
								className="bg-amber-400 text-slate-900 hover:bg-amber-300"
							>
								Get in Touch
							</Button>

							{/* premium secondary: amber outline on dark */}
							<Button
								href="#capabilities"
								className="border border-amber-300/40 text-amber-100 hover:bg-amber-200/10"
							>
								Explore capabilities
							</Button>
						</div>

						{/* optional supporting line; keep it consistent on dark */}
						{/* <p className="mt-4 text-sm text-white/60">
							Available for fractional or project-based support
						</p> */}
					</div>

					<div className="md:col-span-5">
						<div className="relative">
							{/* warm premium glow */}
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -inset-6 rounded-4xl blur-2xl opacity-90"
								style={{
									background:
										"radial-gradient(60% 60% at 35% 25%, rgba(212,167,44,0.28), transparent 62%), radial-gradient(55% 55% at 70% 75%, rgba(11,31,59,0.22), transparent 60%)",
								}}
							/>

							{/* Main dashboard card */}
							<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/10">
								<div className="p-5">
									<div className="flex items-center justify-between gap-3">
										<div>
											<p className="text-sm font-semibold text-slate-900">
												Monthly Snapshot
											</p>
											<p className="mt-0.5 text-xs text-slate-500">
												Updated monthly • Secure access
											</p>
										</div>

										<span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-900">
											Last updated: Feb 2026
										</span>
									</div>

									<div className="mt-5 grid grid-cols-3 gap-3">
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
											<p className="text-[11px] font-medium text-slate-500">
												Revenue
											</p>
											<p className="mt-1 text-lg font-semibold text-slate-900">
												$18,420
											</p>
										</div>

										<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
											<p className="text-[11px] font-medium text-slate-500">
												Expenses
											</p>
											<p className="mt-1 text-lg font-semibold text-slate-900">
												$12,910
											</p>
										</div>

										<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
											<p className="text-[11px] font-medium text-slate-500">
												Net Profit
											</p>
											<p className="mt-1 text-lg font-semibold text-emerald-700">
												$5,510
											</p>
										</div>
									</div>

									<div className="mt-5 grid gap-4 sm:grid-cols-2">
										<div className="rounded-xl border border-slate-200 bg-white p-4">
											<div className="flex items-center justify-between">
												<p className="text-xs font-semibold text-slate-700">
													Last 6 months
												</p>
												<span className="text-[11px] font-medium text-slate-500">
													Profit trend
												</span>
											</div>

											<div className="mt-3 flex items-end gap-2">
												{[38, 52, 44, 60, 56, 70].map(
													(h, i) => (
														<div
															key={i}
															className="h-20 w-full rounded-md bg-slate-100"
														>
															<div
																className="w-full rounded-md"
																style={{
																	height: `${h}%`,
																	background:
																		"rgba(212,167,44,0.40)",
																}}
															/>
														</div>
													),
												)}
											</div>

											<p className="mt-3 text-[11px] text-slate-500">
												Sample visualization for clarity
											</p>
										</div>

										<div className="rounded-xl border border-slate-200 bg-white p-4">
											<p className="text-xs font-semibold text-slate-700">
												Top categories
											</p>

											<div className="mt-3 space-y-3">
												{[
													{
														label: "Payroll",
														value: "$4,920",
														pct: 78,
													},
													{
														label: "Software",
														value: "$680",
														pct: 40,
													},
													{
														label: "Materials",
														value: "$1,240",
														pct: 55,
													},
													{
														label: "Marketing",
														value: "$520",
														pct: 32,
													},
												].map((row) => (
													<div key={row.label}>
														<div className="flex items-center justify-between text-[11px]">
															<span className="font-medium text-slate-600">
																{row.label}
															</span>
															<span className="text-slate-500">
																{row.value}
															</span>
														</div>

														<div className="mt-1 h-2 w-full rounded-full bg-slate-100">
															<div
																className="h-2 rounded-full"
																style={{
																	width: `${row.pct}%`,
																	background:
																		"rgba(11,31,59,0.32)",
																}}
															/>
														</div>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>

								<div className="border-t border-slate-100 bg-slate-50 px-5 py-3">
									<p className="text-xs text-slate-500">
										Reconciliations • Monthly reports •
										Clean categories
									</p>
								</div>
							</div>

							{/* Floating stat cards */}
							<div className="pointer-events-none absolute -top-5 right-4 hidden sm:block">
								{/* make border neutral (gold is for highlights), keep green value */}
								<div className="rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 shadow-md backdrop-blur">
									<p className="text-[11px] font-medium text-slate-500">
										This month
									</p>
									<p className="mt-0.5 text-sm font-semibold text-emerald-700">
										Cash flow +$2,840
									</p>
								</div>
							</div>

							<div className="pointer-events-none absolute -bottom-4 left-4 hidden lg:block">
								{/* only show on lg so it doesn't collide on smaller widths */}
								<div className="rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 shadow-md backdrop-blur">
									<p className="text-[11px] font-medium text-slate-500">
										Status
									</p>
									<p className="mt-0.5 text-sm font-semibold text-slate-900">
										Books reconciled · 6/6
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
