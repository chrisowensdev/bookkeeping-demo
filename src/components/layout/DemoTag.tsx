import Image from "next/image";
import Link from "next/link";

const DemoTag = () => {
	return (
		<div className=" border-white/10 pt-6 flex flex-col items-center justify-center text-xs text-white/40">
			<div>
				<p>Demonstration website created for portfolio purposes.</p>
			</div>
			<div className="text-center mt-3">
				<p>Designed By</p>
				<Link
					href="https://elevatedevworks.com"
					className="flex items-center mt-2"
				>
					<Image
						src="/elevate-main-logo-white.png"
						width={140}
						height={40}
						alt="profile Image"
					/>
				</Link>
			</div>
		</div>
	);
};

export default DemoTag;
