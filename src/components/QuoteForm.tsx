import { siteConfig } from "@/content/siteConfig";

// components/QuoteForm.tsx
type Props = {
	/** Optional heading shown above the form (useful on /contact) */
	heading?: string;
	/** Optional helper text shown above the form */
	subheading?: string;

	/** Where the form submits (if you later wire it up) */
	action?: string;
	method?: "post" | "get";

	/** Secondary CTA (phone) */
	phoneLabel?: string;
	phoneHref?: string;

	/** Small note under the textarea */
	photosNote?: string;
};

export default function QuoteForm({
	heading,
	subheading,
	action,
	method = "post",
	phoneLabel = `Call ${siteConfig.phone}`,
	phoneHref = `tel:+${siteConfig.phone}`,
	photosNote = "Have photos? After you submit, we’ll email a confirmation—just reply with 2–6 photos (wide + close-up).",
}: Props) {
	return (
		<div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200/60 shadow-[0_18px_60px_rgba(5,48,91,0.14)] sm:p-10">
			{(heading || subheading) && (
				<div className="max-w-3xl">
					{heading && (
						<h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
							{heading}
						</h2>
					)}
					{subheading && (
						<p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
							{subheading}
						</p>
					)}
				</div>
			)}

			<form
				action={action}
				method={method}
				className="mt-8 grid gap-4 md:grid-cols-2"
				aria-label="Request a quote form"
			>
				<label className="grid gap-2">
					<span className="text-sm font-semibold text-slate-900">
						Name
					</span>
					<input
						name="name"
						className="h-11 rounded-xl bg-white px-3 text-sm ring-1 ring-slate-300/80 focus:outline-none focus:ring-2 focus:ring-brand/25"
						placeholder="Your name"
						autoComplete="name"
						required
					/>
				</label>

				<label className="grid gap-2">
					<span className="text-sm font-semibold text-slate-900">
						Email
					</span>
					<input
						name="email"
						type="email"
						className="h-11 rounded-xl bg-white px-3 text-sm ring-1 ring-slate-300/80 focus:outline-none focus:ring-2 focus:ring-brand/25"
						placeholder="you@email.com"
						autoComplete="email"
						required
					/>
				</label>

				<label className="grid gap-2 md:col-span-2">
					<span className="text-sm font-semibold text-slate-900">
						Project details
					</span>
					<textarea
						name="details"
						className="min-h-30 rounded-xl bg-white px-3 py-3 text-sm ring-1 ring-slate-300/80 focus:outline-none focus:ring-2 focus:ring-brand/25"
						placeholder="What needs repair? Include location, ideal timing, and any finish-matching concerns."
						required
					/>
					<p className="text-xs text-slate-600">{photosNote}</p>
				</label>

				<div className="md:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
					<button
						type="submit"
						className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand/30"
					>
						Request Quote
					</button>

					<a
						href={phoneHref}
						className="inline-flex items-center justify-center rounded-xl border border-brand bg-white px-6 py-3 text-sm font-semibold text-brand hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-brand/20"
					>
						{phoneLabel}
					</a>
				</div>

				<p className="md:col-span-2 text-xs text-slate-600">
					Licensed & insured • Clear scope • Quality checkpoints •
					Clean jobsite habits
				</p>
			</form>
		</div>
	);
}
