import { Link, useLocation } from 'react-router-dom';

const PAGES = [
	{ label: 'Home', path: '/' },
	{ label: 'Properties', path: '/properties' },
	{ label: 'Services', path: '/services' },
	{ label: 'About Us', path: '/about' },
	{ label: 'Contact', path: '/contact' },
];

const SERVICES_LIST = [
	'Homes',
	'Commercial Spaces',
	'Event Centres',
	'General Contractor',
	'Property Management',
];

export default function Footer() {
	const { pathname } = useLocation();

	return (
		<footer className="bg-[#040404] border-t border-[#c9a84c]/10 text-white">
			{/* Main footer */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="lg:col-span-1">
						<div className="flex items-center gap-3 mb-5">
							<div className="w-9 h-9 flex-shrink-0">
								<svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
									<rect
										width="36"
										height="36"
										rx="6"
										fill="url(#footerLogoGrad)"
									/>
									<path
										d="M8 26V16l10-8 10 8v10"
										stroke="white"
										strokeWidth="2"
										strokeLinejoin="round"
									/>
									<path
										d="M14 26v-6h8v6"
										stroke="white"
										strokeWidth="2"
										strokeLinejoin="round"
									/>
									<defs>
										<linearGradient
											id="footerLogoGrad"
											x1="0"
											y1="0"
											x2="36"
											y2="36"
										>
											<stop offset="0%" stopColor="#c9a84c" />
											<stop offset="100%" stopColor="#8b6914" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div>
								<p className="font-black text-sm text-white tracking-widest uppercase">
									Regno
								</p>
								<p className="text-[#c9a84c] text-[9px] font-bold tracking-[4px] uppercase mt-0.5">
									Properties
								</p>
							</div>
						</div>
						<p className="text-white/40 text-sm leading-relaxed mb-5">
							Secure · Affordable · Reliable. Quality-assured real estate across
							Lagos State.
						</p>
						<p className="text-[#c9a84c]/70 text-xs font-semibold tracking-wide">
							Church Bus-Stop, Iba Housing Estate
							<br />
							Ojo, Lagos State
						</p>
					</div>

					{/* Quick links */}
					<div>
						<h4 className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[4px] mb-5">
							Quick Links
						</h4>
						<ul className="flex flex-col gap-3">
							{PAGES.map(({ label, path }) => (
								<li key={path}>
									<Link
										to={path}
										className={`text-sm transition-colors duration-200 ${pathname === path ? 'text-[#c9a84c]' : 'text-white/50 hover:text-[#c9a84c]'}`}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[4px] mb-5">
							Our Services
						</h4>
						<ul className="flex flex-col gap-3">
							{SERVICES_LIST.map((s) => (
								<li key={s}>
									<Link
										to="/services"
										className="text-white/50 hover:text-[#c9a84c] text-sm transition-colors duration-200"
									>
										{s}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[4px] mb-5">
							Contact
						</h4>
						<div className="flex flex-col gap-4">
							<a
								href="tel:07061924577"
								className="flex items-start gap-3 group"
							>
								<svg
									className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0"
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
								<div>
									<p className="text-white/50 group-hover:text-[#c9a84c] text-sm transition-colors">
										07061924577
									</p>
									<p className="text-white/50 group-hover:text-[#c9a84c] text-sm transition-colors">
										08053480478
									</p>
								</div>
							</a>
							<div className="flex items-start gap-3">
								<svg
									className="w-4 h-4 text-[#c9a84c] mt-0.5 flex-shrink-0"
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
								<p className="text-white/50 text-sm leading-relaxed">
									Church Bus-Stop, Iba Housing Estate, Ojo, Lagos State
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-white/5">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="text-white/20 text-xs">
						© {new Date().getFullYear()} Regno Properties. All rights reserved.
					</p>
					<p className="text-white/20 text-xs tracking-widest uppercase">
						Secure · Affordable · Reliable
					</p>
				</div>
			</div>
		</footer>
	);
}
