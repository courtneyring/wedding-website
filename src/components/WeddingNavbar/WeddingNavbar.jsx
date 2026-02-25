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
      ]}
      logoComponent={<CMIcon />}
    ></Navbar>
  );
};

export default WeddingNavbar;
