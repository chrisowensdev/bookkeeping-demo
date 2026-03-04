// components/HeroVariants.tsx
// 5 distinct hero sections you can swap in/out (Next.js + Tailwind + lucide-react)
// Usage:
//   import { HERO_VARIANTS } from "@/components/HeroVariants";
//   const Hero = HERO_VARIANTS.heroSplitPhoto; // pick one
//   <Hero />

import Link from "next/link";
import {
	ArrowRight,
	BadgeCheck,
	BarChart3,
	Calendar,
	CheckCircle2,
	ClipboardList,
	Handshake,
	MapPin,
	ShieldCheck,
	Sparkles,
	Target,
} from "lucide-react";

const BRAND = {
	teal: "#2DB0BD",
	amber: "#F7AC34",
	tealDark: "#1E7F88",
	heading: "#0B1220",
	body: "#2B3445",
	bg: "#F7FAFC",
	border: "#E4E8EF",
};

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(" ");
}

function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
			{children}
		</div>
	);
}

function Pill({ children }: { children: React.ReactNode }) {
	return (
		<span
			className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-medium"
			style={{ borderColor: BRAND.border, color: BRAND.body }}
		>
			{children}
		</span>
	);
}

function PrimaryButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
			style={{
				backgroundColor: BRAND.tealDark,
				// @ts-ignore
				"--tw-ring-color": BRAND.teal,
			}}
		>
			{children}
			<ArrowRight className="h-4 w-4" aria-hidden="true" />
		</Link>
	);
}

function SecondaryButton({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-3 text-sm font-medium transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2"
			style={{
				borderColor: BRAND.teal,
				color: BRAND.tealDark,
				// @ts-ignore
				"--tw-ring-color": BRAND.teal,
			}}
		>
			{children}
		</Link>
	);
}

function TextLink({
	href,
	children,
}: {
	href: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			href={href}
			className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2"
			style={{
				color: BRAND.tealDark,
				// @ts-ignore
				"--tw-ring-color": BRAND.teal,
			}}
		>
			{children}
			<ArrowRight className="h-4 w-4" aria-hidden="true" />
		</Link>
	);
}

function Stat({ label, value }: { label: string; value: string }) {
	return (
		<div
			className="rounded-2xl border bg-white p-4 shadow-sm"
			style={{ borderColor: BRAND.border }}
		>
			<p
				className="text-xs font-medium"
				style={{ color: BRAND.tealDark }}
			>
				{label}
			</p>
			<p
				className="mt-1 text-sm font-medium"
				style={{ color: BRAND.heading }}
			>
				{value}
			</p>
		</div>
	);
}

/**
 * HERO 1 — "Centered Authority" (centered, editorial, no image)
 * Variation comes from a centered layout + proof row + single CTA style.
 */
