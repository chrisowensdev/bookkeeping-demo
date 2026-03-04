import React from "react";

function cx(...classes: Array<string | undefined | false>) {
	return classes.filter(Boolean).join(" ");
}

const labelCls = "text-sm font-medium text-foreground";

const fieldCls =
	"mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground " +
	"placeholder:text-muted-foreground " +
	"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 " +
	"focus-visible:ring-offset-background";

export function Field({
	id,
	label,
	className,
	...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
	return (
		<div>
			<label className={labelCls} htmlFor={id}>
				{label}
			</label>
			<input id={id} className={cx(fieldCls, className)} {...props} />
		</div>
	);
}

export function SelectField({
	id,
	label,
	className,
	children,
	...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div>
			<label className={labelCls} htmlFor={id}>
				{label}
			</label>
			<select
				id={id}
				className={cx(fieldCls, "appearance-none", className)}
				{...props}
			>
				{children}
			</select>
		</div>
	);
}

export function TextAreaField({
	id,
	label,
	className,
	...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
	return (
		<div>
			<label className={labelCls} htmlFor={id}>
				{label}
			</label>
			<textarea
				id={id}
				className={cx(fieldCls, "leading-relaxed", className)}
				{...props}
			/>
		</div>
	);
}
