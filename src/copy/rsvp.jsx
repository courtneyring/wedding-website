import { sendButtonEvent } from "../utils/analytics";
const env = process.env.NODE_ENV;
export default {
  hero: {
    title: "RSVP",
    backgroundImage: "/images/background.jpg",
    pos: "center 25%",
  },
  rsvp: {
    embedUrl: `https://courtneyandmatt${env === 'development' ? 'TEST' : ''}.rsvpify.com/embed`,
  },
};
