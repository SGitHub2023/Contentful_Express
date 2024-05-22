// function ContactForm() {
//   return (
// 		<div className="bg-black/10">ContactForm</div>
// 	);
// }

// export default ContactForm;

function ContactForm({ jotFormUrl }) {
	return (
		<iframe
			src={jotFormUrl}
			width="100%"
			height="1500"
			style={{ border: "none" }}
		></iframe>
	);
}

export default ContactForm;
