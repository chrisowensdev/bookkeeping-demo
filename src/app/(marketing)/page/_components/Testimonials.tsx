import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { Quote, Star } from "lucide-react";

type Testimonial = {
	quote: string;
	name: string;
	title: string;
	context?: string;
};

const TESTIMONIALS: Testimonial[] = [
	{
		quote: "We went from “not sure where anything was” to clean books and consistent monthly reports. The process is steady and communication is clear.",
		name: "Jordan M.",
		title: "Owner, service business",
		context: "Monthly bookkeeping + reporting",
	},
	{
		quote: "Catch-up was handled faster than I expected. Everything was organized and I finally feel ready for tax time without the usual stress.",
		name: "Taylor R.",
		title: "Owner, contractor business",
		context: "Catch-up clean-up project",
	},
	{
		quote: "The reports are simple and actually usable. It’s low-pressure support that keeps everything current without constant back-and-forth.",
		name: "Casey L.",
		title: "Founder, small agency",
		context: "Ongoing support + monthly close",
	},
];

function Stars() {
	return (
		<div
			className="flex items-center gap-0.5"
			aria-label="5 out of 5 stars"
		>
			{Array.from({ length: 5 }).map((_, i) => (
				<Star
					key={i}
					className="h-4 w-4"
					style={{ color: "rgba(212,167,44,0.95)" }}
					fill="currentColor"
					aria-hidden="true"
				/>
			))}
		</div>
	);
}

export default function Testimonials() {
	return (
		<section
			className="relative overflow-hidden bg-white py-14"
			id="testimonials"
		>
			<Container>
				<div className="mx-auto max-w-5xl">
					<p className="text-sm font-semibold tracking-wide text-[#254256]">
						Proof
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Trusted, low-drama bookkeeping support
					</h2>
					<p className="mt-3 max-w-2xl text-base text-body">
						A steady process, clean records, and clear
						communication—so you can stop worrying about the numbers
						and focus on running the business.
					</p>

					<div className="mt-10 grid gap-4 md:grid-cols-3">
						{TESTIMONIALS.map((t) => (
							<Card
								key={t.name}
								className="rounded-2xl border border-slate-200 bg-white shadow-sm"
							>
								<div className="flex h-full flex-col p-6">
									<div className="flex items-start justify-between gap-4">
										<Stars />
										<Quote
											className="h-5 w-5 text-[#254256]/40"
											aria-hidden="true"
										/>
									</div>

									<p className="mt-4 text-sm leading-relaxed text-slate-700">
										“{t.quote}”
									</p>

									<div className="mt-5 pt-5 border-t border-slate-100">
										<p className="text-sm font-semibold text-slate-900">
											{t.name}
										</p>
										<p className="mt-0.5 text-sm text-slate-600">
											{t.title}
										</p>

										{t.context ? (
											<p className="mt-2 inline-flex w-fit rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600">
												{t.context}
											</p>
										) : null}
									</div>
								</div>
							</Card>
						))}
					</div>

					{/* Optional mini trust line */}
					<div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
						<p className="text-sm font-semibold text-amber-900">
							Demo note
						</p>
						<p className="mt-1 text-sm text-amber-900/90">
							Testimonials shown here are sample copy for the
							demo. Your website will be customized with your
							brand and real reviews.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
