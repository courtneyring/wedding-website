import { sendButtonEvent } from "../utils/analytics";

export default {
  hero: {
    title: "Our Weekend",
    image: "/images/milea-3.jpg",
  },
  banner: {
    body: "Check back for updates",
  },
  sections: [
    {
      heading: "Welcome Party",
      body: "Kick off the weekend with drinks and light desserts as we welcome everyone to Rhinebeck.",
      image: "/images/proposal-1.jpg",
      pos: "bottom center",
      color: "color-secondary",
      details: [
        {
          icon: "location_on",
          text: [
            "The Beekman Arms Hotel",
            "Wayfarer Room",
            "6387 Mill Street",
            "Rhinebeck, NY 12572",
          ],
        },
        { icon: "schedule", text: ["Friday August 28", "Time TBA"] },
      ],
    },
    {
      heading: "Ceremony & Reception",
      body: "An outdoor ceremony overlooking the vineyard followed by dinner, drinks and dancing to celebrate.",
      image: "/images/proposal-2.jpg",
      pos: "bottom center",
      reverse: true,
      details: [
        {
          icon: "location_on",
          text: [
            "Milea Estate Vineyard",
            "450 Hollow Road",
            "Staatsburg, NY 12580",
          ],
        },
        { icon: "schedule", text: ["Saturday August 29", "Time TBA"] },
      ],
    },
    {
      heading: "After Party",
      body: "For anyone who wants to keep the night going, join us afterward for late-night drinks and dancing.",
      image: "/images/proposal-3.jpg",
      color: "color-secondary",
      pos: "60% 30%",
      details: [
        {
          icon: "location_on",
          text: ["American Legion", "6361 Mill St", "Rhinebeck, NY 12572"],
        },
        { icon: "schedule", text: ["Saturday August 29", "Time TBA"] },
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
