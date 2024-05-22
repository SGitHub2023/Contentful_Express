import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint) => {
	const getIsMobile = () => window.innerWidth <= breakpoint;
	const [isMobile, setIsMobile] = useState(getIsMobile());
	useEffect(() => {
		const onResize = () => setIsMobile(getIsMobile());
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		}
	}, []);

	return isMobile;
}
