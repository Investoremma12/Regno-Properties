import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
	{ label: 'Home', path: '/' },
	{ label: 'Properties', path: '/properties' },
	{ label: 'Services', path: '/services' },
	{ label: 'About', path: '/about' },
	{ label: 'Contact', path: '/contact' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		const fn = () => setScrolled(window.scrollY > 50);
		window.addEventListener('scroll', fn);
		return () => window.removeEventListener('scroll', fn);
	}, []);

	useEffect(() => {
		setOpen(false);
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				scrolled
					? 'bg-[#080808]/97 backdrop-blur-md border-b border-[#c9a84c]/10 shadow-xl shadow-black/40'
					: 'bg-transparent'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link to="/" className="flex items-center gap-3 group">
						<div className="relative w-9 h-9 flex-shrink-0">
							<svg viewBox="0 0 36 36" fill="none" className="w-full h-full">
								<rect width="36" height="36" rx="6" fill="url(#logoGrad)" />
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
								<path
									d="M6 16l12-10 12 10"
									stroke="#c9a84c"
									strokeWidth="1.5"
									strokeLinejoin="round"
								/>
								<defs>
									<linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
										<stop offset="0%" stopColor="#c9a84c" />
										<stop offset="100%" stopColor="#8b6914" />
									</linearGradient>
								</defs>
							</svg>
						</div>
						<div>
							<p className="font-black text-sm text-white tracking-widest uppercase leading-none">
								Regno
							</p>
							<p className="text-[#c9a84c] text-[9px] font-bold tracking-[4px] uppercase mt-0.5 leading-none">
								Properties
							</p>
						</div>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{LINKS.map(({ label, path }) => {
							const active = pathname === path;
							return (
								<Link
									key={path}
									to={path}
									className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${
										active ? 'text-[#c9a84c]' : 'text-white/70 hover:text-white'
									}`}
								>
									{label}
									<span
										className={`absolute -bottom-0.5 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}
									/>
								</Link>
							);
						})}
					</nav>

					{/* CTA */}
					<Link
						to="/contact"
						className="hidden lg:inline-flex items-center gap-2 border border-[#c9a84c]/60 hover:bg-[#c9a84c] hover:border-[#c9a84c] text-[#c9a84c] hover:text-black text-sm font-black px-5 py-2.5 rounded-sm tracking-widest uppercase transition-all duration-300 hover:-translate-y-0.5"
					>
						Enquire Now
					</Link>

					{/* Hamburger */}
					<button
						onClick={() => setOpen(!open)}
						className="lg:hidden text-white p-2"
						aria-label="Toggle menu"
					>
						<div className="w-5 flex flex-col gap-1.5">
							<span
								className={`block h-px bg-current transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}
							/>
							<span
								className={`block h-px bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}
							/>
							<span
								className={`block h-px bg-current transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}
							/>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-400 bg-[#080808]/99 backdrop-blur-md border-t border-white/5 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
			>
				<div className="px-4 py-5 flex flex-col gap-1">
					{LINKS.map(({ label, path }) => (
						<Link
							key={path}
							to={path}
							className={`text-sm font-semibold px-4 py-3 rounded-sm transition-all duration-200 tracking-wide ${
								pathname === path
									? 'text-[#c9a84c] bg-[#c9a84c]/5'
									: 'text-white/70 hover:text-white hover:bg-white/5'
							}`}
						>
							{label}
						</Link>
					))}
					<Link
						to="/contact"
						className="mt-3 text-center bg-[#c9a84c] text-black font-black text-sm py-3 rounded-sm tracking-widest uppercase"
					>
						Enquire Now
					</Link>
				</div>
			</div>
		</header>
	);
}
