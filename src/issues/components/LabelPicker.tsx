import { useQuery } from "@tanstack/react-query"
import {gitHubApi} from '../../api/gitHubApi'
import { Label } from '../interfaces/label';
const getLabels = async():Promise<Label[]> => {
  const { data } = await gitHubApi.get<Label[]>('/labels');
  console.log(data);
  return data;
}



export const LabelPicker = () => {

  const labelsQuery = useQuery(
    ['labels'],
    getLabels,
    {
      refetchOnWindowFocus:false
    }
  )
  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
