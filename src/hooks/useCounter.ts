import { useEffect, useRef, useState } from 'react';

export function useCounter(target: number, duration = 1800, start = false) {
	const [count, setCount] = useState(0);
	const raf = useRef<number | null>(null);

	useEffect(() => {
		if (!start) return;
		const startTime = performance.now();
		const tick = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
			setCount(Math.floor(eased * target));
			if (progress < 1) raf.current = requestAnimationFrame(tick);
		};
		raf.current = requestAnimationFrame(tick);
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [target, duration, start]);

	return count;
}
