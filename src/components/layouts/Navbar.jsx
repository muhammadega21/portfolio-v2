import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import NavMobile from "./NavMobile";

function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", () => {
    const sections = ["about", "project", "contact"];
    const offsets = sections.map((section) => {
      const el = document.getElementById(section);
      return {
        id: section,
        offset: el ? el.offsetTop - 100 : 0,
      };
    });

    const scrollPosition = scrollY.get();
    const currentSection = offsets.find((section, index) => {
      const nextSection = offsets[index + 1];
      return (
        scrollPosition >= section.offset &&
        (!nextSection || scrollPosition < nextSection.offset)
      );
    });

    if (scrollPosition < offsets[0].offset) {
      setActiveSection("");
    } else if (currentSection) {
      setActiveSection(currentSection.id);
    }
  });

  const variants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 80 && !isOpen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        animate={isHidden ? "closed" : "open"}
        initial={false}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        variants={variants}
        className="h-[80px] w-screen flex b justify-between items-center px-[6%] md:px-[10%] fixed z-50 bg-transparent  backdrop-blur-xs"
      >
        <a
          href={"#"}
          className="text-3xl font-bold text-(--color-primary)"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          E<span className="text-gray-600">ga.</span>
        </a>
        <div
          className="nav-link hidden sm:flex gap-x-8 items-center"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <a
            href={"#about"}
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
          <a
            href={"#project"}
            className={activeSection === "project" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href={"#contact"}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contacts
          </a>
          <a
            className="resume mybtn-outline"
            href="/CV"
            download="CV - Muhammad Ega Dermawan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          className="btn btn-circle sm:hidden bg-transparent rounded-none border-0 shadow-none swap swap-rotate text-(--color-primary)"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={isOpen} readOnly />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>
      </motion.nav>
      <NavMobile
        isOpen={isOpen}
        onLinkClick={handleLinkClick}
        activeSection={activeSection}
      />
    </>
  );
}

export default Navbar;
