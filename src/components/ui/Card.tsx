import { cn } from "@/lib/utils";

export default function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={cn(
				"rounded-2xl border bg-white p-6 shadow-sm border-border",
				className,
			)}
		>
			{children}
		</div>
	);
}
