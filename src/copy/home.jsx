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
      "Our story started four years ago in a bar in downtown Manhattan. We drank and flirted and made plans for the next date. We've come a long way since that day. A first date turned into a relationship followed by many nights out that brought us closer. It included dinners with friends and trips home to visit family, gradually turning each other’s circles into ours. Along the way, we squeezed in five international trips, three years in banking (if you know you know), one typical NYC high-stress move-in, a national championship that divided our household and countless ordinary nights that somehow became our favorite ones. Tying the knot feels like both a long time coming and something we can hardly believe is finally here.",
      "The part we’re looking forward to most is celebrating with our friends and family. Whether you’re coming from down the street, across the country, or around the world, we appreciate you taking the time to be with us. We hope you have as much fun during the weekend as we will — we can’t wait to see you!",
    ],
    close: "With Love,",
    signature: "Courtney & Matt",
  },
  imageScroller: {
    center: {
      src: "/images/proposal.jpg",
      position: "center bottom",
      speed: 0.8,
      style: { top: "60%", left: "5%", width: 350 },
    },
    images: [
      {
        src: "/images/machupichu.jpg",
        position: "35% 35%",
        speed: 0.8,
        style: { top: "60%", left: "5%", width: 350 },
      },
      {
        src: "/images/stamford.jpg",
        position: "45% 30%",
        // size: "160%",
        speed: 0.5,
        style: { top: "70%", left: "20%", width: 350 },
      },
      {
        src: "/images/bikes.jpg",
        position: "35% 50%",
        speed: 1.2,
        style: { top: "40%", left: "50%", width: 350 },
      },
      {
        src: "/images/florida.jpg",
        position: "34% 45%",
        speed: 0.4,
        style: { top: "30%", left: "30%", width: 350 },
      },
      {
        src: "/images/egypt.jpg",
        speed: 0.5,
        style: { top: "20%", left: "6%", width: 350 },
      },
      {
        src: "/images/europe.jpg",
        position: "85% center",
        speed: 0.1,
        style: { top: "10%", left: "70%", width: 350 },
      },
      {
        src: "/images/f12.jpg",
        position: "left 65%",
        speed: 0.1,
        style: { top: "5%", left: "80%", width: 350 },
      },
      {
        src: "/images/wedding.jpg",
        position: "35% center",
        speed: 1,
        style: { top: "90%", left: "90%", width: 350 },
      },
    ],
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
