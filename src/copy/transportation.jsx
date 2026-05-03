import { Button } from "@courtneyring/components-library";

export default {
  hero: {
    title: "Transport",
    image: "/images/travel-hero.jpg",
  },

  shuttle: {
    imageText: {
      header: "Shuttle",
      // body: "Another big hub with lots of flight options, but expect more crowds and traffic. Offers trains via NJ Transit that can be used to connect to NY Transit",
      image: "/images/travel-hero.jpg",
    },
    toMilea: {
      header: "Rhinebeck to Milea",
      slots: [
        {
          time: "3:15pm",
          description: "Depart from Mirbeau Inn & Spa",
        },
        {
          time: "3:30pm",
          description: "Depart from Delamater Inn",
        },
        {
          time: "4:00pm",
          description: "Arrive at Milea Estate Vineyard",
        },
      ],
    },
    fromMilea: {
      header: "Milea to Rhinebeck",
      slots: [
        {
          time: "11:00pm",
          description: "Depart from Milea Estate Vineyard",
        },
        {
          time: "11:20pm",
          description: "Arrive at American Legion After Pary",
        },
        {
          time: "11:25pm",
          description: "Arrive at Mirbeau Inn & Spa",
        },
        {
          time: "11:25pm",
          description: "Arrive at Beekman Arms & Delamater Inn",
        },
      ],
    },
  },
  car: {
    header: "Car & Cab",
    direction: "horizontal",
    promos: [
      {
        header: "Driving to the ceremony",
        body: "Please plan to arrive at the ceremony at 4:00pm. The driveway will close at 4:10pm.",
        icon: "road",
        color: "color-white",
        cta: {
          label: "Get Directions",
          variation: "link",
          icon: "east",
          href: "https://www.mta.info/agency/metro-north-railroad",
          onClick: () => sendButtonEvent("car-directions"),
        },
      },
      {
        header: "Parking",
        body: "There will be parking at both hotels as well as the ceremony venue. ",
        icon: "local_parking",
        color: "color-white",
      },
      {
        header: "Traffic",
        body: "This is a busy time of year for Rhinebeck and the surrounding cities. Please plan for traffic.",
        icon: "traffic_jam",
        color: "color-white",
        cta: {
          label: "Check the Traffic",
          variation: "link",
          icon: "east",
          href: "https://www.mta.info/agency/metro-north-railroad",
          onClick: () => sendButtonEvent("car-directions"),
        },
      },
      {
        header: "Cabs and RideShare",
        body: "Cabs and ride share are limited in this area. We recommend scheduling in advance to avoid long wait times.",
        icon: "local_taxi",
        color: "color-white",
        cta: {
          label: "Get Directions",
          variation: "link",
          icon: "east",
          href: "https://www.mta.info/agency/metro-north-railroad",
          onClick: () => sendButtonEvent("car-directions"),
        },
      },
    ],
  },
};
