import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;

  form {
    width: 100%
  }
`;

export const TaskList = styled.div`
  margin-top: 10px;
  width: 100%;

  & > div {
    margin-bottom: 10px;
  }
`;

export const SortButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 0 0 15px 0;

  button {
    margin-right: 10px;
  }
`

export const SortButton = styled.button`
  background-color:  #086AD8;
  color: white;
  
  border-radius: 4px;
  border: none;

  padding: 5px;

`;