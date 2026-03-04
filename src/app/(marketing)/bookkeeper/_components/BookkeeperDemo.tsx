// "use client";

// import { allows, type Pkg } from "@/lib/pkg";
// import { usePkg } from "@/hooks/usePkg";
// import PkgToggle from "@/components/pkg/PkgToggle";

// // import your sections
// import { Hero } from "./Hero";
// import TrustStrip from "./TrustStrip";
// import Services from "./Services";
// import HowItWorks from "./HowItWorks";
// import Pricing from "./Pricing";
// import About from "./About";
// import Testimonials from "./Testimonials";
// import LeadMagnet from "./LeadMagnet";

// type SectionDef = {
// 	id: string;
// 	minPkg: Pkg;
// 	node: React.ReactNode;
// };

// export default function BookkeeperDemo() {
// 	const { pkg, setPkg } = usePkg("standard");

// 	const sections: SectionDef[] = [
// 		{ id: "hero", minPkg: "starter", node: <Hero /> },
// 		{ id: "trust", minPkg: "starter", node: <TrustStrip /> },
// 		{ id: "services", minPkg: "starter", node: <Services /> },
// 		{ id: "how", minPkg: "starter", node: <HowItWorks /> },
// 		{ id: "pricing", minPkg: "starter", node: <Pricing pkg={pkg} /> },

// 		// These make it feel like the 5-page package (even if still one page)
// 		{ id: "about", minPkg: "standard", node: <About /> },
// 		{ id: "testimonials", minPkg: "standard", node: <Testimonials /> },

// 		// Advanced-only sections
// 		{ id: "leadmagnet", minPkg: "advanced", node: <LeadMagnet /> },
// 	];

// 	return (
// 		<>
// 			{/* Put this ONLY on your product page if you want.
//           For the demo itself, you can remove this and rely on ?pkg= links. */}
// 			<div className="sticky top-0 z-50 border-b border-white/10 bg-[#254256]/80 backdrop-blur">
// 				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
// 					<p className="text-sm font-medium text-white/80">
// 						Preview package
// 					</p>
// 					<PkgToggle value={pkg} onChange={setPkg} />
// 				</div>
// 			</div>

// 			{sections
// 				.filter((s) => allows(pkg, s.minPkg))
// 				.map((s) => (
// 					<div key={s.id}>{s.node}</div>
// 				))}
// 		</>
// 	);
// }
