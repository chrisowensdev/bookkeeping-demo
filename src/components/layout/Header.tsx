"use client";
import { siteConfig } from "@/content/siteConfig";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [mobileMounted, setMobileMounted] = useState(false);
	const [menuShown, setMenuShown] = useState(false);

	useEffect(() => {
		let t: ReturnType<typeof setTimeout> | undefined;
		let raf1: number | undefined;
		let raf2: number | undefined;

		if (mobileOpen) {
			setMobileMounted(true);
			raf1 = window.requestAnimationFrame(() => {
				raf2 = window.requestAnimationFrame(() => setMenuShown(true));
			});
			// Prevent body scroll while menu is open
			document.body.style.overflow = "hidden";
		} else {
			setMenuShown(false);
			t = setTimeout(() => setMobileMounted(false), 260);
			document.body.style.overflow = "";
		}

		return () => {
			if (t) clearTimeout(t);
			if (raf1) cancelAnimationFrame(raf1);
			if (raf2) cancelAnimationFrame(raf2);
			document.body.style.overflow = "";
		};
	}, [mobileOpen]);

	// Optional: close on ESC
	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") setMobileOpen(false);
		}
		if (mobileOpen) window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [mobileOpen]);

	return (
		<>
			<header className="sticky top-0 z-50 backdrop-blur bg-[#254256]/95 border-b border-white/10">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
					<Link
						href="/"
						className="flex items-center"
						onClick={() => setMobileOpen(false)}
					>
						<p className="text-xl font-semibold text-white leading-tight">
							Stone <span className="text-amber-400">&amp;</span>{" "}
							Ledger
						</p>
					</Link>

					<nav className="hidden items-center gap-6 text-sm md:flex text-white/90">
						<a
							href="/capabilities/"
							className="hover:text-amber-300"
						>
							Capabilities
						</a>
						<a
							href="/how-it-works/"
							className="hover:text-amber-300"
						>
							How it works
						</a>
						<a href="/about/" className="hover:text-amber-300">
							About
						</a>
						<a href="/faq/" className="hover:text-amber-300">
							FAQ
						</a>
					</nav>

					<div className="flex items-center gap-3">
						<a
							href={`tel:+1${siteConfig.phone}`}
							className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
						>
							<PhoneIcon
								className="h-4 w-4 text-amber-300"
								aria-hidden="true"
							/>
							<span className="hidden lg:block">
								{siteConfig.phone}
							</span>
						</a>

						<a
							href="/contact"
							className="hidden sm:inline-flex items-center justify-center rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/60"
						>
							Request Quote
						</a>

						<Link
							href={`tel:+1${siteConfig.phone}`}
							className="sm:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-amber-300 hover:bg-white/10"
							aria-label="Call"
						>
							<PhoneIcon className="h-5 w-5" />
						</Link>

						<button
							type="button"
							className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-amber-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
							aria-expanded={mobileOpen}
							aria-controls="mobile-menu"
							aria-label="Toggle menu"
							onClick={() => setMobileOpen((v) => !v)}
						>
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

			{/* {mobileMounted && ( */}
			<div
				className={`md:hidden fixed inset-0 z-60 ${mobileOpen ? "" : "pointer-events-none"}`}
			>
				{/* Backdrop */}
				<div
					className={`absolute inset-0 transition-opacity duration-200 ${
						mobileOpen ? "opacity-100" : "opacity-0"
					}`}
					style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
					onClick={() => setMobileOpen(false)}
				/>
				<div
					className={`absolute inset-0 transition-opacity duration-200 ${
						mobileOpen ? "opacity-100" : "opacity-0"
					}`}
					aria-hidden="true"
					style={{ backdropFilter: "blur(6px)" }}
				/>

				{/* Sheet */}
				<nav
					id="mobile-menu"
					className={`absolute right-3 top-3 bottom-3 w-[min(92vw,380px)] rounded-2xl border border-white/10 bg-[#254256]/95 shadow-2xl overflow-hidden transform transition-transform duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
						mobileOpen ? "translate-x-0" : "translate-x-[110%]"
					}`}
					style={{ willChange: "transform" }}
					role="dialog"
					aria-modal="true"
				>
					{/* Panel header */}
					<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
						<Link
							href="/"
							onClick={() => setMobileOpen(false)}
							className="text-base font-semibold text-white"
						>
							Stone <span className="text-amber-300">&amp;</span>{" "}
							Ledger
						</Link>

						<button
							type="button"
							onClick={() => setMobileOpen(false)}
							className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-amber-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-300/50"
							aria-label="Close menu"
						>
							<span className="text-lg leading-none">×</span>
						</button>
					</div>

					{/* Links */}
					<div className="px-3 py-3">
						{[
							{
								href: "/capabilities/",
								label: "Capabilities",
							},
							{
								href: "/how-it-works/",
								label: "How it works",
							},
							{ href: "/about/", label: "About" },
							{ href: "/faq/", label: "FAQ" },
						].map((item) => (
							<a
								key={item.href}
								href={item.href}
								onClick={() => setMobileOpen(false)}
								className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 hover:bg-white/5"
							>
								{item.label}
							</a>
						))}
					</div>

					{/* CTA + contact */}
					<div className="px-5 pb-5 pt-2 border-t border-white/10">
						<a
							href="/contact"
							onClick={() => setMobileOpen(false)}
							className="block w-full rounded-xl bg-amber-400 px-4 py-4 text-center text-sm font-semibold text-slate-900 hover:bg-amber-300"
						>
							Request Quote
						</a>

						<a
							href={`tel:+1${siteConfig.phone}`}
							onClick={() => setMobileOpen(false)}
							className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85 hover:bg-white/10"
						>
							<PhoneIcon
								className="h-4 w-4 text-amber-300"
								aria-hidden="true"
							/>
							Call {siteConfig.phone}
						</a>

						<p className="mt-4 text-center text-xs text-white/55">
							Structured books. Clear decisions.
						</p>
					</div>
				</nav>
			</div>
			{/* )} */}
		</>
	);
}
