import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

export const metadata = {
	title: "Contact | Stone & Ledger",
	description:
		"Book a free consult to discuss monthly bookkeeping or catch-up support.",
};

export default function ContactPage() {
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
								Contact
							</p>
						</Pill>

						<h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Book a short consult
						</h1>
						<p className="mt-4 max-w-2xl text-base text-white/70">
							We’ll review where things stand, answer questions,
							and recommend the simplest next step—monthly support
							or catch-up.
						</p>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<Button
								href="#contact-form"
								primary
								className="bg-amber-400 text-slate-900 hover:bg-amber-300"
							>
								Jump to form
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

			{/* Contact form + expectations */}
			<section className="bg-[#F8FAFC] py-14" id="contact-form">
				<Container>
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-10 md:grid-cols-12 md:items-start">
							<div className="md:col-span-7">
								<p className="text-sm font-semibold tracking-wide text-[#254256]">
									Send a message
								</p>
								<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
									Tell us what you need
								</h2>
								<p className="mt-3 max-w-xl text-base text-body">
									Share a quick overview and we’ll follow up
									with next steps.
								</p>

								{/* Simple static form (wire it to your provider later) */}
								<form className="mt-8 space-y-4">
									<div className="grid gap-4 sm:grid-cols-2">
										<div>
											<label className="text-sm font-medium text-slate-700">
												Name
											</label>
											<input
												className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
												type="text"
												placeholder="Your name"
											/>
										</div>
										<div>
											<label className="text-sm font-medium text-slate-700">
												Email
											</label>
											<input
												className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
												type="email"
												placeholder="you@company.com"
											/>
										</div>
									</div>

									<div>
										<label className="text-sm font-medium text-slate-700">
											What do you need help with?
										</label>
										<select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400">
											<option>Monthly bookkeeping</option>
											<option>Catch-up / clean-up</option>
											<option>Not sure yet</option>
										</select>
									</div>

									<div>
										<label className="text-sm font-medium text-slate-700">
											Message
										</label>
										<textarea
											className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
											rows={5}
											placeholder="A quick overview: how long you’ve been behind (if catch-up), what platform you use, and any questions."
										/>
									</div>

									<div className="flex flex-wrap items-center gap-3 pt-2">
										<button
											type="button"
											className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
										>
											Send message
										</button>
										<p className="text-sm text-slate-600">
											We typically respond within 1–2
											business days.
										</p>
									</div>
								</form>
							</div>

							<div className="md:col-span-5 md:pl-8 md:border-l md:border-slate-200">
								<p className="text-sm font-semibold tracking-wide text-[#254256]">
									What happens next
								</p>
								<h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
									A clear, low-pressure start
								</h3>
								<p className="mt-3 text-sm leading-relaxed text-slate-600">
									We’ll confirm scope, outline timing, and
									recommend the simplest path forward.
								</p>

								<div className="mt-6 space-y-4 border-t border-slate-200 pt-6">
									{[
										"Clarify current state of your books",
										"Confirm whether you need monthly support or catch-up",
										"Outline timeline and deliverables",
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
										Demo note
									</p>
									<p className="mt-2 text-sm text-slate-600">
										This is a demonstration website.
										Branding and content will be customized
										for your business.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
		</main>
	);
}
