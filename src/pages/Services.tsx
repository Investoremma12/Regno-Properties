import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

const DETAIL_SERVICES = [
	{
		number: '01',
		title: 'Homes',
		tagline: 'Find the home your family deserves.',
		desc: 'Regno Properties offers a curated portfolio of residential properties across Lagos — from compact starter apartments to grand family duplexes and luxury mansions. Every home we list is personally vetted for structural quality, legal documentation, and fair pricing.',
		features: [
			'Verified documentation & titles',
			'Flexible payment plans',
			'Post-purchase support',
			'3-bedroom to 6-bedroom options',
			'Gated estate properties',
		],
		image:
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
	},
	{
		number: '02',
		title: 'Property Sales & Management',
		tagline: 'Your investment, expertly managed.',
		desc: "Whether you're buying, selling, or leasing, our experienced agents handle every detail. We provide market valuations, legal liaison, and ongoing property management — ensuring your real estate assets deliver consistent returns.",
		features: [
			'Market valuation reports',
			'Legal & documentation support',
			'Tenant management',
			'Rental income collection',
			'Property inspection & maintenance',
		],
		image:
			'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
	},
	{
		number: '03',
		title: 'Commercial Spaces',
		tagline: 'The right address for your business.',
		desc: 'Strategic commercial properties for retail, corporate, and industrial use. From high-street shopfronts to full office complexes — we help businesses find spaces that drive growth and project professionalism.',
		features: [
			'Retail & shopfront units',
			'Corporate office complexes',
			'Warehouse & industrial spaces',
			'Main road & high-visibility locations',
			'Short & long-term leases',
		],
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
	},
	{
		number: '04',
		title: 'Event Centres',
		tagline: 'Unforgettable events, perfect venues.',
		desc: 'Our event centres accommodate every occasion — from intimate gatherings to full-scale corporate conferences. Fully equipped with climate control, AV systems, catering support, and ample parking across multiple halls.',
		features: [
			'Capacity: 200 – 1,500 guests',
			'Full AV & lighting systems',
			'Climate controlled halls',
			'Catering kitchen facilities',
			'Ample parking & accessibility',
		],
		image:
			'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
	},
	{
		number: '05',
		title: 'General Contractor',
		tagline: 'We build what we promise.',
		desc: 'Our construction arm handles end-to-end building projects — from architectural design and structural engineering to finishing and fit-out. Quality is never compromised. We deliver on time, on budget, and to specification.',
		features: [
			'New construction & development',
			'Renovation & refurbishment',
			'Architectural design services',
			'Project management',
			'Commercial & residential builds',
		],
		image:
			'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
	},
];

function PageHero() {
	return (
		<section className="relative pt-36 pb-20 bg-[#080808] overflow-hidden">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=70"
					alt=""
					className="w-full h-full object-cover opacity-8"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 to-[#080808]" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3 mb-5">
					<div className="w-8 h-px bg-[#c9a84c]" />
					<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
						What We Do
					</span>
				</div>
				<h1
					className="font-black text-white leading-tight"
					style={{
						fontFamily: "'Cormorant Garamond', Georgia, serif",
						fontSize: 'clamp(2.5rem, 6vw, 5rem)',
					}}
				>
					Our Services
					<span className="text-[#c9a84c] italic block">Quality Assured.</span>
				</h1>
				<p className="text-white/50 text-lg mt-4 max-w-xl">
					Five core service pillars — each designed to deliver maximum value to
					our clients across Lagos State.
				</p>
			</div>
		</section>
	);
}

function ServiceBlock({
	number,
	title,
	tagline,
	desc,
	features,
	image,
	isEven,
}: (typeof DETAIL_SERVICES)[0] & { isEven: boolean }) {
	const { ref, inView } = useInView();

	return (
		<div
			ref={ref}
			className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
		>
			{/* Image */}
			<div className={`${isEven ? '' : 'lg:order-2'} relative`}>
				<div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#0f0f0f]">
					<img
						src={image}
						alt={title}
						className="w-full h-full object-cover opacity-80"
					/>
					<div className="absolute inset-0 bg-gradient-to-br from-[#080808]/40 to-transparent" />
				</div>
				{/* Number overlay */}
				<div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#c9a84c] flex items-center justify-center rounded-sm shadow-xl">
					<span
						className="text-black font-black text-2xl"
						style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
					>
						{number}
					</span>
				</div>
			</div>

			{/* Text */}
			<div className={isEven ? '' : 'lg:order-1'}>
				<div className="flex items-center gap-3 mb-4">
					<div className="w-8 h-px bg-[#c9a84c]" />
					<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[4px]">
						{tagline}
					</span>
				</div>
				<h2
					className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight"
					style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
				>
					{title}
				</h2>
				<p className="text-white/50 leading-relaxed mb-8 text-base">{desc}</p>

				<ul className="flex flex-col gap-3 mb-8">
					{features.map((f) => (
						<li
							key={f}
							className="flex items-center gap-3 text-sm text-white/60"
						>
							<span className="w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
							{f}
						</li>
					))}
				</ul>

				<Link
					to="/contact"
					className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] text-black font-black px-7 py-3 rounded-sm text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
				>
					Enquire About This Service
				</Link>
			</div>
		</div>
	);
}

export default function Services() {
	return (
		<>
			<PageHero />
			<section className="py-16 bg-[#080808]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col gap-24">
						{DETAIL_SERVICES.map((service, i) => (
							<ServiceBlock
								key={service.number}
								{...service}
								isEven={i % 2 === 0}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
