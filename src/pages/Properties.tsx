import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import PropertyCard from '@/components/ui/PropertyCard';
import { PROPERTIES } from '@/data/properties';

const FILTERS = ['All', 'Homes', 'Commercial', 'Event Centre', 'Land'] as const;
type Filter = (typeof FILTERS)[number];

function PageHero() {
	return (
		<section className="relative pt-36 pb-20 bg-[#080808] overflow-hidden">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=70"
					alt=""
					className="w-full h-full object-cover opacity-10"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-[#080808]/80 to-[#080808]" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3 mb-5">
					<div className="w-8 h-px bg-[#c9a84c]" />
					<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
						Our Listings
					</span>
				</div>
				<h1
					className="font-black text-white leading-tight"
					style={{
						fontFamily: "'Cormorant Garamond', Georgia, serif",
						fontSize: 'clamp(2.5rem, 6vw, 5rem)',
					}}
				>
					All Properties
					<span className="text-[#c9a84c] italic block">Available Now.</span>
				</h1>
				<p className="text-white/50 text-lg mt-4 max-w-lg">
					Browse our curated selection of residential, commercial, and event
					properties across Lagos State.
				</p>
			</div>
		</section>
	);
}

export default function Properties() {
	const [filter, setFilter] = useState<Filter>('All');
	const [search, setSearch] = useState('');
	const { ref, inView } = useInView();

	const filtered = PROPERTIES.filter((p) => {
		const matchType = filter === 'All' || p.type === filter;
		const matchSearch =
			search === '' ||
			p.title.toLowerCase().includes(search.toLowerCase()) ||
			p.location.toLowerCase().includes(search.toLowerCase());
		return matchType && matchSearch;
	});

	return (
		<>
			<PageHero />
			<section className="py-16 bg-[#080808]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Search + filters */}
					<div className="flex flex-col sm:flex-row gap-4 mb-10">
						{/* Search */}
						<div className="relative flex-1 max-w-sm">
							<svg
								className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
							<input
								type="text"
								placeholder="Search by name or location..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full bg-[#0f0f0f] border border-white/10 focus:border-[#c9a84c]/50 text-white placeholder-white/30 text-sm pl-10 pr-4 py-3 rounded-sm outline-none transition-colors"
							/>
						</div>

						{/* Filter tabs */}
						<div className="flex flex-wrap gap-2">
							{FILTERS.map((f) => (
								<button
									key={f}
									onClick={() => setFilter(f)}
									className={`px-5 py-2.5 rounded-sm text-xs font-black uppercase tracking-widest transition-all duration-200 ${
										filter === f
											? 'bg-[#c9a84c] text-black shadow-lg shadow-[#c9a84c]/15'
											: 'border border-white/10 text-white/60 hover:border-[#c9a84c]/40 hover:text-[#c9a84c]'
									}`}
								>
									{f}
								</button>
							))}
						</div>
					</div>

					{/* Results count */}
					<div
						ref={ref}
						className={`mb-6 transition-all duration-500 ${inView ? 'opacity-100' : 'opacity-0'}`}
					>
						<p className="text-white/30 text-sm">
							Showing{' '}
							<span className="text-[#c9a84c] font-bold">
								{filtered.length}
							</span>{' '}
							properties
						</p>
					</div>

					{/* Grid */}
					{filtered.length > 0 ? (
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
							{filtered.map((p, i) => (
								<PropertyCard
									key={p.id}
									property={p}
									delay={i * 60}
									inView={inView}
								/>
							))}
						</div>
					) : (
						<div className="py-24 text-center">
							<p className="text-white/20 text-6xl mb-4">🏠</p>
							<p className="text-white/40 text-lg font-semibold">
								No properties found
							</p>
							<p className="text-white/20 text-sm mt-1">
								Try adjusting your search or filter
							</p>
						</div>
					)}
				</div>
			</section>
		</>
	);
}
