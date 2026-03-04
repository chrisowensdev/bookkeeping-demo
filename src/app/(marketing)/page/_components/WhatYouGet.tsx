import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
	CheckCircle2,
	FileText,
	BarChart3,
	BadgeCheck,
	Shield,
	CalendarClock,
} from "lucide-react";

type Deliverable = {
	title: string;
	description: string;
	icon?: React.ElementType;
};

const DEFAULT_DELIVERABLES: Deliverable[] = [
	{
		title: "Account reconciliations",
		description:
			"Bank and credit card accounts reconciled so your numbers match reality.",
		icon: BadgeCheck,
	},
	{
		title: "Clean, consistent categories",
		description:
			"Transactions organized with clear categories to keep reporting accurate.",
		icon: CheckCircle2,
	},
	{
		title: "Monthly Profit & Loss",
		description:
			"A simple P&L you can use to understand performance and trends.",
		icon: BarChart3,
	},
	{
		title: "Balance Sheet overview",
		description:
			"Key balances summarized so you know what you own and what you owe.",
		icon: FileText,
	},
	{
		title: "Notes & monthly summary",
		description:
			"Highlights, exceptions, and questions captured so nothing gets missed.",
		icon: FileText,
	},
	{
		title: "Delivered on a consistent schedule",
		description:
			"A predictable monthly rhythm with clear expectations and follow-through.",
		icon: CalendarClock,
	},
];

export default function WhatYouGet({
	title = "What you receive each month",
	subtitle = "Clear, organized financials—delivered consistently.",
	deliverables = DEFAULT_DELIVERABLES,
}: {
	title?: string;
	subtitle?: string;
	deliverables?: Deliverable[];
}) {
	return (
		<section
			className="relative overflow-hidden bg-[#F8FAFC] py-18"
			id="what-you-get"
		>
			<Container>
				<div className="grid gap-10 md:grid-cols-12 md:items-start">
					{/* Left: copy + deliverables */}
					<div className="md:col-span-7">
						<p className="text-sm font-semibold tracking-wide text-[#254256]">
							Deliverables
						</p>
						<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							{title}
						</h2>
						<p className="mt-3 max-w-xl text-base text-body">
							{subtitle}
						</p>

						<div className="mt-7 grid gap-4 sm:grid-cols-2">
							{deliverables.map((d) => {
								const Icon = d.icon ?? CheckCircle2;
								return (
									<div
										key={d.title}
										className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
									>
										<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#254256]/10">
											<Icon
												className="h-5 w-5 text-[#254256]"
												aria-hidden="true"
											/>
										</div>
										<div>
											<p className="text-sm font-semibold text-foreground">
												{d.title}
											</p>
											<p className="mt-1 text-sm leading-relaxed text-body">
												{d.description}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					{/* Right: report preview card stack */}
					<div className="md:col-span-5">
						<div className="relative">
							{/* subtle depth behind cards (NOT a glow — just a soft tint) */}
							<div
								aria-hidden="true"
								className="pointer-events-none absolute -inset-4 rounded-[2rem]"
								// style={{
								// 	background:
								// 		"radial-gradient(60% 60% at 35% 25%, rgba(37,66,86,0.10), transparent 65%)",
								// }}
							/>

							<Card className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
								<div className="p-5">
									<div className="flex items-start justify-between gap-4">
										<div>
											<p className="text-sm font-semibold text-slate-900">
												Monthly Report Packet
											</p>
											<p className="mt-0.5 text-xs text-slate-500">
												Simple, readable, and consistent
											</p>
										</div>

										<span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-900">
											Delivered monthly
										</span>
									</div>

									<div className="mt-5 grid grid-cols-2 gap-3">
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
											<p className="text-[11px] font-medium text-slate-500">
												Profit &amp; Loss
											</p>
											<p className="mt-1 text-base font-semibold text-slate-900">
												Snapshot
											</p>
										</div>
										<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
											<p className="text-[11px] font-medium text-slate-500">
												Balance Sheet
											</p>
											<p className="mt-1 text-base font-semibold text-slate-900">
												Overview
											</p>
										</div>
									</div>

									<div className="mt-4 space-y-3">
										<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
											<div className="flex items-center gap-3">
												<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#254256]/10">
													<CalendarClock
														className="h-5 w-5 text-[#254256]"
														aria-hidden="true"
													/>
												</div>
												<div>
													<p className="text-sm font-semibold text-slate-900">
														Consistent timing
													</p>
													<p className="mt-0.5 text-xs text-slate-500">
														Reports delivered on a
														predictable schedule
													</p>
												</div>
											</div>
											<span className="text-xs font-semibold text-slate-700">
												Monthly
											</span>
										</div>

										<div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3">
											<div className="flex items-center gap-3">
												<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#254256]/10">
													<Shield
														className="h-5 w-5 text-[#254256]"
														aria-hidden="true"
													/>
												</div>
												<div>
													<p className="text-sm font-semibold text-slate-900">
														Secure, organized
														records
													</p>
													<p className="mt-0.5 text-xs text-slate-500">
														Clean documentation and
														clear handoffs
													</p>
												</div>
											</div>
											<span className="text-xs font-semibold text-slate-700">
												Secure
											</span>
										</div>
									</div>

									<div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
										<p className="text-xs font-semibold text-slate-700">
											Included each month
										</p>
										<ul className="mt-2 space-y-2 text-sm text-slate-600">
											<li className="flex items-start gap-2">
												<CheckCircle2
													className="mt-0.5 h-4 w-4 text-emerald-700"
													aria-hidden="true"
												/>
												<span>
													Reconciliations +
													categorization
												</span>
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle2
													className="mt-0.5 h-4 w-4 text-emerald-700"
													aria-hidden="true"
												/>
												<span>
													P&amp;L + Balance Sheet
													delivery
												</span>
											</li>
											<li className="flex items-start gap-2">
												<CheckCircle2
													className="mt-0.5 h-4 w-4 text-emerald-700"
													aria-hidden="true"
												/>
												<span>
													Notes, exceptions, and next
													steps
												</span>
											</li>
										</ul>
									</div>
								</div>
							</Card>

							{/* small floating “packet” badge */}
							{/* <div className="pointer-events-none absolute -top-4 right-4 hidden sm:block">
								<div className="rounded-2xl border border-slate-200/70 bg-white/95 px-4 py-3 shadow-md backdrop-blur">
									<p className="text-[11px] font-medium text-slate-500">
										Format
									</p>
									<p className="mt-0.5 text-sm font-semibold text-slate-900">
										Clean report packet
									</p>
								</div>
							</div> */}

							{/* optional secondary card (subtle) */}
							{/* <div className="mt-4 grid gap-4 sm:grid-cols-2">
								<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
									<p className="text-xs font-semibold text-slate-700">
										Response expectations
									</p>
									<p className="mt-1 text-sm text-slate-600">
										Consistent communication with clear next
										steps.
									</p>
								</div>
								<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
									<p className="text-xs font-semibold text-slate-700">
										Easy handoff
									</p>
									<p className="mt-1 text-sm text-slate-600">
										Organized records to support tax-time
										collaboration.
									</p>
								</div>
							</div> */}

							{/* (If you want less height, delete the two mini cards above) */}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
