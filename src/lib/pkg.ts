export type Pkg = "starter" | "standard" | "advanced";

export const PKG_RANK: Record<Pkg, number> = {
	starter: 1,
	standard: 2,
	advanced: 3,
};

export function normalizePkg(v: string | null | undefined): Pkg {
	if (v === "starter" || v === "standard" || v === "advanced") return v;
	return "standard";
}

export function allows(current: Pkg, min: Pkg) {
	return PKG_RANK[current] >= PKG_RANK[min];
}
