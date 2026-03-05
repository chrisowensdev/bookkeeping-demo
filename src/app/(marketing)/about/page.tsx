import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Testimonials from "../page/_components/Testimonials";
import FinalCTA from "../page/_components/FinalCTA";

export const metadata = {
	title: "About | Stone & Ledger",
	description:
		"A calm, structured approach to monthly bookkeeping for small businesses.",
};

export default function AboutPage() {
	return (
		<main className="bg-white">
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
								About Stone &amp; Ledger
							</p>
						</Pill>

						<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Structure first. Clarity always.
						</h1>
						<p className="mt-4 max-w-2xl text-base text-white/70">
							Stone &amp; Ledger is built around a simple belief:
							bookkeeping should feel calm, consistent, and easy
							to understand.
						</p>

						<div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:items-center">
							<Button
								href="/contact/"
								primary
								className="w-[90%] bg-amber-400 text-slate-900 hover:bg-amber-300 sm:w-auto"
							>
								Book a free consult
							</Button>
							<Button
								href="/how-it-works/"
								className="w-[90%] border border-amber-300/35 text-amber-100 hover:bg-amber-200/10 sm:w-auto"
							>
								How it works
							</Button>
						</div>
					</div>
				</Container>
			</section>

			{/* About content (minimal “card soup”) */}
			<section className="bg-white py-14">
				<Container>
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-10 md:grid-cols-12 md:items-start">
							<div className="md:col-span-7">
								<p className="text-sm font-semibold tracking-wide text-[#254256]">
									Approach
								</p>
								<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
									A predictable monthly rhythm
								</h2>
								<p className="mt-3 text-base leading-relaxed text-body">
									The goal isn’t complexity—it’s consistency.
									A structured process keeps your books
									current and your reporting reliable, without
									constant back-and-forth.
								</p>

								<div className="mt-8 space-y-6">
									{[
										{
											title: "Clarity over noise",
											desc: "Clean categories and reports that are easy to understand and use.",
										},
										{
											title: "Consistency over scramble",
											desc: "A repeatable monthly close that reduces surprises and stress.",
										},
										{
											title: "Support without pressure",
											desc: "Professional communication with realistic scope and timelines.",
										},
									].map((x) => (
										<div
											key={x.title}
											className="border-l-2 border-slate-200 pl-5"
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

							<div className="md:col-span-5">
								<p className="text-sm font-semibold tracking-wide text-[#254256]">
									Good fit
								</p>
								<h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
									Best for small teams
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-slate-600">
									Especially service businesses that want
									clean monthly books, clear reporting, and a
									calm delivery process.
								</p>

								<div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
									{[
										"Service businesses and contractors",
										"Small agencies and professional services",
										"Teams that want consistent monthly reporting",
										"Owners who want a clean handoff for tax time",
									].map((t) => (
										<p
											key={t}
											className="text-sm text-slate-700"
										>
											• {t}
										</p>
									))}
								</div>

								<div className="mt-8 border-t border-slate-200 pt-6">
									<p className="text-sm font-semibold text-slate-900">
										Tools & platforms
									</p>
									<p className="mt-2 text-sm text-slate-600">
										QuickBooks / Xero (as applicable), bank
										feeds, and a simple document workflow.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>

			<Testimonials />
			<FinalCTA />
		</main>
	);
}
