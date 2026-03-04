import { cn } from "@/lib/utils";

export default function Section({
	id,
	className,
	children,
}: {
	id?: string;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<section
			id={id}
			className={cn("py-14 sm:py-18 md:py-20 scroll-mt-24", className)}
		>
			{children}
		</section>
	);
}
