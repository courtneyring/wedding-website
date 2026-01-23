export default {
  hero: {
    title: "Where to Stay",
    image: "/images/background.jpg",
  },
  banner: {
    body: "Our wedding weekend will take place in the historic town of Rhinebeck, New York. Known for its charming shops, excellent restaurants, and rich history, Rhinebeck offers a warm and walkable setting for the celebration. The welcome party, wedding shuttles, and after-party are all within easy walking distance, so we recommend choosing accommodations in town if possible.",
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
      cta: { children: "Book Your Stay" },
    },
    {
      heading: "Mirbeau Inn & Spa",
      body: "Mirbeau Inn & Spa Rhinebeck is one of our favorite spots, inspired by a French country estate with a peaceful, elegant atmosphere. The rooms are thoughtfully designed and the on-site spa makes it a perfect place to unwind. We don’t have a room block, but we’ll be staying at Mirbeau ourselves and would love it if some of you join us there.",
      image: "/images/mirbeau.jpg",
      color: "color-white",
      cta: {
        varation: "primaryDark",
        children: "Book Your Stay",
        href: "https://book.onagilysys.com/onecart/wbe/room/2230/rhinebeck-mirbeau/2026-08-28/2026-08-30/RBROOM/2",
      },
      overlay: {
        header: "A Note on the Beekman",
        body: [
          "Each room is a little different so take a look at the room types to see some pictures and where they are located.",
          "When you are ready to book, use the link below or enter the group code with August 28-30 selected: HOWAR260828-151430",
          "No matter how many are staying in your room, please select 1 Adult. The software engineer bride is trying to find humor in these fun quirks…",
        ],
        primaryCta: {
          varation: "primaryDark",
          children: "Book Your Stay",
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
      color: "color-white",
      reverse: true,
    },
  ],
  bookYourStay: {
    header: "Plan Your Route",
    cta: {
      label: "See Travel Info",
      href: "/accommodations",
    },
  },
};