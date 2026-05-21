import { sendButtonEvent } from "../utils/analytics";

export default {
  hero: {
    title: "Our Weekend",
    image: "/images/kissing-forehead-bridge.jpg",
  },
  banner: {
    body: "We’re looking forward to spending the weekend together. Below is the schedule for our wedding weekend, with details on timing, locations, and what’s planned each day.",
  },
  sections: [
    {
      heading: "Welcome Party",
      // body: "Kick off the weekend with drinks and mingling as we welcome everyone to Rhinebeck.",
      image: "/images/bridge-1.jpg",
      pos: "bottom center",
      color: "color-white",
      reverse: true,
      details: [
        {
          icon: "location_on",
          text: [
            "Beekman Arms, Wayfarer Room",
            "6387 Mill Street, ",
            "Rhinebeck, NY 12572",
          ],
        },
        {
          icon: "schedule",
          text: ["Friday August 28, 8-10pm"],
        },
        { icon: "apparel", text: "Cocktail Attire" },
      ],
    },
    {
      heading: "Ceremony & Reception",
      // body: "An outdoor ceremony overlooking the vineyard followed by dinner, drinks and dancing to celebrate.",
      image: "/images/bridge-2.jpg",
      pos: "center center",
      color: "color-neutral-light",
      details: [
        {
          icon: "location_on",
          text: [
            "Milea Estate Vineyard",
            "450 Hollow Road,",
            "Staatsburg, NY 12580",
          ],
        },
        { icon: "schedule", text: ["Saturday August 29, 4-10:30pm"] },
        {
          icon: "directions_bus",
          text: ["Shuttles from Mirbeau & Delamater", "Pick up times TBA"],
        },
        { icon: "apparel", text: "Formal Attire" },
      ],
    },
    {
      heading: "After Party",
      // body: "For anyone who wants to keep the night going, join us afterward for late-night drinks and snacks.",
      image: "/images/bridge-3.jpg",
      color: "color-white",
      reverse: true,
      pos: "100% 100%",
      details: [
        {
          icon: "location_on",
          text: ["The American Legion", "6361 Mill St,", "Rhinebeck, NY 12572"],
        },
        { icon: "schedule", text: ["Saturday August 29, 11pm-2am"] },
        {
          icon: "directions_bus",
          text: ["Shuttles from Milea to Rhinebeck", "Depart at 10:30pm"],
        },
      ],
    },
  ],
  bookend: {
    header: "Plan Your Trip",
    ctas: [
      {
        label: "Hotels",
        href: "/accommodations",
        variation: "color-white",
        onClick: () => sendButtonEvent("navigate-accommodations"),
      },
      {
        label: "Travel Info",
        href: "/travel",
        hollow: true,
        variation: "color-white",
        onClick: () => sendButtonEvent("navigate-travel"),
      },
    ],
  },
};
