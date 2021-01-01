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
