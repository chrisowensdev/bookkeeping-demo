"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { normalizePkg, type Pkg } from "@/lib/pkg";

export function usePkg(defaultPkg: Pkg = "standard") {
	const sp = useSearchParams();
	const router = useRouter();

	const pkg = useMemo(() => {
		const v = sp.get("pkg");
		return v ? normalizePkg(v) : defaultPkg;
	}, [sp, defaultPkg]);

	function setPkg(next: Pkg) {
		const params = new URLSearchParams(sp.toString());
		params.set("pkg", next);
		router.replace(`?${params.toString()}`, { scroll: false });
	}

	return { pkg, setPkg };
}
