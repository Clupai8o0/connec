import ReactMarkdown from "react-markdown";

const Markdown = ({ content }: { content: string }) => {
	return (
		<div className="markdown mt-6">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	);
};

export default Markdown;
