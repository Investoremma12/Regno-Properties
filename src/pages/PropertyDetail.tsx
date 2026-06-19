import { useParams, Link, Navigate } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import PropertyCard from '@/components/ui/PropertyCard';
import { PROPERTIES } from '@/data/properties';

export default function PropertyDetail() {
	const { id } = useParams<{ id: string }>();
	const property = PROPERTIES.find((p) => p.id === id);
	const { ref, inView } = useInView();
	const { ref: relRef, inView: relIn } = useInView();

	if (!property) return <Navigate to="/properties" replace />;

	const related = PROPERTIES.filter(
		(p) => p.id !== id && p.type === property.type,
	).slice(0, 3);

	const statusColor =
		property.status === 'Available'
			? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
			: property.status === 'Let Agreed'
				? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
				: 'text-red-400 bg-red-400/10 border-red-400/20';

	return (
		<>
			{/* Hero image */}
			<section className="relative pt-32 pb-0 bg-[#080808]">
				<div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
					<img
						src={property.image}
						alt={property.title}
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent" />

					{/* Breadcrumb */}
					<div className="absolute top-6 left-4 sm:left-6 lg:left-8">
						<Link
							to="/properties"
							className="inline-flex items-center gap-2 text-white/70 hover:text-[#c9a84c] text-sm font-semibold transition-colors duration-200"
						>
							<svg
								className="w-4 h-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								/>
							</svg>
							Back to Properties
						</Link>
					</div>
				</div>
			</section>

			{/* Details */}
			<section
				ref={ref}
				className={`py-16 bg-[#080808] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-3 gap-12">
						{/* Main content */}
						<div className="lg:col-span-2">
							<div className="flex items-center gap-3 mb-4">
								<span
									className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm border ${statusColor}`}
								>
									{property.status}
								</span>
								<span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm bg-[#c9a84c]/10 border border-[#c9a84c]/20 text-[#c9a84c]">
									{property.type}
								</span>
							</div>

							<h1
								className="text-3xl sm:text-5xl font-black text-white leading-tight mb-3"
								style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
							>
								{property.title}
							</h1>

							<p className="flex items-center gap-2 text-white/40 text-sm mb-8">
								<svg
									className="w-4 h-4 text-[#c9a84c]"
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
								{property.location}
							</p>

							{/* Specs */}
							{(property.beds || property.baths || property.sqft) && (
								<div className="grid grid-cols-3 gap-px bg-white/5 mb-10 rounded-sm overflow-hidden">
									{property.beds && (
										<div className="bg-[#0f0f0f] p-5 text-center">
											<p
												className="text-2xl font-black text-[#c9a84c]"
												style={{
													fontFamily: "'Cormorant Garamond', Georgia, serif",
												}}
											>
												{property.beds}
											</p>
											<p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
												Bedrooms
											</p>
										</div>
									)}
									{property.baths && (
										<div className="bg-[#0f0f0f] p-5 text-center">
											<p
												className="text-2xl font-black text-[#c9a84c]"
												style={{
													fontFamily: "'Cormorant Garamond', Georgia, serif",
												}}
											>
												{property.baths}
											</p>
											<p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
												Bathrooms
											</p>
										</div>
									)}
									{property.sqft && (
										<div className="bg-[#0f0f0f] p-5 text-center">
											<p
												className="text-2xl font-black text-[#c9a84c]"
												style={{
													fontFamily: "'Cormorant Garamond', Georgia, serif",
												}}
											>
												{property.sqft}
											</p>
											<p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">
												Sqft
											</p>
										</div>
									)}
								</div>
							)}

							{/* Description */}
							<div className="mb-10">
								<h2
									className="text-white font-black text-xl mb-4"
									style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
								>
									Property Overview
								</h2>
								<p className="text-white/50 leading-relaxed">{property.desc}</p>
							</div>

							{/* Why this property */}
							<div className="bg-[#0f0f0f] border border-white/5 rounded-sm p-6">
								<h3 className="text-[#c9a84c] font-black text-sm uppercase tracking-widest mb-4">
									Why Choose This Property
								</h3>
								<ul className="grid sm:grid-cols-2 gap-3">
									{[
										'Verified legal documentation',
										'Quality assured by Regno',
										'Flexible payment options',
										'Prime Lagos location',
									].map((item) => (
										<li
											key={item}
											className="flex items-center gap-2.5 text-sm text-white/60"
										>
											<svg
												className="w-4 h-4 text-[#c9a84c] flex-shrink-0"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2.5}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M5 13l4 4L19 7"
												/>
											</svg>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Sidebar — price + enquiry */}
						<div className="lg:col-span-1">
							<div className="sticky top-28 bg-[#0f0f0f] border border-white/5 rounded-sm p-6">
								<p className="text-white/40 text-xs uppercase tracking-widest mb-1">
									Price
								</p>
								<p
									className="text-3xl font-black text-[#c9a84c] mb-6"
									style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
								>
									{property.price}
								</p>

								<div className="flex flex-col gap-3">
									<Link
										to="/contact"
										className="flex items-center justify-center bg-[#c9a84c] hover:bg-[#b8963e] text-black font-black py-3.5 rounded-sm text-xs tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
									>
										Schedule a Viewing
									</Link>
									<a
										href="tel:07061924577"
										className="flex items-center justify-center gap-2 border border-white/15 hover:border-[#c9a84c]/40 text-white font-semibold py-3.5 rounded-sm text-sm transition-all duration-300"
									>
										<svg
											className="w-4 h-4"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
											/>
										</svg>
										Call Agent
									</a>
									<a
										href="https://wa.me/2347061924577"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-sm text-sm transition-all duration-300"
									>
										<svg
											className="w-4 h-4"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.505 5.843L0 24l6.337-1.478A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
										</svg>
										WhatsApp
									</a>
								</div>

								<div className="mt-6 pt-6 border-t border-white/5">
									<p className="text-white/30 text-xs leading-relaxed">
										Regno Properties · Church Bus-Stop, Iba Housing Estate, Ojo,
										Lagos State
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Related properties */}
			{related.length > 0 && (
				<section
					ref={relRef}
					className={`py-16 bg-[#0a0a0a] border-t border-white/5 transition-all duration-700 ${relIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2
							className="text-2xl sm:text-3xl font-black text-white mb-8"
							style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
						>
							Similar <span className="text-[#c9a84c] italic">Properties</span>
						</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
							{related.map((p, i) => (
								<PropertyCard
									key={p.id}
									property={p}
									delay={i * 80}
									inView={relIn}
								/>
							))}
						</div>
					</div>
				</section>
			)}
		</>
	);
}
