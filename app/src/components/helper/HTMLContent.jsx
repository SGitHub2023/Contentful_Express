import { sanitizeContent } from "../../utilities/sanitizeHTML";
import parse from 'html-react-parser';

function HTMLContent({ content }) {
	const sanitizedContent = sanitizeContent(content);
	return parse(sanitizedContent);
}

export default HTMLContent;
