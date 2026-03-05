import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
	BriefcaseBusiness,
	BarChart3,
	MessagesSquare,
	Sparkles,
	BadgeDollarSign,
	Receipt,
} from "lucide-react";

type Service = {
	title: string;
	description: string;
	icon: React.ElementType;
};

const CORE_MONTHLY: Service[] = [
	{
		title: "Monthly bookkeeping",
		description:
			"Categorization and reconciliations with a clean monthly close you can rely on.",
		icon: BriefcaseBusiness,
	},
	{
		title: "Monthly reporting",
		description:
			"Simple P&L and Balance Sheet delivery with clear notes and highlights.",
		icon: BarChart3,
	},
	{
		title: "Ongoing support",
		description:
			"Consistent communication for questions, exceptions, and adjustments as you grow.",
		icon: MessagesSquare,
	},
];

const PROJECT_SUPPORT: Service[] = [
	{
		title: "Catch-up / clean-up",
		description:
			"Get current fast if you’re behind—organized records and a clear path forward.",
		icon: Sparkles,
	},
	{
		title: "Payroll support",
		description:
			"Coordination with your payroll provider and bookkeeping alignment month to month.",
		icon: BadgeDollarSign,
	},
	{
		title: "A/R + A/P coordination",
		description:
			"Help organizing invoicing and bills so your records stay clean and consistent.",
		icon: Receipt,
	},
];

function ServiceCard({ title, description, icon: Icon }: Service) {
	return (
		<Card className="rounded-2xl border border-slate-200 bg-white shadow-sm">
			<div className="p-5">
				<div className="flex items-start gap-3">
					<div className="relative mt-0.5 inline-flex h-10 w-10 items-center justify-center ">
						<div className="absolute mt-0.5 h-10 w-10 rounded-full bg-[#254256]/10" />

						<Icon
							className="h-5 w-5 text-[#254256]"
							aria-hidden="true"
						/>
					</div>
					<div>
						<p className="text-sm font-semibold text-foreground">
							{title}
						</p>
						<p className="mt-1 text-sm leading-relaxed text-body">
							{description}
						</p>
					</div>
				</div>
			</div>
		</Card>
	);
}

export default function Services() {
	return (
		<section
			className="relative overflow-hidden bg-[#F8FAFC] py-14"
			id="capabilities"
		>
			<Container>
				<div className="mx-auto max-w-5xl">
					<p className="text-sm font-semibold tracking-wide text-[#254256]">
						Services
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Support built around your books
					</h2>
					<p className="mt-3 max-w-2xl text-base text-body">
						Monthly bookkeeping, catch-up projects, and reporting
						that stays consistent—so you can operate with clarity.
					</p>

					<div className="mt-10 grid gap-10 md:grid-cols-12 md:items-start">
						{/* Core monthly */}
						<div className="md:col-span-6">
							<div className="flex items-center justify-between">
								<p className="text-sm font-semibold text-slate-900">
									Core monthly support
								</p>
								<span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600">
									Most common
								</span>
							</div>

							<div className="mt-4 grid gap-4">
								{CORE_MONTHLY.map((s) => (
									<ServiceCard key={s.title} {...s} />
								))}
							</div>
						</div>

						{/* Project / add-ons */}
						<div className="md:col-span-6">
							<div className="flex items-center justify-between">
								<p className="text-sm font-semibold text-slate-900">
									Project &amp; add-on support
								</p>
								<span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-900">
									As needed
								</span>
							</div>

							<div className="mt-4 grid gap-4">
								{PROJECT_SUPPORT.map((s) => (
									<ServiceCard key={s.title} {...s} />
								))}
							</div>
						</div>
					</div>

					<div className="mt-4 p-5">
						<p className="text-sm font-semibold text-slate-900">
							Not sure what you need?
						</p>
						<p className="mt-1 text-sm text-slate-600">
							Start with a short consult. We’ll clarify the
							current state of your books and recommend the
							simplest path forward.
						</p>
					</div>

					{/* Optional: small note for scope clarity */}
					<p className="mt-8 text-sm text-slate-500">
						Note: This demo reflects typical bookkeeping workflows.
						Exact scope and tools vary by business and package.
					</p>
				</div>
			</Container>
		</section>
	);
}