export function HeroCenteredAuthority() {
	return (
		<section className="relative overflow-hidden pt-14 sm:pt-18">
			<Container>
				<div className="mx-auto max-w-3xl text-center">
					<p
						className="text-sm font-medium"
						style={{ color: BRAND.tealDark }}
					>
						Project management services in Canada
					</p>

					<h1
						className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
						style={{ color: BRAND.heading }}
					>
						Calm, credible delivery support for teams that need
						momentum.
					</h1>

					<p
						className="mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg"
						style={{ color: BRAND.body }}
					>
						Kona Inc provides hands-on project delivery support and
						fractional project management—focused on clarity,
						cadence, and professional communication.
					</p>

					<div className="mt-7 flex flex-wrap items-center justify-center gap-3">
						<PrimaryButton href="#contact">
							Request availability
						</PrimaryButton>
						<TextLink href="#highlights">
							View selected highlights
						</TextLink>
					</div>

					<div className="mt-8 flex flex-wrap items-center justify-center gap-2">
						<Pill>Fractional PM</Pill>
						<Pill>Delivery support</Pill>
						<Pill>Stakeholder alignment</Pill>
					</div>

					<div className="mt-10 grid gap-3 sm:grid-cols-3">
						<Stat
							label="Approach"
							value="Lightweight, disciplined cadence"
						/>
						<Stat
							label="Focus"
							value="Clarity, ownership, delivery"
						/>
						<Stat
							label="Location"
							value="Canada-based, remote-friendly"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
}

/**
 * HERO 2 — "Full-Bleed Banner" (visual-first, big background + overlay)
 * Very different feel: full-bleed, prominent background, content anchored left.
 */
export function HeroFullBleedBanner() {
	return (
		<section className="relative overflow-hidden">
			{/* Background (swap to Image later if desired) */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(135deg, rgba(45,176,189,0.22), rgba(247,172,52,0.16))",
				}}
				aria-hidden="true"
			/>
			{/* Soft vignette */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(700px 350px at 20% 30%, rgba(255,255,255,0.85), rgba(255,255,255,0.55), rgba(255,255,255,0.15))",
				}}
				aria-hidden="true"
			/>

			<Container className="relative py-16 sm:py-20 md:py-24">
				<div className="max-w-2xl">
					<div
						className="inline-flex items-center gap-2 rounded-full border bg-white/85 px-3 py-1 text-xs font-medium backdrop-blur"
						style={{ borderColor: BRAND.border, color: BRAND.body }}
					>
						<MapPin
							className="h-3.5 w-3.5"
							style={{ color: BRAND.tealDark }}
							aria-hidden="true"
						/>
						Canada-based project delivery support
					</div>

					<h1
						className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
						style={{ color: BRAND.heading }}
					>
						Keep complex projects moving—without adding noise.
					</h1>

					<p
						className="mt-5 text-base leading-relaxed sm:text-lg"
						style={{ color: BRAND.body }}
					>
						Kona Inc helps teams plan, coordinate, and deliver.
						Clear ownership, steady cadence, and practical
						reporting.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-3">
						<PrimaryButton href="#contact">
							Get in touch
						</PrimaryButton>
						<SecondaryButton href="#capabilities">
							Explore capabilities
						</SecondaryButton>
					</div>

					<div className="mt-10 grid gap-3 sm:grid-cols-3">
						<Stat
							label="Support types"
							value="Fractional or project-based"
						/>
						<Stat
							label="Reporting"
							value="Weekly updates + decision log"
						/>
						<Stat label="Risk" value="Light RAID tracking" />
					</div>
				</div>
			</Container>
		</section>
	);
}

/**
 * HERO 3 — "Problem → Approach" (left copy + right "3 cards" grid)
 * Different structure: explicit story pattern and a right-side proof grid.
 */
