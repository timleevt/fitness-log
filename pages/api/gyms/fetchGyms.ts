import client from "../client";
import { useQuery } from "@tanstack/react-query";

type Gym = {
  id: number;
  name: string;
  notes: string;
  location: string;
  type: string;
  website: string;
};

const fetchGyms = async () => {
  return await client.get<Gym[]>(`/gyms`);
};

export const useFetchGyms = () =>
  useQuery({
    queryKey: ["gyms"],
    queryFn: () => fetchGyms(),
  });
