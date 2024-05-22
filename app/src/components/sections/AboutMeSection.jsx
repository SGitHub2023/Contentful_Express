import Skills from "../Skills.jsx";
import SocialIconNav from "../SocialIconNav.jsx";
import ContactInfo from "../ContactInfo.jsx";
import MarkdownContent from "../helper/MarkdownContent.jsx";
import { Icon } from "@iconify/react";

function AboutMeSection({ props }) {
  const { ctaButtonLabel, sectionText1, subTitle, title, linkedContent } =
    props;

  const skills = linkedContent.filter(
    (entry) => entry.fields.slug === "skills"
  )[0];
  const socialMediaProfiles = linkedContent.filter(
    (entry) => entry.fields.slug === "socialmedia"
  )[0];
  const personalInfo = linkedContent.filter(
    (entry) => entry.fields.slug === "personal-info"
  )[0];
  const cvFile = personalInfo.fields.cv.fields.file.url;

  const downloadCV = () => {
    window.open(cvFile, "_blank");
  };

  return (
    <section className='about-me-section' id='about-me'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-20 py-12 md:py-16'>
        <div className='md:order-1'>
          <h2 className='text-5xl font-bold mb-3'>{title}</h2>
          <p className='text-3xl font-light'>{subTitle}</p>
          <div className='flex gap-8 items-center mt-12 '>

            <button
              onClick={downloadCV}
              className="flex gap-3 px-5 py-[0.5rem] items-center rounded-full bg-black hover:bg-teal-900 text-white text-xs uppercase"
            >
              <Icon icon="mdi:tray-download" className="text-lg" />
              <span>{ctaButtonLabel}</span>
            </button>
            <SocialIconNav
              socialMediaProfiles={socialMediaProfiles}
              iconClassNames="text-4xl hover:text-teal-900"
            />
          </div>
        </div>
        <div className="md:order-2">
          <MarkdownContent content={sectionText1} />

          <p style={{fontFamily: "Whisper, sans-serif"}} className="mt-8 ml-8 text-7xl leading-[0.75]">
            <span>John</span><br />
            <span className="ml-16">Doe</span>
          </p>

        </div>
        <div className="md:order-4">
          <Skills skills={skills} />
        </div>
        <div className="md:order-3 self-center">
          <ContactInfo contactInfo={personalInfo} />
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
