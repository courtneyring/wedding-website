export default {
  hero: {
    title: [<span>Courtney</span>, <span>&nbsp;&&nbsp;</span>, <span>Matt</span>],
    subtitle: [<p>Milea Estate Vineyard</p>, <p>Staatsburg, NY</p>],
    eyebrow: "August 29, 2026",
    image: "/images/hero.jpg",
  },
  note: {
    salutation: "A Note from the",
    from: "Future Haberlachs",
    body: [
      "As we approach our wedding day, we can’t tell you how excited we are to share this important day with you. Each of you has played a role in our journey and we feel incredibly lucky to be surrounded by people who have helped us grow as individuals and as a couple. Having you with us to mark this milestone makes it all the more meaningful.",
      "Whether you’re coming from down the street or across the world, we appreciate you taking the time to be with us. We can’t wait to see you, share in the joy of the day, and create memories together that we will cherish forever.",
    ],
    close: "With Love,",
    signature: "Courtney & Matt",
  },
  weekend: {
    title: "Our Weekend",
    image: "/images/paracas-image.jpg",
    sections: [
      {
        header: "Welcome Party",
        description:
          "Wedding  activities will be centered around the historical town of Rhinebeck, NY. While we love the small town vibe.",
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
        header: "Ceremony & Reception",
        description:
          "Wedding  activities will be centered around the historical town of Rhinebeck, NY. While we love the small town vibe.",
        details: [
          {
            icon: "location_on",
            text: [
              "Milea Estate Vineyard",
              "450 Hollow Road", "Staatsburg, NY 12580",
            ],
          },
          { icon: "schedule", text: ["Saturday August 29", "Time TBA"] },
        ],
      },
      {
        header: "After Party",
        description:
          "Wedding  activities will be centered around the historical town of Rhinebeck, NY. While we love the small town vibe.",
        details: [
          {
            icon: "location_on",
            text: ["American Legion", "6361 Mill St", "Rhinebeck, NY 12572"],
          },
          { icon: "schedule", text: ["Friday August 29", "Time TBA"] },
        ],
      },
    ],
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
  imageTextPlanning: {
    header: "Travel & Accommodations",
    reverse: true,
    body: "We’ve put together a few helpful details on travel and accommodations. Everything you need to plan your trip is included in the pages below.",
    image: "/images/paracas-image.jpg",
    primaryCta: {
      variation: "color-primary-dark",
      children: "View Hotels",
      href: "/accommodations",
    },
    secondaryCta: {
      variation: "color-primary-dark",
      children: "Travel Info",
      href: "/travel",
      hollow: true,
      // variation: 'link'
    },
  },
};
