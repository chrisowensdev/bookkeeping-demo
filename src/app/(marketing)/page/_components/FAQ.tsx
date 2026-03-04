"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import { ChevronDown } from "lucide-react";

type FAQItem = {
	question: string;
	answer: string;
};

const FAQS: FAQItem[] = [
	{
		question: "What do you need from me to get started?",
		answer: "We’ll begin with a short call and secure access to your bookkeeping platform and bank accounts. If you have prior records, we’ll review those as part of setup.",
	},
	{
		question: "Do you work with QuickBooks or Xero?",
		answer: "Yes. Most clients use QuickBooks or Xero. If you’re not currently using a platform, we can recommend a simple setup based on your business needs.",
	},
	{
		question: "How long does catch-up or clean-up take?",
		answer: "Timing depends on how far behind the books are and how organized the records are. After a brief review, you’ll receive a clear timeline and scope.",
	},
	{
		question: "When will I receive my monthly reports?",
		answer: "Reports are delivered on a consistent monthly schedule following the close. You’ll know exactly when to expect them.",
	},
	{
		question: "Can you coordinate with my CPA or tax preparer?",
		answer: "Yes. Clean records and organized reporting make tax-time collaboration straightforward and efficient.",
	},
	{
		question: "Is payroll included?",
		answer: "Payroll support can be included depending on your provider and package. We’ll clarify scope during your initial consult.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	function toggle(index: number) {
		setOpenIndex(openIndex === index ? null : index);
	}

	return (
		<section
			className="relative overflow-hidden bg-[#F8FAFC] py-14"
			id="faq"
		>
			<Container>
				<div className="mx-auto max-w-4xl">
					<p className="text-sm font-semibold tracking-wide text-[#254256]">
						FAQ
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
						Frequently asked questions
					</h2>
					<p className="mt-3 text-base text-body">
						Clear answers before we get started.
					</p>

					<div className="mt-8 space-y-4">
						{FAQS.map((item, index) => {
							const isOpen = openIndex === index;

							return (
								<div
									key={item.question}
									className="rounded-2xl border border-slate-200 bg-white shadow-sm"
								>
									<button
										onClick={() => toggle(index)}
										className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
									>
										<p className="text-sm font-semibold text-slate-900">
											{item.question}
										</p>
										<ChevronDown
											className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
												isOpen ? "rotate-180" : ""
											}`}
											aria-hidden="true"
										/>
									</button>

									{isOpen && (
										<div className="px-6 pb-6">
											<p className="text-sm leading-relaxed text-slate-600">
												{item.answer}
											</p>
										</div>
									)}
								</div>
							);
						})}
					</div>

					{/* Optional reassurance block */}
					<div className="mt-10  p-6">
						<p className="text-sm font-semibold text-[#254256]">
							Still have questions?
						</p>
						<p className="mt-2 text-sm text-[#254256]">
							Start with a short consult. We’ll clarify the
							current state of your books and outline the simplest
							next step.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
}
