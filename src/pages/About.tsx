import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { useCounter } from '@/hooks/useCounter';
import SectionHeader from '@/components/ui/SectionHeader';

function PageHero() {
	return (
		<section className="relative pt-36 pb-20 bg-[#080808] overflow-hidden">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600&q=70"
					alt=""
					className="w-full h-full object-cover opacity-10"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 to-[#080808]" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3 mb-5">
					<div className="w-8 h-px bg-[#c9a84c]" />
					<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
						Our Story
					</span>
				</div>
				<h1
					className="font-black text-white leading-tight"
					style={{
						fontFamily: "'Cormorant Garamond', Georgia, serif",
						fontSize: 'clamp(2.5rem, 6vw, 5rem)',
					}}
				>
					About Regno
					<span className="text-[#c9a84c] italic block">Properties.</span>
				</h1>
			</div>
		</section>
	);
}

const STATS = [
	{ target: 500, suffix: '+', label: 'Properties Sold' },
	{ target: 200, suffix: '+', label: 'Happy Families' },
	{ target: 15, suffix: '+', label: 'Years Experience' },
	{ target: 36, suffix: '', label: 'States Covered' },
];

function StatItem({
	target,
	suffix,
	label,
	start,
}: (typeof STATS)[0] & { start: boolean }) {
	const count = useCounter(target, 1600, start);
	return (
		<div className="text-center py-8 px-4 border-r border-white/5 last:border-r-0">
			<p
				className="font-black text-4xl text-white tabular-nums mb-1"
				style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
			>
				{count}
				<span className="text-[#c9a84c]">{suffix}</span>
			</p>
			<p className="text-white/40 text-xs uppercase tracking-widest">{label}</p>
		</div>
	);
}

const VALUES = [
	{
		title: 'Security',
		desc: 'Every property we list is legally verified. Your investment is protected from day one.',
	},
	{
		title: 'Affordability',
		desc: 'Premium properties at fair market prices. We believe quality real estate should be accessible.',
	},
	{
		title: 'Reliability',
		desc: "We deliver on every promise. If we say it's ready, it's ready. No surprises.",
	},
	{
		title: 'Quality',
		desc: 'Our general contracting and property standards are inspected and assured before handover.',
	},
];

const TEAM = [
	{
		name: 'The Founders',
		role: 'Kingdom Builders',
		img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
	},
	{
		name: 'Sales Team',
		role: 'Property Consultants',
		img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
	},
	{
		name: 'Construction Unit',
		role: 'General Contractors',
		img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
	},
];

export default function About() {
	const { ref: stRef, inView: stIn } = useInView(0.2);
	const { ref: storyRef, inView: storyIn } = useInView();
	const { ref: valRef, inView: valIn } = useInView();
	const { ref: teamRef, inView: teamIn } = useInView();

	return (
		<>
			<PageHero />

			{/* Stats */}
			<div ref={stRef} className="bg-[#0a0a0a] border-y border-white/5">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-2 lg:grid-cols-4">
						{STATS.map((s) => (
							<StatItem key={s.label} {...s} start={stIn} />
						))}
					</div>
				</div>
			</div>

			{/* Story */}
			<section className="py-24 bg-[#080808]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={storyRef}
						className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${storyIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
					>
						{/* Image */}
						<div className="relative">
							<div className="aspect-[4/5] rounded-sm overflow-hidden bg-[#0f0f0f]">
								<img
									src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
									alt="Regno Properties office"
									className="w-full h-full object-cover opacity-80"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 to-transparent" />
							</div>
							{/* Gold corner accents */}
							<div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#c9a84c] rounded-tl-sm" />
							<div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#c9a84c] rounded-br-sm" />
							{/* Floating badge */}
							<div className="absolute bottom-8 -right-4 sm:-right-8 bg-[#c9a84c] text-black p-5 rounded-sm shadow-2xl">
								<p
									className="font-black text-2xl leading-none"
									style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
								>
									15+
								</p>
								<p className="text-xs font-black uppercase tracking-widest mt-0.5">
									Years
								</p>
							</div>
						</div>

						{/* Text */}
						<div>
							<div className="flex items-center gap-3 mb-5">
								<div className="w-8 h-px bg-[#c9a84c]" />
								<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
									Who We Are
								</span>
							</div>
							<h2
								className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight"
								style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
							>
								Born in Lagos.
								<br />
								<span className="text-[#c9a84c] italic">
									Built for Nigeria.
								</span>
							</h2>
							<p className="text-white/50 leading-relaxed mb-5">
								Regno Properties was founded with a singular mission: to make
								premium real estate accessible, transparent, and stress-free for
								every Nigerian family and business. Based at Iba Housing Estate,
								Ojo — Lagos State — we operate in one of Nigeria's most dynamic
								real estate markets.
							</p>
							<p className="text-white/40 leading-relaxed mb-5">
								Over more than a decade, we have facilitated hundreds of
								property transactions — helping first-time buyers, experienced
								investors, and businesses secure their ideal spaces. Our general
								contracting arm builds and renovates properties to the highest
								standards.
							</p>
							<p className="text-white/40 leading-relaxed mb-8">
								The Regno name stands for one thing above all else: Quality
								Assured. Whether you're buying a starter home or a luxury
								commercial complex, you can trust that every property we touch
								has been meticulously vetted.
							</p>
							<div className="flex flex-wrap gap-4">
								<Link
									to="/properties"
									className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-black font-black px-7 py-3 rounded-sm text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
								>
									Browse Properties
								</Link>
								<Link
									to="/contact"
									className="inline-flex items-center gap-2 border border-white/20 hover:border-[#c9a84c]/40 text-white font-semibold px-7 py-3 rounded-sm text-xs tracking-wide transition-all duration-300 hover:-translate-y-0.5"
								>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-24 bg-[#0a0a0a]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={valRef}
						className={`mb-14 transition-all duration-700 ${valIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
					>
						<SectionHeader
							eyebrow="Our Core Values"
							title="What We"
							highlight="Stand For."
							center
						/>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
						{VALUES.map(({ title, desc }, i) => (
							<div
								key={title}
								className={`p-8 bg-[#080808] border border-white/5 hover:border-[#c9a84c]/20 rounded-sm group transition-all duration-300 hover:-translate-y-1 ${valIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
								style={{ transitionDelay: `${i * 100 + 200}ms` }}
							>
								<div className="w-8 h-px bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors duration-300 mb-5" />
								<h3
									className="text-white font-black text-xl mb-3 group-hover:text-[#c9a84c] transition-colors duration-300"
									style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
								>
									{title}
								</h3>
								<p className="text-white/40 text-sm leading-relaxed">{desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-24 bg-[#080808]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={teamRef}
						className={`mb-14 transition-all duration-700 ${teamIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
					>
						<SectionHeader
							eyebrow="Our Team"
							title="The People"
							highlight="Behind Regno."
							center
						/>
					</div>
					<div className="grid sm:grid-cols-3 gap-6">
						{TEAM.map(({ name, role, img }, i) => (
							<div
								key={name}
								className={`group relative overflow-hidden rounded-sm bg-[#0f0f0f] ${teamIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
								style={{
									transitionDelay: `${i * 120 + 200}ms`,
									transition: 'all 0.6s ease',
								}}
							>
								<div className="aspect-[3/4] overflow-hidden">
									<img
										src={img}
										alt={name}
										className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
								</div>
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<p
										className="text-white font-black text-lg"
										style={{
											fontFamily: "'Cormorant Garamond', Georgia, serif",
										}}
									>
										{name}
									</p>
									<p className="text-[#c9a84c] text-xs uppercase tracking-widest font-bold mt-0.5">
										{role}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
