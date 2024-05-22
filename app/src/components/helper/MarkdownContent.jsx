import Markdown from 'react-markdown'
import { sanitizeContent } from "../../utilities/sanitizeHTML";
import {documentToHtmlString} from "@contentful/rich-text-html-renderer";

function MarkdownContent({ content }) {

	// const markdown = documentToHtmlString(content);
	// const sanitizedHTML = sanitizeContent(markdown.replace(/<p><\/p>/gi, ''));

	return (
		<>
			<Markdown>{content}</Markdown>
		</>

	)
}

export default MarkdownContent;
