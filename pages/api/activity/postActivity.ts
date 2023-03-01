import client from "../client";
import { useQuery } from "@tanstack/react-query";

export const postActivity = async (
  activity: string,
  date: string,
  duration: number,
  notes: string
) => {
  return await client.post(`/activity`, {
    activity,
    date,
    duration,
    notes,
  });
};

export const usePostActivity = (
  activity: string,
  date: string,
  duration: number,
  notes: string
) =>
  useQuery({
    queryKey: ["activity"],
    queryFn: () => postActivity(activity, date, duration, notes),
  });
