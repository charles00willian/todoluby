import styled from 'styled-components';

export const Container = styled.div``;

export const TextInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin: 5px 0;
`;

export const TextInput = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 5px 0px 0px 5px;
  border-color: #eee;
  border-width: 1px;
`;

export const AddButton = styled.button`
  background-color: #086AD8;
  border: none;
  border-radius:  0px 5px 5px 0px ;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-self: stretch; */
`;

export const ErrorMessage = styled.span`
  color: #f23838;
  margin-top: 5px;
`;