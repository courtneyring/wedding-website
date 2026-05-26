import { sendButtonEvent } from "../utils/analytics";
const devBuild = !!process.env.NEXT_PUBLIC_DEVELOPMENT;
console.log(`https://courtneyandmatt${devBuild  ? 'TEST' : ''}.rsvpify.com/embed`)
export default {
  hero: {
    title: "RSVP",
    backgroundImage: "/images/background.jpg",
    pos: "center 25%",
  },
  rsvp: {
    embedUrl: `https://courtneyandmatt${devBuild ? 'TEST' : ''}.rsvpify.com/embed`,
  },
};