export function HeroProblemApproachGrid() {
	return (
		<section className="relative overflow-hidden pt-14 sm:pt-18">
			<Container>
				<div className="grid gap-10 md:grid-cols-12 md:items-start">
					<div className="md:col-span-6">
						<p
							className="text-sm font-medium"
							style={{ color: BRAND.tealDark }}
						>
							Project delivery support • Canada
						</p>

						<h1
							className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
							style={{ color: BRAND.heading }}
						>
							When projects drift, teams lose time—and trust.
						</h1>

						<p
							className="mt-5 text-base leading-relaxed sm:text-lg"
							style={{ color: BRAND.body }}
						>
							Kona Inc brings structure without heaviness: clear
							plans, simple cadence, and professional
							communication that keeps stakeholders aligned.
						</p>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<PrimaryButton href="#highlights">
								View highlights
							</PrimaryButton>
							<SecondaryButton href="#contact">
								Request availability
							</SecondaryButton>
						</div>

						<div className="mt-8 flex flex-wrap gap-2">
							<Pill>Planning</Pill>
							<Pill>Coordination</Pill>
							<Pill>Reporting</Pill>
							<Pill>Change control</Pill>
						</div>
					</div>

					<div className="md:col-span-6">
						<div className="grid gap-4 sm:grid-cols-2">
							<div
								className="rounded-2xl border bg-white p-6 shadow-sm"
								style={{ borderColor: BRAND.border }}
							>
								<ClipboardList
									className="h-5 w-5"
									style={{ color: BRAND.tealDark }}
									aria-hidden="true"
								/>
								<p
									className="mt-3 text-sm font-medium"
									style={{ color: BRAND.heading }}
								>
									Clear plan
								</p>
								<p
									className="mt-2 text-sm leading-relaxed"
									style={{ color: BRAND.body }}
								>
									Milestones, owners, dependencies, and
									risks—kept practical.
								</p>
							</div>
							<div
								className="rounded-2xl border bg-white p-6 shadow-sm"
								style={{ borderColor: BRAND.border }}
							>
								<Calendar
									className="h-5 w-5"
									style={{ color: BRAND.tealDark }}
									aria-hidden="true"
								/>
								<p
									className="mt-3 text-sm font-medium"
									style={{ color: BRAND.heading }}
								>
									Steady cadence
								</p>
								<p
									className="mt-2 text-sm leading-relaxed"
									style={{ color: BRAND.body }}
								>
									Weekly updates, decision tracking, and
									blocker clearing.
								</p>
							</div>
							<div
								className="rounded-2xl border bg-white p-6 shadow-sm sm:col-span-2"
								style={{ borderColor: BRAND.border }}
							>
								<ShieldCheck
									className="h-5 w-5"
									style={{ color: BRAND.tealDark }}
									aria-hidden="true"
								/>
								<p
									className="mt-3 text-sm font-medium"
									style={{ color: BRAND.heading }}
								>
									Risk visibility
								</p>
								<p
									className="mt-2 text-sm leading-relaxed"
									style={{ color: BRAND.body }}
								>
									Lightweight RAID tracking to reduce
									surprises and align stakeholders early.
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									<Pill>RAID log</Pill>
									<Pill>Decision log</Pill>
									<Pill>Status snapshot</Pill>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

/**
 * HERO 4 — "Case Study Preview Rail" (copy + horizontal case cards)
 * Different behavior: a scrollable preview rail that feels proof-forward.
 */
export function HeroCaseRail() {
	const casePreviews = [
		{
			title: "Delivery stabilization",
			role: "Fractional PM",
			result: "Reset cadence, clarify ownership, restore momentum.",
		},
		{
			title: "Implementation support",
			role: "Delivery support",
			result: "Coordinated vendors + dependencies during peak workload.",
		},
		{
			title: "Planning for a new initiative",
			role: "PM consultant",
			result: "Defined scope, mapped risks, built a practical plan.",
		},
	];

	return (
		<section className="relative overflow-hidden pt-14 sm:pt-18">
			<Container>
				<div className="grid gap-8 md:grid-cols-12 md:items-end">
					<div className="md:col-span-6">
						<p
							className="text-sm font-medium"
							style={{ color: BRAND.tealDark }}
						>
							Proof-first project management support
						</p>

						<h1
							className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
							style={{ color: BRAND.heading }}
						>
							Real delivery experience—presented clearly.
						</h1>

						<p
							className="mt-5 text-base leading-relaxed sm:text-lg"
							style={{ color: BRAND.body }}
						>
							Kona Inc provides project management services in
							Canada. Explore selected highlights first, then
							confirm capabilities and fit.
						</p>

						<div className="mt-7 flex flex-wrap items-center gap-3">
							<PrimaryButton href="#highlights">
								View highlights
							</PrimaryButton>
							<SecondaryButton href="#contact">
								Request availability
							</SecondaryButton>
						</div>
					</div>

					<div className="md:col-span-6">
						<div className="flex items-center justify-between">
							<p
								className="text-sm font-medium"
								style={{ color: BRAND.heading }}
							>
								Selected highlights (preview)
							</p>
							<TextLink href="#highlights">See all</TextLink>
						</div>

						<div
							className="mt-4 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
							aria-label="Selected highlight previews"
						>
							{casePreviews.map((c) => (
								<div
									key={c.title}
									className="min-w-65 rounded-2xl border bg-white p-5 shadow-sm"
									style={{ borderColor: BRAND.border }}
								>
									<p
										className="text-xs font-medium"
										style={{ color: BRAND.tealDark }}
									>
										{c.role}
									</p>
									<p
										className="mt-2 text-sm font-medium"
										style={{ color: BRAND.heading }}
									>
										{c.title}
									</p>
									<p
										className="mt-2 text-sm leading-relaxed"
										style={{ color: BRAND.body }}
									>
										{c.result}
									</p>
									<div className="mt-4">
										<span
											className="inline-block h-1 w-10 rounded-full"
											style={{
												backgroundColor: BRAND.amber,
											}}
											aria-hidden="true"
										/>
									</div>
								</div>
							))}
						</div>

						<p
							className="mt-2 text-xs"
							style={{ color: BRAND.body }}
						>
							Tip: replace with real mini-cases or anonymized
							project types.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}

/**
 * HERO 5 — "Split Panel" (left "letterhead" + right contrasting panel CTA)
 * Different vibe: looks like a brochure cover with a “sidebar” for credibility + CTA.
 */
export function HeroSplitPanel() {
	return (
		<section className="relative overflow-hidden pt-14 sm:pt-18">
			<Container>
				<div className="grid gap-6 md:grid-cols-12">
					{/* Left: editorial copy */}
					<div className="md:col-span-7">
						<div
							className="rounded-2xl border bg-white p-8 shadow-sm"
							style={{ borderColor: BRAND.border }}
						>
							<p
								className="text-sm font-medium"
								style={{ color: BRAND.tealDark }}
							>
								Kona Inc • Project delivery support (Canada)
							</p>

							<h1
								className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl"
								style={{ color: BRAND.heading }}
							>
								Project delivery support that respects your
								team’s time.
							</h1>

							<p
								className="mt-5 text-base leading-relaxed sm:text-lg"
								style={{ color: BRAND.body }}
							>
								Clear plans, steady coordination, and
								lightweight reporting—so stakeholders stay
								aligned and execution stays on track.
							</p>

							<div className="mt-7 flex flex-wrap items-center gap-3">
								<PrimaryButton href="#contact">
									Get in touch
								</PrimaryButton>
								<TextLink href="#capabilities">
									Explore capabilities
								</TextLink>
							</div>

							<div className="mt-8 flex flex-wrap gap-2">
								<Pill>Fractional PM</Pill>
								<Pill>Delivery leadership</Pill>
								<Pill>Execution support</Pill>
							</div>
						</div>
					</div>

					{/* Right: contrast panel */}
					<div className="md:col-span-5">
						<div
							className="h-full rounded-2xl border p-6 shadow-sm"
							style={{
								borderColor: BRAND.border,
								background:
									"linear-gradient(180deg, rgba(45,176,189,0.10), rgba(247,172,52,0.06))",
							}}
						>
							<p
								className="text-sm font-medium"
								style={{ color: BRAND.heading }}
							>
								Quick credibility
							</p>

							<div className="mt-4 space-y-3">
								{[
									{
										icon: (
											<BadgeCheck
												className="h-4 w-4"
												style={{
													color: BRAND.tealDark,
												}}
												aria-hidden="true"
											/>
										),
										title: "Professional delivery cadence",
										text: "Weekly updates, decision tracking, and risk visibility.",
									},
									{
										icon: (
											<Handshake
												className="h-4 w-4"
												style={{
													color: BRAND.tealDark,
												}}
												aria-hidden="true"
											/>
										),
										title: "Integrates with your tools",
										text: "Works within your existing workflows and platforms.",
									},
									{
										icon: (
											<BarChart3
												className="h-4 w-4"
												style={{
													color: BRAND.tealDark,
												}}
												aria-hidden="true"
											/>
										),
										title: "Clarity-first reporting",
										text: "Simple snapshots stakeholders can scan quickly.",
									},
								].map((item) => (
									<div
										key={item.title}
										className="rounded-2xl border bg-white p-4"
										style={{ borderColor: BRAND.border }}
									>
										<div className="flex items-start gap-3">
											<span className="mt-0.5">
												{item.icon}
											</span>
											<div>
												<p
													className="text-sm font-medium"
													style={{
														color: BRAND.heading,
													}}
												>
													{item.title}
												</p>
												<p
													className="mt-1 text-sm leading-relaxed"
													style={{
														color: BRAND.body,
													}}
												>
													{item.text}
												</p>
											</div>
										</div>
									</div>
								))}
							</div>

							<div
								className="mt-6 rounded-2xl border bg-white p-5"
								style={{ borderColor: BRAND.border }}
							>
								<p
									className="text-xs font-medium"
									style={{ color: BRAND.tealDark }}
								>
									Calm CTA
								</p>
								<p
									className="mt-2 text-sm leading-relaxed"
									style={{ color: BRAND.body }}
								>
									Share your project stage and timeline—Kona
									will reply with next steps and availability.
								</p>
								<div className="mt-4 flex flex-wrap gap-3">
									<PrimaryButton href="#contact">
										Request availability
									</PrimaryButton>
								</div>
								<div
									className="mt-4 flex items-center gap-2 text-xs"
									style={{ color: BRAND.body }}
								>
									<Sparkles
										className="h-3.5 w-3.5"
										style={{ color: BRAND.amber }}
										aria-hidden="true"
									/>
									No pressure. Professional reply.
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

/**
 * Export a registry so you can swap quickly.
 */
export const HERO_VARIANTS = {
	heroCenteredAuthority: HeroCenteredAuthority,
	heroFullBleedBanner: HeroFullBleedBanner,
	heroProblemApproachGrid: HeroProblemApproachGrid,
	heroCaseRail: HeroCaseRail,
	heroSplitPanel: HeroSplitPanel,
};

// Optional helper for dynamic selection:
// export function HeroRenderer({ variant }: { variant: keyof typeof HERO_VARIANTS }) {
//   const Hero = HERO_VARIANTS[variant];
//   return <Hero />;
// }
