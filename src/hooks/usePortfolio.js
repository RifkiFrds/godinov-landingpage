import { useQuery } from "@tanstack/react-query";
import { fetchPortfolios } from "../services/portfolioService";

export function usePortfolio() {
  return useQuery({
    queryKey: ["portfolios"],
    queryFn: fetchPortfolios,
    select: (data) =>
      data.map((item) => ({
        title: item.title,
        description: item.description,
        images: item.image_url,       
        link: item.link_projects,     
      })),
  });
}
