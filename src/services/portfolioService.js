import api from "../api";

export const fetchPortfolios = async () => {
  const res = await api.get("/portfolio");
  return res.data.data;
};
