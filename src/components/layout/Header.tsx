"use client";
import { siteConfig } from "@/content/siteConfig";
import { PhoneIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	// Keep menu mounted long enough to animate out
	const [mobileMounted, setMobileMounted] = useState(false);
	// Drive enter/exit animation separately from open state
	const [menuShown, setMenuShown] = useState(false);

	useEffect(() => {
		let t: ReturnType<typeof setTimeout> | undefined;
		let raf1: number | undefined;
		let raf2: number | undefined;
		if (mobileOpen) {
			setMobileMounted(true);
			// Ensure initial hidden state paints before showing (prevents snap)
			raf1 = window.requestAnimationFrame(() => {
				raf2 = window.requestAnimationFrame(() => setMenuShown(true));
			});
		} else {
			setMenuShown(false);
			t = setTimeout(() => setMobileMounted(false), 300);
		}
		return () => {
			if (t) clearTimeout(t);
			if (raf1) cancelAnimationFrame(raf1);
			if (raf2) cancelAnimationFrame(raf2);
		};
	}, [mobileOpen]);

	return (
		<>
			<header className="sticky top-0 z-50 backdrop-blur bg-[#254256]">
				{/* Top offer line */}
				{/* <div className="hidden text-center md:block border-b border-slate-200/60 bg-brand">
					<div className="mx-auto max-w-6xl px-4 py-2 text-xs text-white/80 sm:px-6">
						<span className="font-semibold">
							Kitchens • Baths • Additions • Exterior
						</span>
						<span className="mx-2 ">|</span>
						<span>Licensed & insured • Richmond-area</span>
					</div>
				</div> */}

				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
					<Link href="/" className="flex items-center">
						{/* <Image
							src="/images/logo.png"
							width={50}
							height={30}
							alt="Elevate DevWorks"
							priority
						/> */}

						<div className="leading-tight">
							<p className="text-xl font-medium text-body">
								{/* Kona <span className="font-light">Inc</span> */}
								<span className="text-[#F8FAFC] font-semibold">
									Stone
								</span>{" "}
								<span className="text-amber-400 font-semibold">
									&amp;
								</span>{" "}
								<span className="text-[#F8FAFC] font-semibold">
									Ledger
								</span>
							</p>
						</div>
					</Link>

					<nav className="hidden items-center gap-6 text-sm text-brand md:flex text-[#F8FAFC] font-base ">
						<a
							href="/capabilities/"
							className="hover:text-amber-400"
						>
							Capabilities
						</a>
						<a
							href="/how-it-works/"
							className="hover:text-amber-400"
						>
							How it works
						</a>
						<a href="/about/" className="hover:text-amber-400">
							About
						</a>
						<a href="/faq/" className="hover:text-amber-400">
							FAQ
						</a>
					</nav>

					<div className="flex items-center gap-3">
						<a
							href={`tel:+1${siteConfig.phone}`}
							className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:inline"
						>
							<span className="flex">
								<PhoneIcon className="text-slate-700 mr-2 pb-1" />{" "}
								<span className="hidden lg:block">
									{siteConfig.phone}
								</span>
							</span>
						</a>

						<a
							href="/contact"
							className="hidden sm:inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
						>
							Request Quote
						</a>
						<Link
							href="tel:18045551234"
							className=" sm:hidden text-accent"
						>
							<PhoneIcon />
						</Link>

						<button
							type="button"
							className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm text-accent"
							aria-expanded={mobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
							onClick={() => setMobileOpen((v) => !v)}
						>
							<span className="sr-only">Menu</span>
							{/* Hamburger icon that transitions to an X */}
							<div className="h-5 w-6 flex flex-col items-center justify-center gap-1">
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "translate-y-1.5 rotate-45"
											: ""
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
										mobileOpen ? "opacity-0" : "opacity-100"
									}`}
								/>
								<span
									className={`block h-0.5 w-6 bg-current transition-transform duration-300 ease-in-out ${
										mobileOpen
											? "-translate-y-1.5 -rotate-45"
											: ""
									}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</header>
			{mobileMounted && (
				<div className="md:hidden fixed inset-0 z-49">
					<div
						className={`absolute top-14 inset-0 transition-opacity duration-300 ${
							menuShown ? "opacity-100" : "opacity-0"
						}`}
						style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
						onClick={() => setMobileOpen(false)}
					/>
					<nav
						id="mobile-menu"
						className={`absolute top-14  text-center left-0 right-0 border bg-white p-4 shadow-lg origin-top item-center transform transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
							menuShown
								? "translate-x-0 opacity-100"
								: "-translate-x-100 opacity-0"
						}`}
						style={{ willChange: "transform, opacity" }}
					>
						<a
							href="/capabilities/"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							Capabilities
						</a>
						<a
							href="/how-it-works/"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							How it works
						</a>
						<a
							href="/about/"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							About
						</a>
						<a
							href="/faq/"
							onClick={() => setMobileOpen(false)}
							className="block rounded-lg px-3 py-3 text-base hover:bg-neutral-50"
						>
							FAQ
						</a>

						<a
							href="/contact"
							className="mt-30 block text-center rounded-xl bg-amber-400 p-4 text-sm font-semibold hover:bg-[#0B2E23] focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
						>
							Request Quote
						</a>
					</nav>
				</div>
			)}
		</>
	);
}
