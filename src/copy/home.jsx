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
  },
  note: {
    salutation: "A Note from the",
    from: "Future Haberlachs",
    body: [
      "Our story started four years ago in a bar in downtown Manhattan. We drank, and flirted, and made plans for the next date. We've come a long way since that day... five international trips, one typical NYC high-stress move-in, multiple trips home that ___something about family____, 3 years in banking (if you know you know), one national championship that divided our house, ___________, and countless regular nights in that ______. Tying the knot feels like both a long time coming and something we can hardly believe is finally here.",
      "With the weddng day getting closer, we can’t tell you how excited we are to have everyone come together to celebrate with us on our special day! We feel incredibly lucky to be surrounded by amazing poeple.",
      "Whether you’re coming from down the street, across the country, or around the world, we appreciate you taking the time to be with us. We can’t wait to see you, share in the joy of the day, and create memories together that we will cherish forever.",
    ],
    close: "With Love,",
    signature: "Courtney & Matt",
  },
  imageScroller: {
    images: [
      '/images/egypt.jpg',
      '/images/europe.jpg',
      '/images/peru.jpg',
      '/images/florida.jpg'
    ]
  },
  weekend: {
    title: "Our Weekend",
    image: "/images/milea-2.png",
    sections: [
      {
        header: "Welcome Party",
        description:
          "Kick off the weekend with drinks and light desserts as we welcome everyone to Rhinebeck.",
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
          "An outdoor ceremony overlooking the vineyard followed by dinner, drinks and dancing to celebrate.",
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
        header: "After Party",
        description:
          "For anyone who wants to keep the night going, join us afterward for late-night drinks and dancing.",
        details: [
          {
            icon: "location_on",
            text: ["American Legion", "6361 Mill St", "Rhinebeck, NY 12572"],
          },
          { icon: "schedule", text: ["Saturday August 29", "Time TBA"] },
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
