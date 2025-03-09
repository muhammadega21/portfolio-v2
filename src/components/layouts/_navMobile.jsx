function NavMobile({ isOpen, onLinkClick, activeSection }) {
  return (
    <div
      className={`fixed z-40 right-0 top-0 bottom-0 bg-(--color-background3) transition-all duration-500 ${
        isOpen ? "left-[40%] opacity-100" : "left-[110%] opacity-0"
      }`}
    >
      <div className="flex items-center justify-center h-full w-full">
        <ul className="flex flex-col items-center gap-5 nav-mobile">
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={onLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#project"
              className={activeSection === "project" ? "active" : ""}
              onClick={onLinkClick}
            >
              Project
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={onLinkClick}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className="resume mybtn-outline"
              href="/CV.pdf"
              download="CV - Muhammad Ega Dermawan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onLinkClick}
            >
              Resume
            </a>
          </li>
          <li className="flex gap-3 text-2xl mt-4">
            <a href="https://github.com/muhammadega21" target="_blank">
              <i className="ri-github-line "></i>
            </a>
            <a href="https://www.instagram.com/ega_0.2/" target="_blank">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="facebook.com/ega.dermawan.280899" target="_blank">
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ega-dermawan-1a21a729a/"
              target="_blank"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavMobile;
