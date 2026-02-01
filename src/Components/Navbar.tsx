import { Link, NavLink } from "react-router-dom";
import { Offcanvas } from "bootstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const closeOffcanvas = () => {
  const el = document.getElementById("mobileNavbar");
  if (!el) return;

  const instance = Offcanvas.getInstance(el);
  instance?.hide();

  // 🔥 CRITICAL FIX: Force cleanup after closing
  setTimeout(() => {
    document.body.classList.remove("offcanvas-open", "modal-open");
    document.body.style.removeProperty("overflow");
    document.body.style.removeProperty("padding-right");

    // Remove all backdrops
    const backdrops = document.querySelectorAll(".offcanvas-backdrop");
    backdrops.forEach((backdrop) => backdrop.remove());
  }, 300); // Wait for offcanvas close animation
};

function Navbar() {
  const location = useLocation();

  // 🔥 FIX: Clean up offcanvas on route change + scroll to top
  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);

    // Close offcanvas if it's open
    const el = document.getElementById("mobileNavbar");
    if (!el) return;

    const instance = Offcanvas.getInstance(el);
    instance?.hide();

    // 🧼 Force cleanup (prevents scroll blocking)
    setTimeout(() => {
      document.body.classList.remove("offcanvas-open", "modal-open");
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");

      const backdrops = document.querySelectorAll(".offcanvas-backdrop");
      backdrops.forEach((backdrop) => backdrop.remove());
    }, 300);
  }, [location.pathname]);

  const activeStyle =
    "nav-link active fw-medium px-3 rounded-pill bg-white shadow-sm ";

  return (
    <nav className="navbar navbar-expand-xl bg-white shadow-sm rounded-pill px-4 py-2">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <i className="bi bi-grid-fill me-2"></i>
          IfeoluwaFolio
        </Link>

        {/* Toggle (mobile) */}
        <button
          className="navbar-toggler d-xl-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Nav */}
        <div className="collapse navbar-collapse d-none d-xl-flex">
          <ul className="navbar-nav mx-auto gap-2 bg-light rounded-pill px-3 py-1">
            {navLinks(activeStyle)}
          </ul>

          <RightActions />
        </div>

        {/* Mobile Offcanvas */}
        <div
          className="offcanvas offcanvas-end d-xl-none"
          tabIndex={-1}
          id="mobileNavbar"
        >
          <div className="offcanvas-header">
            <h5 className="fw-bold">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3">{navLinks(activeStyle, true)}</ul>

            <div className="mt-4">
              <RightActions mobile />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* Reusable Nav Links */
const navLinks = (activeStyle: string, mobile: boolean = false) => (
  <>
    {[
      { to: "/", icon: "house-door", label: "Home" },
      { to: "/about", icon: "file-person", label: "About" },
      { to: "/services", icon: "layers", label: "Services" },
      { to: "/works", icon: "briefcase", label: "Works" },
      { to: "/contact", icon: "chat-left-text", label: "Contact" }
    ].map((item) => (
      <li className="nav-item" key={item.to}>
        <NavLink
          to={item.to}
          onClick={() => mobile && closeOffcanvas()}
          className={({ isActive }) =>
            isActive ? activeStyle : "nav-link px-3 fw-medium"
          }
        >
          <i className={`bi bi-${item.icon} me-2`}></i>
          {item.label}
        </NavLink>
      </li>
    ))}
  </>
);

type RightActionsProps = {
  mobile?: boolean;
};

/* Right buttons */
const RightActions = ({ mobile = false }: RightActionsProps) => (
  <div className={`d-flex ${mobile ? "flex-column" : ""} gap-3`}>
    <button className="btn btn-light rounded-circle align-self-start">
      <i className="bi bi-moon"></i>
    </button>

    <Link to="/contact" onClick={() => mobile && closeOffcanvas()}>
      <button className="btn btn-dark rounded-pill px-4 w-100">
        Let's Talk <i className="bi bi-arrow-up-right ms-1"></i>
      </button>
    </Link>
  </div>
);

export default Navbar;
