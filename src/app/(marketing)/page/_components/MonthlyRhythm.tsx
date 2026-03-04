import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { CheckCircle2, Lock, FileBarChart2, Repeat } from "lucide-react";

type Step = {
	kicker: string;
	title: string;
	description: string;
	icon: React.ElementType;
};

const STEPS: Step[] = [
	{
		kicker: "01",
		title: "Intro & setup",
		description:
			"A quick call to understand your business, confirm scope, and securely connect accounts.",
		icon: Lock,
	},
	{
		kicker: "02",
		title: "Reconcile & organize",
		description:
			"Transactions are categorized consistently and accounts are reconciled so the numbers match reality.",
		icon: CheckCircle2,
	},
	{
		kicker: "03",
		title: "Review & deliver",
		description:
			"Monthly reports are prepared and delivered with notes, exceptions, and clear next steps.",
		icon: FileBarChart2,
	},
	{
		kicker: "04",
		title: "Ongoing support",
		description:
			"Questions are handled as they come up, and the monthly rhythm stays consistent over time.",
		icon: Repeat,
	},
];

export default function MonthlyRhythm() {
	return (
		<section className="relative overflow-hidden bg-white py-14">
			<Container>
				<div className="mx-auto max-w-5xl">
					<p className="text-sm font-semibold tracking-wide text-[#254256]">
						Process
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						A simple monthly rhythm
					</h2>
					<p className="mt-3 max-w-2xl text-base text-body">
						Clear steps, predictable cadence, and consistent
						follow-through—so you always know what&apos;s happening
						and what to expect next.
					</p>

					<div className="mt-10 grid gap-8 md:grid-cols-12 md:items-start">
						{/* Left: timeline */}
						<div className="md:col-span-7">
							<ol className="relative pl-8">
								{/* vertical line */}
								<div
									aria-hidden="true"
									className="absolute left-3 top-1 bottom-1 w-px bg-slate-200"
								/>

								{STEPS.map((step) => {
									const Icon = step.icon;
									return (
										<li
											key={step.kicker}
											className="relative pb-6 last:pb-0"
										>
											{/* marker */}
											<div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white">
												<div className="h-2 w-2 rounded-full bg-[#254256]" />
											</div>

											<div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5">
												<div className="flex items-start justify-between gap-4">
													<div className="flex items-start gap-3">
														<div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#254256]/10">
															<Icon
																className="h-5 w-5 text-[#254256]"
																aria-hidden="true"
															/>
														</div>
														<div>
															<p className="text-xs font-semibold tracking-wide text-slate-500">
																{step.kicker}
															</p>
															<p className="mt-1 text-sm font-semibold text-foreground">
																{step.title}
															</p>
														</div>
													</div>
												</div>

												<p className="mt-3 text-sm leading-relaxed text-body">
													{step.description}
												</p>
											</div>
										</li>
									);
								})}
							</ol>
						</div>

						{/* Right: summary card (premium, calm) */}
						<div className="md:col-span-5">
							<Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
								<div className="p-6">
									<p className="text-sm font-semibold text-slate-900">
										What this creates
									</p>
									<p className="mt-2 text-sm leading-relaxed text-slate-600">
										A consistent monthly process that keeps
										your books current, reduces surprises,
										and delivers reports you can rely on.
									</p>

									<div className="mt-5 space-y-3">
										<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-600" />
											<div>
												<p className="text-sm font-semibold text-slate-900">
													Predictable cadence
												</p>
												<p className="mt-1 text-sm text-slate-600">
													Clear expectations for
													timing and deliverables.
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-600" />
											<div>
												<p className="text-sm font-semibold text-slate-900">
													Cleaner financials
												</p>
												<p className="mt-1 text-sm text-slate-600">
													Reconciliations and
													categories that hold up over
													time.
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
											<div className="mt-0.5 h-2 w-2 rounded-full bg-emerald-600" />
											<div>
												<p className="text-sm font-semibold text-slate-900">
													Better decisions
												</p>
												<p className="mt-1 text-sm text-slate-600">
													Reports that are easy to
													understand and actually
													usable.
												</p>
											</div>
										</div>
									</div>

									<div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
										<p className="text-xs font-semibold text-amber-900">
											Note
										</p>
										<p className="mt-1 text-sm text-amber-900/90">
											Timing and deliverables adjust
											slightly based on the package you
											choose and the state of your books.
										</p>
									</div>
								</div>
							</Card>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
