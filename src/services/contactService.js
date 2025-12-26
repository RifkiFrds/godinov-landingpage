import api from "../api";

export const sendInbox = (payload) => {
  return api.post("/inbox", payload);
};
