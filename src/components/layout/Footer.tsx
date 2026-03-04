import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/siteConfig";
import DemoTag from "./DemoTag";

export default function Footer() {
	return (
		<>
			<p className="rounded-md bg-yellow-50 p-3 text-sm text-yellow-900 text-center">
				This is a demonstration website and does not represent a real
				business.
			</p>
			<footer className="bg-[#1F3A4D] border-t border-white/10 py-12">
				<div className="mx-auto max-w-6xl px-4 lg:px-6">
					<div className="grid gap-10 md:grid-cols-4">
						{/* Column 1: Brand */}
						<div>
							{/* <h3 className="text-lg font-semibold text-slate-900">
								{advisorSiteConfig.brandName}
							</h3> */}
							<Link href="/" className="flex items-center gap-3">
								{/* <Image
									src="/clearpath-logo.png"
									width={140}
									height={40}
									alt="profile Image"
								/> */}
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
								{/* <div className="flex items-center gap-2">
							<div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white font-semibold">
								CP
							</div>
							<div className="flex flex-col">
								<span className="text-sm font-semibold tracking-tight text-slate-900">
									ClearPath Health Advisors
								</span>
								<span className="text-xs text-slate-500">
									Licensed Health & Medicare Guidance
								</span>
							</div>
						</div> */}
							</Link>
							<p className="mt-2 text-sm text-white/60">
								Structured books. Clear decisions.
							</p>

							{/* <p className="mt-4 text-xs text-white/60">
								Serving clients in:{" "}
								{siteConfig.serviceAreas.join(", ")}
							</p> */}
						</div>

						{/* Column 2: Navigation */}
						<div>
							<h4 className="text-sm font-semibold text-white/80">
								Navigation
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-white/60 ">
								<li>
									<a
										href="/"
										className="hover:text-amber-300"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="/capabilities/"
										className="hover:text-amber-300"
									>
										Capabilities
									</a>
								</li>
								<li>
									<a
										href="/how-it-works/"
										className="hover:text-amber-300"
									>
										How it works
									</a>
								</li>
								<li>
									<a
										href="/about/"
										className="hover:text-amber-300"
									>
										About
									</a>
								</li>
								<li>
									<a
										href="/faq/"
										className="hover:text-amber-300"
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href="/contact/"
										className="hover:text-amber-300"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>

						{/* Column 3: Contact */}
						<div>
							<h4 className="text-sm font-semibold text-white/80">
								Contact
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-white/40">
								<li>
									Phone:{" "}
									<a
										href={`tel:${siteConfig.phone.replaceAll(
											"-",
											"",
										)}`}
										className="text-white/60 hover:text-amber-300"
									>
										{siteConfig.phone}
									</a>
								</li>
								<li>
									Email:{" "}
									<a
										href={`mailto:${siteConfig.email}`}
										className="text-white/60 hover:text-amber-300"
									>
										{siteConfig.email}
									</a>
								</li>
								<li className="pt-2 text-xs text-white/40">
									Hours: {siteConfig.officeHours}
								</li>
							</ul>
						</div>

						{/* Column 4: Legal */}
						<div>
							<h4 className="text-sm font-semibold text-white/80">
								Legal
							</h4>
							<ul className="mt-3 space-y-2 text-sm text-white/60">
								{/* <li>
									<a
										href={siteConfig.legal.disclaimerUrl}
										className="hover:text-amber-300"
									>
										Disclaimer
									</a>
								</li> */}
								<li>
									<a
										href={siteConfig.legal.privacyUrl}
										className="hover:text-amber-300"
									>
										Privacy Policy
									</a>
								</li>
							</ul>

							{/* Required Medicare disclaimer */}
							{/* <p className="mt-4 text-xs text-white/40 leading-relaxed">
								{siteConfig.legal.notGovernmentAffiliationText}
							</p> */}
						</div>
					</div>

					{/* Bottom row */}
					<div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
						© {new Date().getFullYear()} {siteConfig.brandName}. All
						rights reserved.
					</div>
					<DemoTag />
				</div>
			</footer>
		</>
	);
}
