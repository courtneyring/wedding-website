import OpsWrapper from "@/components/OpsWrapper/OpsWrapper";
import { PromoGroup, Container, Button } from "@courtneyring/components-library";

const Ops = () => {

    const links = [
      {
        containerCta: { href: "/ops/contacts" },
        header: "Contacts",
        textAlign: "center",
        icon: "contact_page",
        color: "color-neutral-light",
      },
      {
        containerCta: { href: "/ops/master" },
        header: "Master Schedule",
        textAlign: "center",
        icon: "view_agenda",
        color: "color-neutral-light",
      },
    ];

  return (
    <OpsWrapper backButton={{label: 'Wedding Website', value: '/'}} header='Wedding Ops'>
      <PromoGroup promos={links} />
    </OpsWrapper>
  );
};

export default Ops;
