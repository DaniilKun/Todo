import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const TaskContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background: #f9f9f9;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
`;

export const BtnsGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Sort = styled.form`
display: flex;
gap: 10px;
margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > div {
    animation: fadeIn 0.3s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const EmptyMessage = styled.p`
text-align: center;
font-size: 18px;
color: #888;
animation: fadeIn 0.5s ease-in-out;
`;