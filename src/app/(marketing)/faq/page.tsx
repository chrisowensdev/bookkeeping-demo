import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import FAQ from "../page/_components/FAQ";
import FinalCTA from "../page/_components/FinalCTA";

export const metadata = {
	title: "FAQ | Stone & Ledger",
	description:
		"Answers to common questions about monthly bookkeeping, catch-up clean-up, reporting, and getting started.",
};

export default function FAQPage() {
	return (
		<main className="bg-white">
			{/* Page hero */}
			<section className="relative overflow-hidden bg-[#254256] py-16">
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/5 to-transparent"
				/>
				<div
					className="absolute inset-0 bg-cover bg-center opacity-20"
					style={{
						backgroundImage: "url('/images/hero-background.webp')",
					}}
				/>

				{/* dark overlay */}
				<div className="absolute inset-0 bg-[#254256]/40" />
				<Container className="relative">
					<div className="mx-auto max-w-5xl">
						<Pill className="border border-amber-300/25 bg-amber-200/10">
							<p className="p-1 text-xs font-semibold tracking-wide text-amber-100/90">
								FAQ
							</p>
						</Pill>

						<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Clear answers before we get started
						</h1>
						<p className="mt-4 max-w-2xl text-base text-white/70">
							Bookkeeping shouldn’t feel mysterious. Here are the
							most common questions about monthly support,
							catch-up work, and reporting.
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
								href="/how-it-works"
								className="border border-amber-300/35 text-amber-100 hover:bg-amber-200/10"
							>
								How it works
							</Button>
						</div>
					</div>
				</Container>
			</section>

			{/* FAQ accordion */}
			<FAQ />

			{/* Lightweight scenarios section (no cards) */}
			<section className="bg-white py-14">
				<Container>
					<div className="mx-auto max-w-4xl">
						<p className="text-sm font-semibold tracking-wide text-[#254256]">
							Common scenarios
						</p>
						<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							When people usually reach out
						</h2>
						<p className="mt-3 text-base text-body">
							If any of these sound familiar, we’ll outline the
							simplest next step during a short consult.
						</p>

						<div className="mt-8 grid gap-6 md:grid-cols-2">
							{[
								{
									title: "You’re behind and need catch-up",
									desc: "Books are a few months (or more) behind and you need a clean starting point.",
								},
								{
									title: "Reports don’t feel reliable",
									desc: "Numbers don’t match your bank accounts or categories are inconsistent.",
								},
								{
									title: "Tax time feels stressful every year",
									desc: "You want a cleaner handoff and fewer surprises when it’s time to file.",
								},
								{
									title: "You want a steady monthly rhythm",
									desc: "You’d rather have consistent support than scramble when things get messy.",
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

						<div className="mt-10 border-t border-slate-200 pt-6">
							<p className="text-sm text-slate-600">
								Prefer a quick recommendation instead of
								reading?{" "}
								<a
									href="/contact"
									className="font-semibold text-[#254256] underline underline-offset-4 hover:text-slate-900"
								>
									Send a message
								</a>{" "}
								and we'll point you in the right direction.
							</p>
						</div>
					</div>
				</Container>
			</section>

			<FinalCTA />
		</main>
	);
}
