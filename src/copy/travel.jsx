export default {
  hero: {
    title: "Travel",
    image: "/images/background.jpg",
  },
  banner: {
    body: "Wedding  activities will be centered around the historical town of Rhinebeck, NY. While we love the small town vibe, it does make accommodations limited.We strongly recommend you book your stay as early as possible.",
  },
  air: {
    header: "By Air",
    promos: [
      {
        header: "Stewart International",
        body: "The easiest airport for getting to Rhinebeck if you can swing it. Smaller, quieter, and way less hectic than the NYC airports.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "SWF" },
          { icon: "location_on", text: "Newburgh, NY" },
          { icon: "timeline", text: "60 miles" },
        ],
      },
      {
        header: "Albany international",
        body: "A solid, no-stress option with plenty of flight choices. Lots of people use this airport when heading to the Hudson Valley.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "ALB" },
          { icon: "location_on", text: "Albany, NY" },
          { icon: "timeline", text: "50-60 miles" },
        ],
      },
      {
        header: "Westchester County",
        body: "A smaller airport that’s easy to get in and out of. Feels much calmer than flying straight into New York City.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "HPN" },
          { icon: "location_on", text: "White Plains, NY" },
          { icon: "timeline", text: "70-80 miles" },
        ],
      },
      {
        header: "Bradley International",
        body: "The easiest airport for getting to Rhinebeck if you can swing it. Smaller, quieter, and way less hectic than the NYC airports.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "BDL" },
          { icon: "location_on", text: "Hartford, CT" },
          { icon: "timeline", text: "80-90 miles" },
        ],
      },
      {
        header: "New York Laguardia",
        body: "Works well for domestic flights but comes with classic New York busyness. Best if you’re also planning to spend some time in the city.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "LGA" },
          { icon: "location_on", text: "Queens, NY" },
          { icon: "timeline", text: "100 miles" },
        ],
      },
      {
        header: "John F Kennedy International",
        body: "Best choice for international flights with lots of nonstop options. It’s busy, but hard to beat for global connections.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "JFK" },
          { icon: "location_on", text: "Queens, NY" },
          { icon: "timeline", text: "105-110 miles" },
        ],
      },
      {
        header: "Newark Liberty International",
        body: "Another big hub with lots of flight options. Convenient for nonstop routes, but expect a more crowded experience.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "EWR" },
          { icon: "location_on", text: "Newark, NJ" },
          { icon: "timeline", text: "120 miles" },
        ],
      },
    ],
  },
  road: {
    title: "By Road",
    image: "/images/milea-2.png",
    sections: [
      {
        header: "Cars",
        description:
          "Rhinebeck is within easy driving distance of several regional airports, ranging from about 45 minutes to three hours depending on where you’re coming from and traffic conditions. Once you arrive, there is plenty of parking both in town and at the wedding venue. If you choose to drive to the ceremony, plan for traffic and leave with plenty of time as the driveway into the vineyard will be closed 10 minutes before the ceremony starts. ",
      },
      {
        header: "Shuttle",
        description:
          "There will be a shuttle provided both from Rhinebeck to Milea, as well as from Milea back to Rhinebeck after the reception ends. ",
      },
      {
        header: "Rideshare",
        description:
          "Rideshare is available, but limited in this area. Drivers often come from a distance and there will be traffic. We recommend you schedule your ubers and lyfts ahead of time to make sure they arrive on time.",
      },
      {
        header: "Cabs",
        description:
          "Cabs are also an option in this area, but they will also be coming from a distance. The following are a couple companies you can call if you need to get around. ",
      },
    ],
  },
  tracks: {
    header: "By Tracks",
    promos: [
      {
        body: "Metro North is available from both Albany and NYC. The closest stop is Poughkeepsie and it's about a 20 minute car ride from there.",
        image: "/images/mta-logo.png",
        textAlign: "center",
        cta: {
          label: "Visit Metro North Site",
          variation: "link",
          icon: "east",
          href: "https://www.mta.info/agency/metro-north-railroad",
        },
      },
      {
        body: "Amtrak is available from multiple cities including Albany and NYC airports. The closest stop is Rhinecliff and it's about a 5 minute car ride from there.",
        image: "/images/amtrak-logo.png",
        textAlign: "center",
        cta: {
          label: "Visit Amtrak Site",
          variation: "link",
          icon: "east",
          href: "https://www.amtrak.com/home",
        },
      },
    ],
  },
  bookYourStay: {
    header: "Book Your Stay",
    cta: {
      label: "See Hotels",
      href: "/accommodations",
    },
  },
};
