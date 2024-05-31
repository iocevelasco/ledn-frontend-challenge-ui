import axios from "axios";
import { QueryFunctionContext, useQuery } from 'react-query';
import { Planet } from "utils/types";

async function fetchPlanetList() {
  const response = await axios.get("/api/planets");
  return response.data;
}

async function fetchPlanetDetail({ queryKey }: QueryFunctionContext) {
  const [, id] = queryKey;
  const response = await axios.get(`/api/planets/${id}`);
  return response.data;
}


export function usePlanetList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["planets"],
    queryFn: fetchPlanetList,
  });

  return { data: data?.planets, isLoading, isError } as { data: Planet[] | undefined, isLoading: boolean, isError: boolean };
}

export function usePlanetDetail(id: string) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["planets", id],
    queryFn: fetchPlanetDetail,
  });

  return { data: data?.planet, isLoading, isError } as { data: Planet | undefined, isLoading: boolean, isError: boolean };
}

