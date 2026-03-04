export default function SectionHeading({
	eyebrow,
	title,
	desc,
}: {
	eyebrow?: string;
	title: string;
	desc?: string;
}) {
	return (
		<div className="max-w-2xl">
			{eyebrow ? (
				<p className="text-sm font-medium text-accent">{eyebrow}</p>
			) : null}
			<h2 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl text-foreground">
				{title}
			</h2>
			{desc ? (
				<p className="mt-3 text-base leading-relaxed text-body">
					{desc}
				</p>
			) : null}
		</div>
	);
}
