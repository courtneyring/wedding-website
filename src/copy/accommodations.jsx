export default {
  hero: {
    title: "Where to Stay",
    image: "/images/accommodations-hero.jpg",
  },
  banner: {
    body: "Our wedding weekend will be centered in the historic town of Rhinebeck, New York. It's a small town with lots of shops and restaurants to check out. The welcome party, wedding shuttles, and after-party are all within easy walking distance, so we recommend choosing accommodations in town if possible.",
  },
  list: {
    items: [
      {
        header: "Rhinebeck is where most wedding activities will take place.",
        body: "The welcome party, bridal party accommodations, and after party will all be located in Rhinebeck. Finding accommodations in the town will make everything walkable.",
      },
      {
        header: "Rideshare is limited in this area.",
        body: "We recommend you schedule ahead or call a taxi service. Drivers may be coming from a distance and run into traffic.",
      },
      {
        header: "The Duchess County Fair will be taking place in Rhinebeck.",
        body: "Expect heavy traffic and plan extra time. We recommend you stay on the east side of the river to avoid the heavily congested Kingston-Rhinecliff bridge.",
      },
    ],
    icon: "checkmark",
  },
  fifties: [
    {
      heading: "Beekman Arms Delamater Inn",
      body: "Beekman Arms Delamater Inn is a historic property made up of several distinct buildings, each offering its own character and atmosphere. With a range of room styles across the inn, it’s a great option for guests looking for classic charm and variety in their stay.",
      image: "/images/beekman-arms.jpg",
      reverse: true,
      color: "color-neutral-light",
      ctas: [
        { children: "Book Online" },
        {
          varation: "primaryDark",
          hollow: true,
          children: "Call the Hotel",
          href: "tel:8458767077",
        },
      ],
    },
    {
      heading: "Mirbeau Inn & Spa",
      body: "Mirbeau Inn & Spa Rhinebeck is a Parisian-style boutique hotel with a spa and restaurant on site, making it a great option for a more relaxing and luxurious stay. While there is no room block, the bride and groom will be staying at Mirbeau and would love for guests to join them there.",
      image: "/images/mirbeau.jpg",
      color: "color-white",
      ctas: [
        {
          varation: "primaryDark",
          children: "Book Online",
          href: "https://book.onagilysys.com/onecart/wbe/room/2230/rhinebeck-mirbeau/2026-08-28/2026-08-30/RBROOM/2",
        },
        {
          varation: "primaryDark",
          children: "Call the Hotel",
          hollow: true,
          href: "tel:8776472328",
        },
      ],
      overlay: {
        header: "A Note on the Beekman",
        body: [
          "Each room is a little different so take a look at the room types to see some pictures and where they are located.",
          "When you are ready to book, use the link below or enter the group code with August 28-30 selected: HOWAR260828-151430",
          <p>
            <strong>
              No matter how many are staying in your room, please select
              1&nbsp;Adult.
            </strong>
            <br />
            <small>
              The software engineer bride is trying to find humor in these fun
              quirks…
            </small>
          </p>,
        ],
        primaryCta: {
          varation: "primaryDark",
          children: "Continue to Book",
          href: "https://beekmandelamaterinn.ibe.stayntouch.com/search-results?checkin=08-28-2026&checkout=08-30-2026&adults=1&kids=0&groupCode=HOWAR260828-151430",
        },
        secondaryCta: {
          varation: "primaryDark",
          children: "See Room Types",
          href: "https://www.beekmandelamaterinn.com/accommodations",
          hollow: true,
        },
      },
    },
    {
      heading: "Other Options",
      body: "There are a few bed & breakfast options, as well as apartments through Airbnb. If you prefer to do one of these, we recommend you finding one in town to make your weekend as smooth as possible.",
      image: "/images/gables.jpg",
      color: "color-neutral-light",
      reverse: true,
    },
  ],
  bookYourStay: {
    header: "Plan Your Route",
    cta: {
      label: "See Travel Info",
      href: "/travel",
    },
  },
};
