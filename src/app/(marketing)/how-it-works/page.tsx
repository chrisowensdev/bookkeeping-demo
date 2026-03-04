import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import MonthlyRhythm from "../page/_components/MonthlyRhythm";
import FAQ from "../page/_components/FAQ";
import FinalCTA from "../page/_components/FinalCTA";

export const metadata = {
	title: "How It Works | Stone & Ledger",
	description:
		"A simple monthly bookkeeping rhythm: setup, reconciliation, reporting, and ongoing support.",
};

export default function HowItWorksPage() {
	return (
		<main className="bg-white">
			<section className="relative overflow-hidden bg-[#254256] py-16">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
				/>
				<Container>
					<div className="mx-auto max-w-5xl">
						<Pill className="border border-amber-300/25 bg-amber-200/10">
							<p className="p-1 text-xs font-semibold tracking-wide text-amber-100/90">
								How it works
							</p>
						</Pill>

						<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Clear steps. Predictable cadence.
						</h1>
						<p className="mt-4 max-w-2xl text-base text-white/70">
							Bookkeeping shouldn’t feel chaotic. This is a steady
							monthly process designed to keep your books current
							and your reports clear.
						</p>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<Button
								href="/contact"
								primary
								className="bg-amber-400 text-slate-900 hover:bg-amber-300"
							>
								Book a free consult
							</Button>
							<Button
								href="/capabilities"
								className="border border-amber-300/35 text-amber-100 hover:bg-amber-200/10"
							>
								View capabilities
							</Button>
						</div>
					</div>
				</Container>
			</section>

			<MonthlyRhythm />

			{/* Simple expectations section */}
			<section className="bg-[#F8FAFC] py-14">
				<Container>
					<div className="mx-auto max-w-5xl">
						<p className="text-sm font-semibold tracking-wide text-[#254256]">
							Expectations
						</p>
						<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							What we need from you
						</h2>
						<p className="mt-3 max-w-2xl text-base text-body">
							A smooth monthly rhythm depends on a few simple
							inputs.
						</p>

						<div className="mt-8 grid gap-6 md:grid-cols-3">
							{[
								{
									title: "Timely access",
									desc: "Secure access to your bookkeeping platform and bank/credit card statements.",
								},
								{
									title: "Consistency",
									desc: "A basic workflow for expenses, invoices, and documentation that we can rely on.",
								},
								{
									title: "Quick clarifications",
									desc: "Fast answers for unusual transactions so reports stay accurate.",
								},
							].map((x) => (
								<div
									key={x.title}
									className="border-t border-slate-200 pt-5"
								>
									<p className="text-sm font-semibold text-slate-900">
										{x.title}
									</p>
									<p className="mt-2 text-sm leading-relaxed text-slate-600">
										{x.desc}
									</p>
								</div>
							))}
						</div>
					</div>
				</Container>
			</section>

			<FAQ />
			<FinalCTA />
		</main>
	);
}
