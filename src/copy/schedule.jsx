import { sendButtonEvent } from "../utils/analytics";

export default {
  hero: {
    title: "Our Weekend",
    image: "/images/milea-3.jpg",
  },
  banner: {
    body: "We’re looking forward to spending the weekend together. Below is the schedule for our wedding weekend, with details on timing, locations, and what’s planned each day.",
  },
  sections: [
    {
      heading: "Welcome Party",
      // body: "Kick off the weekend with drinks and mingling as we welcome everyone to Rhinebeck.",
      image: "/images/proposal-1.jpg",
      pos: "bottom center",
      color: "color-white",
      details: [
        {
          icon: "location_on",
          text: [
            "Beekman Arms, The Wayfarer Room",
            "6387 Mill Street, Rhinebeck, NY 12572",
          ],
        },
        { icon: "schedule", text: ["Friday August 28, 8:00-10:00pm"] },
        { icon: "apparel", text: "Cocktail Attire" },
      ],
    },
    {
      heading: "Ceremony & Reception",
      // body: "An outdoor ceremony overlooking the vineyard followed by dinner, drinks and dancing to celebrate.",
      image: "/images/proposal-2.jpg",
      pos: "bottom center",
      color: "color-primary-dark",
      reverse: true,
      details: [
        {
          icon: "location_on",
          text: [
            "Milea Estate Vineyard",
            "450 Hollow Road, Staatsburg, NY 12580",
          ],
        },
        { icon: "schedule", text: ["Saturday August 29", "4:00pm - 11:00pm"] },
        {
          icon: "directions_bus",
          text: [
            "Shuttle from Beekman Arms & Delamater Inn, 3:15pm",
            "Shuttle from Mirbeau Inn & Spa, 3:30pm",
          ],
        },
        { icon: "apparel", text: "Formal Attire" },
      ],
    },
    {
      heading: "After Party",
      // body: "For anyone who wants to keep the night going, join us afterward for late-night drinks and snacks.",
      image: "/images/proposal-3.jpg",
      color: "color-white",
      pos: "60% 30%",
      details: [
        {
          icon: "location_on",
          text: ["The American Legion", "6361 Mill St, Rhinebeck, NY 12572"],
        },
        { icon: "schedule", text: ["Saturday August 29, 11:00pm-2:00am"] },
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
