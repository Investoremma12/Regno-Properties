export interface Property {
	id: string;
	title: string;
	type: 'Homes' | 'Commercial' | 'Event Centre' | 'Land';
	location: string;
	price: string;
	beds?: number;
	baths?: number;
	sqft?: string;
	status: 'Available' | 'Let Agreed' | 'Sold';
	featured: boolean;
	image: string;
	desc: string;
}

export const PROPERTIES: Property[] = [
	{
		id: 'p1',
		title: 'Executive 4-Bedroom Duplex',
		type: 'Homes',
		location: 'Iba Housing Estate, Ojo, Lagos',
		price: '₦45,000,000',
		beds: 4,
		baths: 4,
		sqft: '3,200',
		status: 'Available',
		featured: true,
		image:
			'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
		desc: 'Stunning executive duplex with modern finishings, spacious rooms, and a private compound. Ready to move in.',
	},
	{
		id: 'p2',
		title: 'Luxury 3-Bedroom Apartment',
		type: 'Homes',
		location: 'Ojo, Lagos State',
		price: '₦22,000,000',
		beds: 3,
		baths: 3,
		sqft: '1,800',
		status: 'Available',
		featured: true,
		image:
			'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
		desc: 'Premium apartment with fitted kitchen, balcony views, and top-tier security within a gated estate.',
	},
	{
		id: 'p3',
		title: 'Commercial Office Complex',
		type: 'Commercial',
		location: 'Church Bus-Stop, Ojo, Lagos',
		price: '₦120,000,000',
		sqft: '8,500',
		status: 'Available',
		featured: true,
		image:
			'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
		desc: 'Modern commercial complex ideal for corporate headquarters, banks, or retail anchors. High foot traffic area.',
	},
	{
		id: 'p4',
		title: 'Exclusive Event Centre',
		type: 'Event Centre',
		location: 'Iba Housing Estate, Ojo, Lagos',
		price: '₦8,000,000/yr',
		sqft: '12,000',
		status: 'Available',
		featured: false,
		image:
			'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
		desc: 'Grand event centre accommodating 1,000+ guests. Climate controlled, full AV systems, multiple halls.',
	},
	{
		id: 'p5',
		title: 'Semi-Detached 3-Bedroom Bungalow',
		type: 'Homes',
		location: 'Iba Housing Estate, Ojo, Lagos',
		price: '₦18,500,000',
		beds: 3,
		baths: 2,
		sqft: '1,400',
		status: 'Available',
		featured: false,
		image:
			'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
		desc: 'Well-finished semi-detached bungalow in a serene estate. Perfect for families seeking comfort and security.',
	},
	{
		id: 'p6',
		title: 'Prime Commercial Shopfront',
		type: 'Commercial',
		location: 'Ojo, Lagos State',
		price: '₦3,500,000/yr',
		sqft: '1,200',
		status: 'Available',
		featured: false,
		image:
			'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
		desc: 'Strategic shopfront location for retail business. High visibility, main road access, ample parking.',
	},
	{
		id: 'p7',
		title: 'Serviced 5-Bedroom Mansion',
		type: 'Homes',
		location: 'Iba Housing Estate, Ojo, Lagos',
		price: '₦85,000,000',
		beds: 5,
		baths: 6,
		sqft: '5,800',
		status: 'Let Agreed',
		featured: false,
		image:
			'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
		desc: 'Ultra-premium mansion with swimming pool, cinema room, and smart home automation. Definition of luxury.',
	},
	{
		id: 'p8',
		title: 'Fully Fitted Event Hall',
		type: 'Event Centre',
		location: 'Ojo, Lagos State',
		price: '₦2,000,000/event',
		sqft: '4,500',
		status: 'Available',
		featured: false,
		image:
			'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
		desc: 'Intimate yet elegant event hall for weddings, corporate events, and celebrations up to 400 guests.',
	},
];

export const SERVICES = [
	{
		id: 's1',
		title: 'Homes',
		desc: 'Premium residential properties — from compact apartments to grand family homes — in secure Lagos estates.',
		icon: 'home',
		count: '200+ Listings',
	},
	{
		id: 's2',
		title: 'Property Sales & Letting',
		desc: 'Expert property sales, letting, and management. We handle every step of the transaction with transparency.',
		icon: 'building',
		count: 'Full Service',
	},
	{
		id: 's3',
		title: 'Commercial Spaces',
		desc: 'Office complexes, retail spaces, and industrial properties across Lagos. Strategic locations, competitive prices.',
		icon: 'store',
		count: '50+ Available',
	},
	{
		id: 's4',
		title: 'Event Centres',
		desc: 'State-of-the-art event facilities for weddings, corporate events, and celebrations. Fully equipped venues.',
		icon: 'calendar',
		count: '10+ Venues',
	},
	{
		id: 's5',
		title: 'General Contractor',
		desc: 'End-to-end construction services — design, build, and fit-out. Quality assured on every project we touch.',
		icon: 'hardhat',
		count: 'Projects Nationwide',
	},
];
