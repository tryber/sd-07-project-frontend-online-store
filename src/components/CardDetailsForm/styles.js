import styled from 'styled-components';

export const CardDetailsFormContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  max-width: 720px;
  width: 100%;
`;

export const CardDetailsFormContent = styled.div``;

export const CardDetailsFormTitle = styled.h2``;

export const Form = styled.form`
  border-radius: 10px;
  box-shadow: 0 0 5px 1px gray;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
`;

export const EmailInput = styled.input`
  border-radius: 5px;
  font-size: 16px;
  line-height: 35px;
  width: 78%;
`;

export const ComentInput = styled.textarea`
  border-radius: 5px;
  height: 100px;
  margin-top: 5px;
  width: 97%;
`;

export const SelectInput = styled.select`
  font-size: 20px;
  font-weight: bold;
  margin-left: 1%;
  width: 18%;
`;

export const ButtonSubmit = styled.button`
  background-color: forestgreen;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 30px;
  margin-top: 5px;
  width: 300px;
`;

export const Comments = styled.div`
  box-shadow: 0 0 3px 1px gray;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  padding: 10px;
`;

export const Comment = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  + div {
    border-top: 1px solid gray;
  }
`;

export const Email = styled.h4``;

export const Evaluation = styled.span`
  margin-left: 20px;
`;

export const Message = styled.p`
  width: 100%;
`;
