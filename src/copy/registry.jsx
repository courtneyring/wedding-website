import { sendButtonEvent } from "../utils/analytics";

export default {
  hero: {
    title: "Registry",
    image: "/images/bridge-lifting-2.jpg",
    pos: "100% 90%",
    contentPos: { top: "50px", right: "60px" },
  },
  banner: {
    ctas: [
      {
        variation: "color-primary-dark",
        children: "Registry",
        href: "https://withjoy.com/mattandcourt/registry",
        // onClick: () => sendButtonEvent("navigate-rsvp"),
      },
      {
        variation: "color-primary-dark",
        children: "Donate",
        onClick: () => {
          const el = document.getElementById('donate');
          el.scrollIntoView({behavior: 'smooth'})},
        hollow: 'true'
        // onClick: () => sendButtonEvent("navigate-rsvp"),
      },
    ],
    body: "If you’re considering a gift to help us start our next chapter, we’ve registered on WithJoy. A small selection is listed below, and our full registry is available at the link below. We've also included an option to donate to Leukemia research, a cause close to our hearts. Please feel no obligation to send a gift—your support and friendship mean the world to us.",
  },
  cameron: {
    header: "A Cause We Care About",
    body: (
      <div>
        <p>
          In February, my sweet, energetic, loving nephew was diagnosed with
          B-ALL Leukemia. He's had some ups and downs through the first few months, but he's fighting it like a champ. While he still has 2 years of chemo ahead of him, we are filled with hope: 90% of kids who follow this treatment plan remain cancer-free for life.
        </p>
        <p>
          We are incredibly grateful for the science and research that goes into
          these treatments and we would be honored if you chose to donate to
          this cause as your gift to us.
        </p>
      </div>
    ),
    image: "/images/slater-family.jpg",
    imagePos: "50% 28%",
    primaryCta: {
      variation: "color-white",
      children: "Donate",
      href: "/schedule",
      // fn: () => sendButtonEvent("navigate-schedule"),
    },
    secondaryCta: {
      hollow: true,
      variation: "color-white",
      children: "Read Cam's Story",
      href: "https://www.caringbridge.org/site/a97d781f-0d12-11f1-8778-895b4b4f74cc",
      target: "_blank",
    },
  },
  items: {
    header: 'Wishlist',
    slider: true,
    promos: [
      {
        body: "Pyrex Feshlock Food Storage Set",
        image: "/images/registry-pyrex.png",
        imageFit: "contain",
        textAlign: "center",
        color: "color-white",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=1c0f4215-3ee9-46ba-a00d-fa6a8d76ef97",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
      {
        body: "Wusthof Ikon 2-Piece Chef's Set",
        image: "/images/registry-knives.png",
        textAlign: "center",
        color: "color-white",
        imageFit: "contain",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=f5f233dd-ef28-483e-89ff-1fe6b9b4cc7e",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
      {
        body: "Tramontina Tri-Ply 12-Piece Cookware Set",
        image: "/images/registry-cookware.png",
        textAlign: "center",
        color: "color-white",
        imageFit: "contain",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=9dee11d3-cd83-4806-9761-cfb502f00395",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
      {
        body: "Cuisinart Mixing Bowl Set",
        image: "/images/registry-bowls.png",
        textAlign: "center",
        color: "color-white",
        imageFit: "contain",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=fcecfea6-0210-44b0-ba05-bd37b46db31a",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
      {
        body: "Sonos Beam Smart Soundbar",
        image: "/images/registry-sonos.png",
        textAlign: "center",
        color: "color-white",
        imageFit: "contain",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=64ad39a3-2331-4f5c-8e3e-5525444f28f7",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
      {
        body: "Spain Honeymoon Fund",
        image: "/images/honeymoon.png",
        textAlign: "center",
        color: "color-white",
        imageFit: "contain",
        containerCta: {
          href: "https://withjoy.com/mattandcourt/registry?pid=c016e1da-a83a-479c-b353-e7e25c94a80c",
          // onClick: () => sendButtonEvent("registry-bambino"),
          target: "_blank",
        },
      },
    ],
  },
};
