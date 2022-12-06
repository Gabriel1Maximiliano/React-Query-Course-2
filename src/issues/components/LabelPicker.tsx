
import { LoadingIcon } from "../../sheared/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";
import { Label } from '../interfaces/label';
import { FC } from 'react';

interface Props {
  selectedLabel:string[]
  onChange: ( labelName: string )=>void;
}


export const LabelPicker:FC<Props> = ({ selectedLabel,onChange }) => {

const labelsQuery = useLabels();

if(labelsQuery.isLoading ){
 return ( < LoadingIcon /> );
}
  return (
    <>
    {
      labelsQuery.data?.map( label=>(
        
          <span 
          onClick={ () => onChange( label.name ) }
          key={label.id}
          className={`badge rounded-pill m-1 label-picker${ selectedLabel.includes(label.name) ? 'label-active' : ''}`}
          style={{ border: `1px solid #${ label.color }`, color: `#${ label.color }` }}
      >
          { label.name }      </span>
      ) )
    }
       
        
    </>
  )
}
