import { useQuery } from "@tanstack/react-query";
import { gitHubApi } from "../../api/gitHubApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

const getLabels = async():Promise<Label[]> => {
    await sleep(2);
    const { data } = await gitHubApi.get<Label[]>('/labels');
    console.log(data);
   
    return data;
  }
export const useLabels = () => {

    const labelsQuery = useQuery(
        ['labels'],
        getLabels,
        {
          refetchOnWindowFocus:false,
          staleTime:1000*60*60,
        }
      )
  return labelsQuery;
}
