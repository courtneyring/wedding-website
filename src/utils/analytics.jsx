"use client";

import { sendGAEvent } from "@next/third-parties/google";

export const sendEvent = ({ eventName, value }) => {
  sendGAEvent("event", eventName, { buttonValue: value });
};

export const sendButtonEvent = (value) => {
  sendEvent({ eventName: "buttonClicked", value });
};
