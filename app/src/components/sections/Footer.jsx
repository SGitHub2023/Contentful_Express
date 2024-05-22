import SocialIconNav from "../SocialIconNav";
import { Icon } from "@iconify/react";

function Footer({ props }) {
  const { title, subTitle, sectionText1, sectionText2, linkedContent } = props;

  const socialMediaProfiles = linkedContent.filter(
    (entry) => entry.fields.slug === "socialmedia"
  )[0];
  const email = linkedContent[1].fields.eMail;

  return (
    <footer className="bg-teal-900 py-16">
      <div className="container max-w-[600px] mx-auto flex flex-col text-center place-items-center ">
        <h1 className="text-xl font-bold text-white mb-6">{title}</h1>
        <p className="text-stone-300 text-sm font-light mb-6">{sectionText1}</p>
        <p className="flex gap-1 items-center mb-4">
          <Icon
            icon="ic:outline-email"
            width="1rem"
            height="1rem"
            className="text-stone-300 text-sm font-thin mr-1"
          />
          <span className="text-stone-300 text-sm font-this">{email} </span>
        </p>
        <SocialIconNav
					socialMediaProfiles={socialMediaProfiles}
					iconClassNames="text-3xl text-white hover:text-black"
				/>
        <p className="text-stone-300 text-sm font-light mt-6">{sectionText2}</p>
      </div>
    </footer>
  );
}

export default Footer;
