import React from 'react';
import { MdAdd } from 'react-icons/md';

import { 
  Container,
  TextInputContainer, 
  TextInput,
  AddButton,
  ErrorMessage,
} from '../../styles/components/InputBar';

export interface InputBarProps {
  buttonProps: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  textInputProps: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
  errorMessage?: string;
}

const InputBar: React.FC<InputBarProps> = ({
  buttonProps,
  textInputProps,
  errorMessage
}) => {
  return( 
    <Container>
      <TextInputContainer>
        <TextInput 
          type="text" 
          placeholder="Qual é a sua próxima tarefa?"
          {...textInputProps as any}  
        />
        <AddButton {...buttonProps as any} >
          <MdAdd size={24} color="#fff" />
        </AddButton>
      </TextInputContainer>
      {
        errorMessage && (
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>
        )
      }
    </Container>
  );
}

export default InputBar;