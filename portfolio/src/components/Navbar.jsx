import React, { useEffect, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/#projects", sectionId: "projects" },
  { id: "stacks", label: "Stacks", href: "/#stacks", sectionId: "stacks" },
  { id: "about", label: "About", href: "/#about", sectionId: "about" },
  { id: "contact", label: "Contact", href: "/#contact", sectionId: "contact" },
];

const MotionNav = motion.nav;
const MotionSpan = motion.span;

const sectionIds = navItems
  .map((item) => item.sectionId)
  .filter(Boolean);

const navVariants = {
  hidden: {
    opacity: 0,
    y: -8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.34,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.045,
      delayChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const selectedItem = hoveredItem ?? activeItem;
  const pillTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 420, damping: 34, mass: 0.65 };

  useEffect(() => {
    const hashId = location.hash.replace("#", "");
    const hashItem = navItems.find((item) => item.sectionId === hashId);

    if (hashItem) {
      setActiveItem(hashItem.id);
      return;
    }

    setActiveItem("home");
  }, [location.hash, location.pathname]);

  useEffect(() => {
    let ticking = false;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateTopState = () => {
      if (window.scrollY < 160) {
        setActiveItem("home");
      }
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateTopState();
        ticking = false;
      });
    };

    updateTopState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (!sections.length) {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];

        if (visibleEntry && window.scrollY >= 160) {
          setActiveItem(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToItem = (item) => {
    window.requestAnimationFrame(() => {
      if (item.sectionId) {
        document.getElementById(item.sectionId)?.scrollIntoView({
          block: "start",
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
        return;
      }

      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  };

  const handleNavClick = (event, item) => {
    event.preventDefault();
    setActiveItem(item.id);
    setHoveredItem(null);
    navigate(item.href);
    scrollToItem(item);
  };

  return (
    <header className="navbar">
      <LayoutGroup id="primary-navbar">
        <MotionNav
          className="navbar__links"
          aria-label="Primary"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          variants={navVariants}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {navItems.map((item) => {
            const isSelected = selectedItem === item.id;
            const isActive = activeItem === item.id;

            return (
              <a
                aria-current={isActive ? "location" : undefined}
                className={`navbtn ${isActive ? "navbtn--active" : ""}`}
                href={item.href}
                key={item.id}
                onBlur={() => setHoveredItem(null)}
                onClick={(event) => handleNavClick(event, item)}
                onFocus={() => setHoveredItem(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
              >
                {isSelected && (
                  <MotionSpan
                    className="navbtn__active-bg"
                    layoutId="navbar-active-pill"
                    transition={pillTransition}
                  />
                )}
                <MotionSpan className="navbtn__label" variants={itemVariants}>
                  {item.label}
                </MotionSpan>
              </a>
            );
          })}
        </MotionNav>
      </LayoutGroup>
    </header>
  );
}
