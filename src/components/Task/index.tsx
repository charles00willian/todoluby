import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { 
  Container,
  Description 
} from '../../styles/components/Task';

export interface TaskProps {
  checked?: boolean;
  description: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Task: React.FC<TaskProps> = ({
  checked,
  description,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      {checked ? <MdCheckBox size={22} /> : <MdCheckBoxOutlineBlank size={22}/>}
      <Description>
        {description}
      </Description>
    </Container>
  );
}

export default Task;