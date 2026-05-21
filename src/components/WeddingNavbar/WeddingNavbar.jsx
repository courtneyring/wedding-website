"use client";

import { Navbar } from "@courtneyring/components-library";
import CMIcon from "../../icons/logo.jsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const WeddingNavbar = () => {
    const pathname = usePathname();
  const [hidden, setHidden] = useState(() => pathname === '/' ? true : false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHidden(false);
      } else {
        setHidden(true);
      }
    };
    if (pathname === "/") {
      handleScroll();

      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      links={[
        { label: "Schedule", value: "/schedule" },
        { label: "Transport", value: "/transportation" },
        { label: "Travel", value: "/travel" },
        { label: "Hotels", value: "/accommodations" },
        { label: "FAQs", value: "/faqs" },
        { label: "Registry", value: "/registry" },
        { label: "RSVP", value: "/rsvp" },
      ]}
      logoComponent={<CMIcon />}
      backgroundColor={"colorNeutralDark"}
      color={"colorWhite"}
      hidden={hidden}
      position={pathname === '/rsvp' && 'static'}
    ></Navbar>
  );
};

export default WeddingNavbar;
