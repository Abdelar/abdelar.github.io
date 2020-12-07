import { useState, useEffect } from 'react';

// from https://usehooks.com/useOnScreen
export function useOnScreen(options) {
	const [ref, setRef] = useState(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			!visible && setVisible(entry.isIntersecting);
		}, options);
		if (ref) {
			observer.observe(ref);
		}
		return () => {
			if (ref) {
				observer.unobserve(ref);
			}
		};
	}, [visible, ref, options]);

	return [setRef, visible];
}
