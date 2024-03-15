import { SIDEBAR_LINK_PROPS } from "../../..";

export const SIDEBAR_LINK: SIDEBAR_LINK_PROPS[] = [
  { HOME: "/" },
  { MINISTERS: "/ministers", hasChild: true },
  { "HOTEL RESERVATION": "/hotel_Reservation" },
  { "INFO DESK": "/info/faq" },
  { TESTIMONIES: "/testimonies" },
  { "LIVE BROADCAST": "/broadcast", hasChild: true },
];

export const SUB_LINK = {
  MINISTERS: { "Minister 1": "/", "Minister 2": "/", "Minister 3": "/" },
  "LIVE BROADCAST": { YouTube: "/", Facebook: "/", Twitter: "/" },
};
