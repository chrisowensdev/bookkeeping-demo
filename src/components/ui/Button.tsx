import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
	href: string;
	children: React.ReactNode;
	primary?: boolean;
	className?: string;
};

export function Button({
	href,
	children,
	primary = false,
	className,
}: ButtonProps) {
	const base =
		"inline-flex items-center justify-center gap-2 rounded-3xl px-5 py-3 text-sm font-medium " +
		"transition-colors focus:outline-none focus:ring-2 focus:ring-ring/60 focus:ring-offset-2";

	const primaryClasses =
		"bg-primary text-accent-foreground hover:opacity-95 font-bold";

	const secondaryClasses = "border border-primary text-accent hover:bg-white";

	return (
		<Link
			href={href}
			className={cn(
				base,
				primary ? primaryClasses : secondaryClasses,
				className,
			)}
		>
			{children}
			{primary ? (
				<ArrowRight className="h-4 w-4" aria-hidden="true" />
			) : null}
		</Link>
	);
}
