import { Button } from "@courtneyring/components-library";

export default {
  hero: {
    title: "Transport",
    image: "/images/jeans-walking.jpg",
    pos: "30% 40%",
  },
  intro: {
    body: "The wedding is centered around the historic town of Rhinebeck, NY. Both the Welcome Party and After Party are within walking distance of both hotels. See the map below for a complete view of where everything is located.",
  },
  map: {
    apiKey: "AIzaSyCkAJKloWlkFDkfCmnLLd8ow9g9aNpCoZM",
    mapId: "1fc04759703419fa713ac7b0",
    defaultZoom: 17,
    defaultCenter: { lat: 41.926582, lng: -73.913629 },
    markers: [
      {
        position: { lat: 41.926198, lng: -73.914473 },
        dialogPos: "below",
        label: "Mirbeau Hotel",
      },
      {
        position: { lat: 41.926563, lng: -73.912937 },
        dialogPos: "above",
        label: (
          <span>
            Beekman/Delamater
            <br />
            Check-In
          </span>
        ),
      },
      {
        position: { lat: 41.928588, lng: -73.913948 },
        dialogPos: "above",
        label: "Shuttle Pick Up / Drop Off",
      },
      {
        position: { lat: 41.926198, lng: -73.914454 },
        dialogPos: "above",
        label: "Shuttle Pick Up / Drop Off",
      },
      {
        position: { lat: 41.926537, lng: -73.912902 },
        dialogPos: "below",
        label: (
          <span>
            Wayfarer Room
            <br />
            Welcome Party
          </span>
        ),
      },
      {
        position: { lat: 41.924898, lng: -73.912578 },
        dialogPos: "below",
        label: (
          <span>
            American Legion
            <br />
            After Party
          </span>
        ),
      },
      {
        position: { lat: 41.928388, lng: -73.914032 },
        dialogPos: "below",
        label: "Delamater Inn Buildings",
      },
      {
        position: { lat: 41.920952, lng: -73.951202 },
        dialogPos: "below",
        label: (
          <span>
            Closest
            <br />
            Amtrak Stop
          </span>
        ),
      },
      {
        position: { lat: 41.706972, lng: -73.937449 },
        dialogPos: "below",
        label: (
          <span>
            Closest Metro
            <br />
            North Stop
          </span>
        ),
      },
      {
        position: { lat: 41.838552, lng: -73.85124 },
        dialogPos: "below",
        label: "Milea Estate Vineyard",
      },
    ],
    cta: {
      label: "Open in Google Maps",
      variation: "color-primary-dark",
      href: "https://www.google.com/maps/d/u/0/edit?mid=175LH_3TJu9WN6xGGBzyzP2rTn0Y-mNw&usp=sharing",
      target: "_blank",
    },
  },
  shuttle: {
    toMilea: {
      reverse: true,
      // header: "Shuttle",
      image: "/images/milea-tasting-room.jpeg",
      schedule: {
        header: "Rhinebeck to Milea",
        slots: [
          {
            time: "TBA",
            description: "Depart from Mirbeau Inn & Spa",
          },
          {
            time: "TBA",
            description: "Depart from Delamater Inn",
          },
          {
            time: "4:00pm",
            description: "Arrive at Milea Estate Vineyard",
          },
        ],
      }
     
    },
    fromMilea: {
      image: "/images/rhinebeck-aerial.jpg",
      schedule: {
        header: "Milea to Rhinebeck",
        slots: [
          {
            time: "10:30pm",
            description: "Depart from Milea Estate Vineyard",
          },
          {
            time: "11:00pm",
            description: "Arrive at American Legion After Pary",
          },
          {
            time: "11:05pm",
            description: "Arrive at Mirbeau Inn & Spa",
          },
          {
            time: "11:05pm",
            description: "Arrive at Beekman Arms & Delamater Inn",
          },
        ],
      }
      
    },
  },
  car: {
    header: "Car & Cab",
    direction: "horizontal",
    promos: [
      {
        header: "Driving to the ceremony",
        body: "Please plan to arrive at the ceremony at 4:00pm, driveway traffic will be limited starting at 4:15pm.",
        icon: "road",
        color: "color-white",
        cta: {
          label: "Get Directions",
          variation: "link",
          icon: "east",
          target: "_blank",
          href: "https://www.google.com/maps/dir/?api=1&destination=450+Hollow+Road+Staatsburg,+NY+12580&travelmode=driving&destination_place_id=ChIJxU9oCmMT3YkRzwlWWXDipH4",
          onClick: () => sendButtonEvent("car-directions"),
        },
      },
      {
        header: "Parking",
        body: "There will be parking at both hotels as well as the vineyard. ",
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
          target: "_blank",
          href: "https://www.google.com/maps/@41.8888116,-73.8882651,13.42z/data=!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D",
          onClick: () => sendButtonEvent("car-traffic"),
        },
      },
      {
        header: "Cabs and RideShare",
        body: "Cabs and ride share are limited in this area. We recommend scheduling in advance to avoid long wait times.",
        icon: "local_taxi",
        color: "color-white",
      },
    ],
  },
  planYourStay: {
    header: "Plan Your Stay",

    ctas: [
      {
        variation: "color-white",
        children: "Schedule",
        href: "/schedule",
        onClick: () => sendButtonEvent("navigate-rsvp"),
      },
      {
        variation: "color-white",
        hollow: true,
        children: "Hotels",
        href: "/accommodations",
        onClick: () => sendButtonEvent("navigate-registry"),
      },
    ],
  },
};
