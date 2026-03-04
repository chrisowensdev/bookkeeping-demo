"use client";

import type { Pkg } from "@/lib/pkg";

export default function PkgToggle({
	value,
	onChange,
}: {
	value: Pkg;
	onChange: (p: Pkg) => void;
}) {
	const items: { key: Pkg; label: string }[] = [
		{ key: "starter", label: "$750" },
		{ key: "standard", label: "$1250" },
		{ key: "advanced", label: "$2500" },
	];

	return (
		<div className="inline-flex rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm">
			{items.map((it) => (
				<button
					key={it.key}
					onClick={() => onChange(it.key)}
					className={[
						"rounded-full px-3 py-1.5 font-medium transition",
						value === it.key
							? "bg-slate-900 text-white"
							: "text-slate-700 hover:bg-slate-50",
					].join(" ")}
				>
					{it.label}
				</button>
			))}
		</div>
	);
}
