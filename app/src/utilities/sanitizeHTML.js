import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

// Custom hook for sanitizing HTML content
export const sanitizeContent = (initialContent) => {
	const [sanitizedContent, setSanitizedContent] = useState(initialContent);
	useEffect(() => {
		const sanitized = DOMPurify.sanitize(initialContent);
		setSanitizedContent(sanitized);
	}, [initialContent]);
	return sanitizedContent;
};
