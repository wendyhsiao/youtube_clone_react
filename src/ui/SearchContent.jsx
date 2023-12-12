import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SearchIcon from '../assets/icons/search.svg?react';

const Form = styled.form`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  overflow: hidden;
`;

const Input = styled.input`
  height: 100%;
  padding: 3px 12px;
  border: none;
  outline-width: 0px;
`;

const Button = styled.button`
  width: 64px;
  height: 100%;
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background-color: #f8f8f8;
`;

function SearchContent() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate({
      pathname: '/results',
      search: `${createSearchParams({ search_query: query })}`,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="搜尋" onChange={(e) => setQuery(e.target.value)} />
      <Button>
        <SearchIcon />
      </Button>
    </Form>
  );
}

export default SearchContent;
