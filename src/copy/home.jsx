import { sendButtonEvent } from "../utils/analytics";

export default {
  hero: {
    title: [
      <span>Courtney</span>,
      <span>&nbsp;&&nbsp;</span>,
      <span>Matt</span>,
    ],
    subtitle: [<p>Milea Estate Vineyard</p>, <p>Staatsburg, NY</p>],
    eyebrow: "August 29, 2026",
    image: "/images/milea-1.jpg",
    pos: "center 25%",
  },
  note: {
    salutation: "A Note from the",
    from: "Future Haberlachs",
    body: [
      "Our story started four years ago in a bar in downtown Manhattan. We drank and flirted and made plans for the next date. We've come a long way since that day. A first date turned into a relationship followed by many nights out that brought us closer. It included dinners with friends and trips home to visit family, gradually turning each other’s circles into ours. Those years brought five international trips, three years in banking (if you know you know), one typical NYC high-stress move-in, a national championship that divided our household and countless ordinary nights that somehow became our favorite ones. Tying the knot feels like both a long time coming and something we can hardly believe is finally here.",
      "The part we’re looking forward to most is celebrating with our friends and family. Whether you’re coming from down the street, across the country, or around the world, we appreciate you taking the time to be with us. We hope you have as much fun during the weekend as we will — we can’t wait to see you!",
    ],
    close: "With Love,",
    signature: "Courtney & Matt",
  },
  countdown: {
    targetDate: "2026-08-29T16:30:00-04:00",
    backgroundImage: "/images/wine-glass-and-bottle.jpg",
    backgroundPosition: "center center",
  },
  banner: {
    header: "More Details to Come",
    body: "Check back for updates",
  },
  imageTextVenue: {
    header: "Milea Estate Vineyard",
    body: "Staatsburg, NY",
    image: "/images/image.jpg",
  },
  imageTextSchedule: {
    header: "Our Weekend",
    body: "We’re looking forward to spending the weekend together. Check the schedule for timing, locations, and everything you need to know.",
    image: "/images/wedding.jpg",
    primaryCta: {
      variation: "color-primary-dark",
      children: "View Schedule",
      href: "/schedule",
      onClick: () => sendButtonEvent("navigate-schedule"),
    },
  },
  imageTextPlanning: {
    header: "Plan Your Trip",
    reverse: false,
    body: "We’ve put together a few helpful details on travel and accommodations. Everything you need to plan your trip is included in the pages below.",
    image: "/images/paracas-image.jpg",
    primaryCta: {
      variation: "color-primary-dark",
      children: "Book Your Stay",
      href: "/accommodations",
      onClick: () => sendButtonEvent("navigate-accommodations"),
    },
    secondaryCta: {
      variation: "color-primary-dark",
      children: "Travel Info",
      href: "/travel",
      hollow: true,
      onClick: () => sendButtonEvent("navigate-travel"),
      // variation: 'link'
    },
  },
  nextSteps: {
    promos: [
      {
        header: "Our Weekend",
        body: "See the full weekend lineup, from welcome drinks to farewell.",
        icon: "event_list",
        textAlign: "center",
        color: "color-white",
        cta: {
          label: "See the Schedule",
          variation: "link",
          icon: "east",
          href: "/schedule",
          onClick: () => sendButtonEvent("promos-schedule"),
        },
      },
      {
        header: "FAQs",
        body: "Everything you need to know before the big day.",
        icon: "chat_info",
        textAlign: "center",
        color: "color-white",
        cta: {
          label: "Get the Details",
          variation: "link",
          icon: "east",
          href: "/faqs",
          onClick: () => sendButtonEvent("promos-faqs"),
        },
      },
      {
        header: "Hotels",
        body: "Plan your stay with these nearby hotel options.",
        icon: "home",
        textAlign: "center",
        color: "color-white",
        cta: {
          label: "Explore Hotels",
          variation: "link",
          icon: "east",
          href: "/accommodations",
          onClick: () => sendButtonEvent("promos-hotels"),
        },
      },
    ],
  },
};
