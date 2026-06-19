import { Link } from 'react-router-dom';
import type { Property } from '@/data/properties';

interface PropertyCardProps {
	property: Property;
	delay?: number;
	inView?: boolean;
}

export default function PropertyCard({
	property,
	delay = 0,
	inView = true,
}: PropertyCardProps) {
	const { title, type, location, price, beds, baths, sqft, status, image, id } =
		property;

	const statusColor =
		status === 'Available'
			? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
			: status === 'Let Agreed'
				? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
				: 'text-red-400 bg-red-400/10 border-red-400/20';

	return (
		<Link
			to={`/properties/${id}`}
			className={`group relative bg-[#0f0f0f] border border-white/5 rounded-sm overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#c9a84c]/5 block ${
				inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
			}`}
			style={{ transitionDelay: `${delay}ms`, transition: 'all 0.5s ease' }}
		>
			{/* Image */}
			<div className="relative aspect-[4/3] overflow-hidden bg-[#1a1a1a]">
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />

				{/* Status badge */}
				<div className="absolute top-3 left-3">
					<span
						className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm border ${statusColor}`}
					>
						{status}
					</span>
				</div>

				{/* Type badge */}
				<div className="absolute top-3 right-3">
					<span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c]">
						{type}
					</span>
				</div>
			</div>

			{/* Content */}
			<div className="p-5">
				<h3 className="font-black text-white text-base leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors duration-300">
					{title}
				</h3>
				<p className="text-white/40 text-xs mb-4 flex items-center gap-1.5">
					<svg
						className="w-3 h-3 text-[#c9a84c] flex-shrink-0"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					{location}
				</p>

				{/* Specs row */}
				{(beds || baths || sqft) && (
					<div className="flex items-center gap-4 text-xs text-white/40 mb-4 pb-4 border-b border-white/5">
						{beds && (
							<span className="flex items-center gap-1">
								<svg
									className="w-3.5 h-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								{beds} Beds
							</span>
						)}
						{baths && (
							<span className="flex items-center gap-1">
								<svg
									className="w-3.5 h-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
									/>
								</svg>
								{baths} Baths
							</span>
						)}
						{sqft && <span>{sqft} sqft</span>}
					</div>
				)}

				<div className="flex items-center justify-between">
					<p className="font-black text-[#c9a84c] text-lg">{price}</p>
					<span className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 text-xs font-bold">
						View
						<svg
							className="w-3.5 h-3.5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2.5}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>
				</div>
			</div>
		</Link>
	);
}
