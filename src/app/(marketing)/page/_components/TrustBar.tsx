import Container from "@/components/layout/Container";
import { ClipboardList, Compass, ShieldCheck } from "lucide-react";

export function TrustBar() {
	return (
		<section className="relative overflow-hidden bg-[#F8FAFC] py-4">
			<Container>
				<div className="my-5 grid gap-4 sm:grid-cols-3">
					<div className="flex items-start gap-3">
						<Compass
							className="mt-0.5 h-5 w-5 text-[#254256]"
							aria-hidden="true"
						/>
						<div>
							<p className="text-sm font-medium text-foreground">
								Monthly close rhythm
							</p>
							<p className="mt-1 text-sm text-body">
								A consistent monthly process that keeps your
								books current.
							</p>
						</div>
					</div>

					<div className="flex items-start gap-3">
						<ClipboardList
							className="mt-0.5 h-5 w-5 text-[#254256]"
							aria-hidden="true"
						/>
						<div>
							<p className="text-sm font-medium text-foreground">
								Clean, reconciled books
							</p>
							<p className="mt-1 text-sm text-body">
								Accurate categories and reconciliations so
								nothing slips through.
							</p>
						</div>
					</div>

					<div className="flex items-start gap-3">
						<ShieldCheck
							className="mt-0.5 h-5 w-5 text-[#254256]"
							aria-hidden="true"
						/>
						<div>
							<p className="text-sm font-medium text-foreground">
								Clear reports, on time
							</p>
							<p className="mt-1 text-sm text-body">
								Simple monthly reports delivered on
								schedule—easy to understand and use.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
