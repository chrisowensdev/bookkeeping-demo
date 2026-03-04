import { cn } from "@/lib/utils";

export default function Pill({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center rounded-full border px-3 py-1 text-sm border-border text-body",
				className,
			)}
		>
			{children}
		</span>
	);
}
