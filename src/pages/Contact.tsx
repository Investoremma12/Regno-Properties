import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

type FormData = {
	name: string;
	phone: string;
	email: string;
	interest: string;
	message: string;
};
const EMPTY: FormData = {
	name: '',
	phone: '',
	email: '',
	interest: '',
	message: '',
};

const INFO = [
	{
		label: 'Address',
		value: 'Church Bus-Stop, Iba Housing Estate, Ojo, Lagos State',
		href: 'https://maps.google.com/?q=Iba+Housing+Estate+Ojo+Lagos',
		icon: (
			<svg
				className="w-5 h-5"
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
		),
	},
	{
		label: 'Phone Lines',
		value: '07061924577 · 08053480478',
		href: 'tel:07061924577',
		icon: (
			<svg
				className="w-5 h-5"
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
		),
	},
	{
		label: 'Office Hours',
		value: 'Mon – Sat: 8:00 AM – 6:00 PM',
		href: null,
		icon: (
			<svg
				className="w-5 h-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		),
	},
	{
		label: 'Services',
		value: 'Homes · Commercial · Events · Construction',
		href: null,
		icon: (
			<svg
				className="w-5 h-5"
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
		),
	},
];

function PageHero() {
	return (
		<section className="relative pt-36 pb-20 bg-[#080808] overflow-hidden">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=70"
					alt=""
					className="w-full h-full object-cover opacity-8"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 to-[#080808]" />
			</div>
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center gap-3 mb-5">
					<div className="w-8 h-px bg-[#c9a84c]" />
					<span className="text-[#c9a84c] text-[10px] font-black uppercase tracking-[5px]">
						Reach Us
					</span>
				</div>
				<h1
					className="font-black text-white leading-tight"
					style={{
						fontFamily: "'Cormorant Garamond', Georgia, serif",
						fontSize: 'clamp(2.5rem, 6vw, 5rem)',
					}}
				>
					Get in Touch
					<span className="text-[#c9a84c] italic block">
						We're Here for You.
					</span>
				</h1>
				<p className="text-white/50 text-lg mt-4 max-w-lg">
					Whether you're buying, selling, or simply exploring — reach out and
					our team will respond within 24 hours.
				</p>
			</div>
		</section>
	);
}

export default function Contact() {
	const [form, setForm] = useState<FormData>(EMPTY);
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);
	const { ref, inView } = useInView();

	const handle = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSent(true);
			setForm(EMPTY);
			setTimeout(() => setSent(false), 6000);
		}, 1200);
	};

	const inputCls =
		'w-full bg-[#0f0f0f] border border-white/10 focus:border-[#c9a84c]/50 focus:ring-1 focus:ring-[#c9a84c]/10 text-white placeholder-white/25 rounded-sm px-4 py-3.5 text-sm outline-none transition-all duration-200';

	return (
		<>
			<PageHero />
			<section className="py-16 bg-[#080808]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={ref}
						className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
					>
						{/* Left — info */}
						<div className="flex flex-col gap-4">
							<p className="text-white/40 text-sm leading-relaxed mb-4">
								Our team is ready to assist with property enquiries, site
								visits, valuation requests, and general contracting projects.
								Fill the form or reach us directly.
							</p>

							{INFO.map(({ label, value, href, icon }) => (
								<div
									key={label}
									className="flex items-start gap-4 p-5 bg-[#0f0f0f] border border-white/5 hover:border-[#c9a84c]/20 rounded-sm transition-all duration-200 group"
								>
									<div className="w-10 h-10 rounded-sm bg-[#c9a84c]/10 text-[#c9a84c] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c] group-hover:text-black transition-all duration-200">
										{icon}
									</div>
									<div>
										<p className="text-[#c9a84c] text-[10px] font-black uppercase tracking-widest mb-1">
											{label}
										</p>
										{href ? (
											<a
												href={href}
												target={href.startsWith('http') ? '_blank' : undefined}
												rel="noopener noreferrer"
												className="text-white/70 hover:text-white text-sm transition-colors"
											>
												{value}
											</a>
										) : (
											<p className="text-white/70 text-sm">{value}</p>
										)}
									</div>
								</div>
							))}

							{/* WhatsApp */}
							<a
								href="https://wa.me/2347061924577"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-green-500/10 mt-2"
							>
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.505 5.843L0 24l6.337-1.478A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
								</svg>
								<span className="tracking-widest uppercase text-sm">
									Chat on WhatsApp
								</span>
							</a>
						</div>

						{/* Right — form */}
						<div className="bg-[#0f0f0f] border border-white/5 rounded-sm p-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="w-6 h-px bg-[#c9a84c]" />
								<h2
									className="text-white font-black text-xl"
									style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
								>
									Send an Enquiry
								</h2>
							</div>

							{sent ? (
								<div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
									<div className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center rounded-sm">
										<svg
											className="w-8 h-8 text-[#c9a84c]"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={1.5}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<div>
										<p
											className="text-white font-black text-xl"
											style={{
												fontFamily: "'Cormorant Garamond', Georgia, serif",
											}}
										>
											Enquiry Received
										</p>
										<p className="text-white/40 text-sm mt-1">
											Our team will contact you within 24 hours.
										</p>
									</div>
								</div>
							) : (
								<form onSubmit={submit} className="flex flex-col gap-4">
									<div className="grid sm:grid-cols-2 gap-4">
										<div>
											<label className="block text-[10px] font-black text-[#c9a84c]/60 uppercase tracking-widest mb-1.5">
												Full Name *
											</label>
											<input
												name="name"
												type="text"
												required
												value={form.name}
												onChange={handle}
												placeholder="Your full name"
												className={inputCls}
											/>
										</div>
										<div>
											<label className="block text-[10px] font-black text-[#c9a84c]/60 uppercase tracking-widest mb-1.5">
												Phone Number *
											</label>
											<input
												name="phone"
												type="tel"
												required
												value={form.phone}
												onChange={handle}
												placeholder="0801 234 5678"
												className={inputCls}
											/>
										</div>
									</div>
									<div>
										<label className="block text-[10px] font-black text-[#c9a84c]/60 uppercase tracking-widest mb-1.5">
											Email Address
										</label>
										<input
											name="email"
											type="email"
											value={form.email}
											onChange={handle}
											placeholder="your@email.com"
											className={inputCls}
										/>
									</div>
									<div>
										<label className="block text-[10px] font-black text-[#c9a84c]/60 uppercase tracking-widest mb-1.5">
											I'm Interested In *
										</label>
										<select
											name="interest"
											required
											value={form.interest}
											onChange={handle}
											className={inputCls}
										>
											<option value="">Select an option...</option>
											<option>Buying a Home</option>
											<option>Renting a Property</option>
											<option>Commercial Space</option>
											<option>Event Centre</option>
											<option>General Contracting</option>
											<option>Property Valuation</option>
											<option>Investment Consultation</option>
										</select>
									</div>
									<div>
										<label className="block text-[10px] font-black text-[#c9a84c]/60 uppercase tracking-widest mb-1.5">
											Message
										</label>
										<textarea
											name="message"
											rows={4}
											value={form.message}
											onChange={handle}
											placeholder="Tell us about your requirements — location preference, budget range, timeline..."
											className={`${inputCls} resize-none`}
										/>
									</div>
									<button
										type="submit"
										disabled={loading}
										className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8963e] disabled:opacity-60 text-black font-black py-4 rounded-sm transition-all duration-200 hover:-translate-y-0.5 text-sm tracking-widest uppercase shadow-lg shadow-[#c9a84c]/10"
									>
										{loading ? (
											<>
												<svg
													className="w-4 h-4 animate-spin"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													/>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
													/>
												</svg>
												Sending...
											</>
										) : (
											'Send Enquiry'
										)}
									</button>
									<p className="text-center text-xs text-white/20">
										Or call directly:{' '}
										<a
											href="tel:07061924577"
											className="text-[#c9a84c] hover:text-[#d4b860] transition-colors"
										>
											07061924577
										</a>
									</p>
								</form>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
