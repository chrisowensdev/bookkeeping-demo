import type { Metadata } from "next";
import {
	ArrowRight,
	CheckCircle2,
	ClipboardList,
	Compass,
	Mail,
	MapPin,
	Phone,
	ShieldCheck,
} from "lucide-react";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Pill from "@/components/ui/Pill";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Field, SelectField, TextAreaField } from "@/components/ui/FormField";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "./page/_components/Hero";
import { TrustBar } from "./page/_components/TrustBar";
import WhatYouGet from "./page/_components/WhatYouGet";
import MonthlyRhythm from "./page/_components/MonthlyRhythm";
import Services from "./page/_components/Services";
import Testimonials from "./page/_components/Testimonials";
import FAQ from "./page/_components/FAQ";
import FinalCTA from "./page/_components/FinalCTA";

export const metadata: Metadata = {
	title: "Project Management Consultant | Kona Inc",
	description:
		"Kona Inc is a project management consultant offering fractional PM support and project delivery help. Explore capabilities, experience, and selected highlights, then get in touch.",
	alternates: { canonical: "/" },
	openGraph: {
		title: "Kona Inc | Project Management Consultant",
		description:
			"Fractional PM support and project delivery help for teams. Clear direction, steady coordination, calm follow-through.",
		type: "website",
	},
};

type Highlight = {
	title: string;
	role: string;
	what: string[];
	outcome: string;
};

const highlights: Highlight[] = [
	{
		title: "Delivery support for a cross-functional implementation",
		role: "Fractional Project Manager",
		what: [
			"Established milestones, owners, and cadence",
			"Aligned stakeholders and cleared blockers",
			"Introduced lightweight reporting and RAID tracking",
		],
		outcome: "Improved clarity and reduced delivery drift across teams.",
	},
	{
		title: "Project planning & execution support during peak workload",
		role: "Project Delivery Support",
		what: [
			"Built a realistic plan and sequencing",
			"Coordinated vendors and internal owners",
			"Protected scope and managed change requests",
		],
		outcome: "Kept work moving with fewer surprises and better handoffs.",
	},
	{
		title: "Stabilization of an in-flight initiative",
		role: "Delivery Lead",
		what: [
			"Assessed status and risks within first week",
			"Reset timeline and communication channels",
			"Created weekly updates and decision logs",
		],
		outcome: "Restored confidence and improved decision speed.",
	},
];

const faqs = [
	{
		q: "What types of clients do you support?",
		a: "Kona Inc supports teams that need project leadership or delivery support—often when internal bandwidth is limited or outcomes need stronger coordination.",
	},
	{
		q: "Do you offer fractional project management?",
		a: "Yes. Fractional support can range from a few hours per week to a steady weekly cadence, depending on your project stage and needs.",
	},
	{
		q: "What tools can you work with?",
		a: "Common options include Jira, Asana, Trello, Notion, Monday.com, Microsoft Project, and Google Workspace/Microsoft 365. We’ll adapt to your environment.",
	},
	{
		q: "How quickly can you start?",
		a: "Availability varies. Share your timeline and goals and we’ll confirm the earliest practical start and a light onboarding plan.",
	},
];

function JsonLd() {
	// Keep this minimal and accurate; update fields once client assets are known.
	const data = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Kona Inc",
		url: "https://konainc.ca",
		description:
			"Kona Inc provides project management services, including fractional PM support and project delivery support.",
		areaServed: "CA",
		sameAs: [],
	};
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}

export default function HomePage() {
	return (
		<div className="bg-background">
			<JsonLd />

			{/* Skip link */}
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow text-foreground"
			>
				Skip to content
			</a>

			<main id="main">
				{/* Hero */}
				<Hero />
				<TrustBar />
				<WhatYouGet />
				<MonthlyRhythm />
				<Services />
				<Testimonials />
				<FAQ />
				<FinalCTA />
			</main>
		</div>
	);
}
