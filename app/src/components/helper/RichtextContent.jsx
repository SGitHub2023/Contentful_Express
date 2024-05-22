import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { sanitizeContent } from "../../utilities/sanitizeHTML";

function RichtextContent({ content }) {
	const richTextHTML = documentToHtmlString(content);
	const sanitizedHTML = sanitizeContent(richTextHTML.replace(/<p><\/p>/gi, ''));
	return (
		<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} className="richtext-block"></div>
	)
}

export default RichtextContent;
