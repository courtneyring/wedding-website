import { Navbar } from "@courtneyring/components-library";
import CMIcon from "../../icons/logo.jsx";

const WeddingNavbar = () => {
  return (
    <Navbar
      links={[
        { label: "Home", value: "/" },
        { label: "Schedule", value: "/schedule" },
        { label: "Hotels", value: "/accommodations" },
        { label: "Travel", value: "/travel" },
        { label: "Transport", value: "/transportation" },
        { label: "FAQs", value: "/faqs" },
        { label: "RSVP", value: "/rsvp" },
      ]}
      logoComponent={<CMIcon />}
      backgroundColor={"colorNeutralDark"}
      color={'colorWhite'}
    ></Navbar>
  );
};

export default WeddingNavbar;
