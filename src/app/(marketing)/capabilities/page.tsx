import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import WhatYouGet from "../page/_components/WhatYouGet";
import Services from "../page/_components/Services";
import FinalCTA from "../page/_components/FinalCTA";

export const metadata = {
	title: "Capabilities | Stone & Ledger",
	description:
		"Monthly bookkeeping, catch-up support, and reporting for small businesses.",
};

export default function CapabilitiesPage() {
	return (
		<main className="bg-white">
			{/* Simple page hero */}
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
								Capabilities
							</p>
						</Pill>

						<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Bookkeeping support built around your books
						</h1>
						<p className="mt-4 max-w-2xl text-base text-white/70">
							Monthly bookkeeping, catch-up projects, and
							reporting that stays consistent—so you can operate
							with clarity and confidence.
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
								href="#included"
								className="border border-amber-300/35 text-amber-100 hover:bg-amber-200/10"
							>
								What&apos;s included
							</Button>
						</div>
					</div>
				</Container>
			</section>

			{/* Core sections */}
			<div id="included">
				<WhatYouGet />
			</div>

			<Services />

			{/* Light add-ons section (minimal, not card-heavy) */}
			<section className="bg-white py-14">
				<Container>
					<div className="mx-auto max-w-5xl">
						<p className="text-sm font-semibold tracking-wide text-[#254256]">
							Add-ons
						</p>
						<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
							Optional support as you grow
						</h2>
						<p className="mt-3 max-w-2xl text-base text-body">
							Not every business needs the same level of support.
							These add-ons can be included when they make sense
							for your workflow.
						</p>

						<div className="mt-8 grid gap-6 md:grid-cols-3">
							{[
								{
									title: "Receipt + document organization",
									desc: "Simple structure for keeping records tidy and easy to find.",
								},
								{
									title: "Quarterly check-in",
									desc: "A short review to align on trends, questions, and next steps.",
								},
								{
									title: "CPA handoff support",
									desc: "Organized reports and clarity for efficient tax-time collaboration.",
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

			<FinalCTA />
		</main>
	);
}
