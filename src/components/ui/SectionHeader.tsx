interface SectionHeaderProps {
	eyebrow: string;
	title: string;
	highlight?: string;
	sub?: string;
	center?: boolean;
	light?: boolean;
}

export default function SectionHeader({
	eyebrow,
	title,
	highlight,
	sub,
	center = false,
	light = false,
}: SectionHeaderProps) {
	return (
		<div className={center ? 'text-center' : ''}>
			<div
				className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
			>
				<div className="w-8 h-px bg-[#c9a84c]" />
				<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
					{eyebrow}
				</span>
				{center && <div className="w-8 h-px bg-[#c9a84c]" />}
			</div>
			<h2
				className={`text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-4 ${
					light ? 'text-[#080808]' : 'text-white'
				}`}
				style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
			>
				{title}
				{highlight && (
					<>
						<br />
						<span className="text-[#c9a84c]">{highlight}</span>
					</>
				)}
			</h2>
			{sub && (
				<p
					className={`text-lg leading-relaxed max-w-xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-white/50'}`}
				>
					{sub}
				</p>
			)}
		</div>
	);
}
