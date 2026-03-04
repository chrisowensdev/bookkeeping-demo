import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

export default function FinalCTA() {
	return (
		<section
			className="relative overflow-hidden bg-[#254256] py-16"
			id="contact"
		>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/5 to-transparent"
			/>

			<Container>
				<div className="mx-auto max-w-5xl">
					<div className="grid gap-10 md:grid-cols-12 md:items-start">
						{/* Left */}
						<div className="md:col-span-7">
							<Pill className="border border-amber-300/25 bg-amber-200/10">
								<p className="p-1 text-xs font-semibold tracking-wide text-amber-100/90">
									Stone &amp; Ledger Bookkeeping
								</p>
							</Pill>

							<h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
								Ready for clean, current books?
							</h2>

							<p className="mt-3 max-w-xl text-base text-white/70">
								Start with a short consult. We’ll review where
								things stand, answer questions, and recommend
								the simplest next step.
							</p>

							<div className="mt-7 flex flex-wrap items-center gap-3">
								<Button
									href="#contact-form"
									primary
									className="bg-amber-400 text-slate-900 hover:bg-amber-300"
								>
									Book a free consult
								</Button>

								<Button
									href="#capabilities"
									className="border border-amber-300/35 text-amber-100 hover:bg-amber-200/10"
								>
									View services
								</Button>
							</div>

							<p className="mt-4 text-sm text-white/60">
								No pressure. Clear scope. Consistent
								follow-through.
							</p>

							<div
								id="contact-form"
								className="sr-only"
								aria-hidden="true"
							/>
						</div>

						{/* Right */}
						<div className="md:col-span-5 md:pl-8 md:border-l md:border-white/10">
							<p className="text-sm font-semibold text-white">
								What we’ll cover
							</p>

							<ul className="mt-4 space-y-3 text-sm text-white/70">
								<li className="flex items-start gap-3">
									<span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300" />
									<span>Current state of your books</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300" />
									<span>
										Whether you need monthly support or
										catch-up
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="mt-1.5 h-2 w-2 rounded-full bg-amber-300" />
									<span>
										Expected timeline and next steps
									</span>
								</li>
							</ul>

							<p className="mt-6 text-sm text-white/60">
								This website design is customizable to reflect
								your brand and services.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
