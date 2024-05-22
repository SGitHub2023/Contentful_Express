import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useIsMobile } from "../../utilities/mobileCheck";

function Navbar({ props }) {
  let [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile(640);
  const personalInfo = props.linkedContent.filter(
    (entry) => entry.fields.slug === "personal-info"
  )[0];
  const cvFile = personalInfo.fields.cv.fields.file.url;

  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  const toggleNav = () => {
    isOpen = !isOpen;
    setIsOpen(isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const linkTop = () => {
    closeNav();
    window.scrollTo({ top: 0 });
  };

  const smoothScroll = (el) => {
    let offset = isMobile ? 48 : 64;
    window.scrollTo({
      behavior: "smooth",
      top:
        el.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        offset,
    });
  };

  const downloadCV = () => {
    window.open(cvFile, "_blank");
  };

  const nav = (
    <ul>
      <li>
        <Link
          to='/'
          onClick={linkTop}
          className='font-semibold text-lg hover:text-teal-950'
        >
          Home
        </Link>
      </li>
      <li>
        <HashLink
          to='/#projects'
          scroll={smoothScroll}
          onClick={closeNav}
          className='font-semibold text-lg hover:text-teal-950'
        >
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink
          to='/#about-me'
          scroll={smoothScroll}
          onClick={closeNav}
          className='font-semibold text-lg hover:text-teal-950'
        >
          About me
        </HashLink>
      </li>
      <li>
        <Link
          to='/contact'
          onClick={linkTop}
          className='font-semibold text-lg hover:text-teal-950'
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <section className='bg-teal-900 fixed top-0 left-0 w-full z-30'>
      <div className='relative container mx-auto text-white px-0'>
        <div className='relative z-10 flex items-center bg-teal-900 h-12 sm:h-16 px-4'>
          <button className='flex-1 sm:hidden' onClick={toggleNav}>
            <Icon icon='ion:menu-outline' className='text-3xl' />
            <span className='sr-only'>Toggle Menu</span>
          </button>
          {!isMobile && <nav className='desktop-nav'>{nav}</nav>}
          <button
            onClick={downloadCV}
            className='flex gap-3 px-4 py-[0.3rem] items-center rounded-full border-white border-2 text-xs uppercase hover:bg-teal-950'
          >
            <Icon icon='mdi:tray-download' className='text-lg' />
            <span>Download CV</span>
          </button>
        </div>
        {isMobile && (
          <nav className={isOpen ? "mobile-nav is-open" : "mobile-nav"}>
            {nav}
          </nav>
        )}
      </div>
    </section>
  );
}

export default Navbar;
