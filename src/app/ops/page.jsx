import { PromoGroup } from "@courtneyring/components-library";

const Ops = () => {

    const links = [
      {
        containerCta: { href: "/ops/contacts" },
        header: "Contacts",
        textAlign: "center",
        icon: "view_agenda",
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
    <>
      <h1 className="typography--h1">Wedding Ops</h1>
      <PromoGroup promos={links} />
    </>
  );
};

export default Ops;
