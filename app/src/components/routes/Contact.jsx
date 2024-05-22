import { Icon } from "@iconify/react";
import ContactForm from "../ContactForm";

function Contact({ props }) {
	const { title, linkedContent } = props;
	const personalInfo = linkedContent[0].fields;

	return (
		<section className="bg-teal-950 text-white">
			<div className="container py-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
				<div>
					<h2 className="text-5xl font-bold mb-20">{title}</h2>
					<div className="flex gap-4 mb-8">
						<Icon icon="ion:mail-outline" className="text-2xl" />
						<span>{personalInfo.eMail} </span>
					</div>

					<div className="flex gap-4 mb-8">
						<Icon icon="ion:phone-portrait-outline" className="text-2xl" />
						<span>{personalInfo.phone} </span>
					</div>

					<div className="flex gap-4 mb-8">
						<Icon icon="ion:location-outline" className="text-2xl" />
						<span>
							{" "}
							{personalInfo.address}, {personalInfo.zipCode} {personalInfo.city}
						</span>
					</div>
				</div>
				<div>
					<ContactForm jotFormUrl={props.ctaButtonTarget} />
				</div>
			</div>
		</section>
	);
}

export default Contact;
