import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;
const FormText = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  resize: none;

  &:focus {
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  padding: 0 16px;
  height: 2.25rem;
  border: none;
  border-radius: 18px;
  background-color: #f2f2f2;
  cursor: pointer;
`;

function CommentForm() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledForm>
      <FormText rows="1" onSelect={() => setIsOpen(true)}></FormText>

      {isOpen && (
        <ButtonGroup>
          <Button onClick={() => setIsOpen(false)}>取消</Button>
          <Button>留言</Button>
        </ButtonGroup>
      )}
    </StyledForm>
  );
}

export default CommentForm;
