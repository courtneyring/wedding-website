import { Button } from "@courtneyring/components-library";

export default {
  hero: {
    title: "Getting There & Around",
    image: "/images/travel-hero.jpg",
  },
  banner: {
    body: "This page has all the essential information for getting to Rhinebeck and getting around during the weekend. We’ve included details for airports, driving, and local transportation to make planning your trip easier.",
  },
  air: {
    header: "By Air",
    promos: [
      {
        header: "Stewart International",
        body: "This airport is the easiest way to get to Rhinebeck — small, quiet, and closer than most other options.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "SWF" },
          { icon: "location_on", text: "Newburgh, NY" },
          { icon: "timeline", text: "60 miles" },
        ],
      },
      {
        header: "Albany international",
        body: "Roughly an hour’s drive from Rhinebeck, Albany International is a straightforward option for getting to Hudson Valley.",
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
        body: "Around 1 hour 45 minutes to 2 hours away, Bradley offers flights from a number of major cities.",
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
        body: "Best choice for international flights with lots of nonstop options. Offers easy connections to trains directly from the airport.",
        color: "color-white",
        stats: [
          { icon: "label_important", text: "JFK" },
          { icon: "location_on", text: "Queens, NY" },
          { icon: "timeline", text: "105-110 miles" },
        ],
      },
      {
        header: "Newark Liberty International",
        body: "Another big hub with lots of flight options, but expect more crowds and traffic. Offers trains via NJ Transit that can be used to connect to NY Transit",
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
    header: "By Road",
    blocks: [
      {
        header: "A General Note",
        description:
          "Although Rhinebeck is a small town, August is a very busy time of year for the area. Be sure to plan ahead and allow extra time for traffic. If you’re driving to the vineyard, please note that the driveway will close 10 minutes before the ceremony begins.",
      },
      {
        header: "Cars",
        description:
          "Rhinebeck is within easy driving distance of several regional airports, with travel times ranging from about 45 minutes to three hours depending on traffic. Once you arrive, there is plenty of parking both in town and at the wedding venue.",
      },
      {
        header: "Cabs & Rideshare",
        description:
          "Rideshare is available, though limited in this area. Drivers may be coming from a distance. To avoid delays, we recommend booking your Uber or Lyft ahead of time.",

        details: [
          {
            icon: "phone",
            text: "Available One Taxi",
            href: "tel:8452245316",
          },
          {
            icon: "phone",
            text: " Nick's Rhinecliff Taxi",
            href: "tel:8455512243",
          },
        ],
      },
      // {
      //   header: "Cabs",
      //   description: [
      //     "Cabs are an option as well, though drivers often come from farther away. Here are a few companies you can reach out to if you need a ride. ",
      //   ],
      // },
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
          onClick: () => sendButtonEvent("trains-mta"),
        },
      },
      {
        body: "Amtrak is available from multiple cities including Albany and NYC. The closest stop is Rhinecliff and it's about a 5 minute car ride from there.",
        image: "/images/amtrak-logo.png",
        textAlign: "center",
        cta: {
          label: "Visit Amtrak Site",
          variation: "link",
          icon: "east",
          href: "https://www.amtrak.com/home",
          onClick: () => sendButtonEvent("trains-amtrak"),
        },
      },
    ],
  },
  bookYourStay: {
    header: "Book Your Stay",
    ctas: [{
      label: "See Hotels",
      href: "/accommodations",
      onClick: () => sendButtonEvent("navigate-accommodations"),
    }],
  },
};
