import api from "./index";

export const sendInbox = (payload) => {
  return api.post("/api/inbox", payload);
};
