import React, { useState } from 'react'
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Location = ({ country, countrynm, getCovid }) => {
  const [query, setQuery] = useState("");
  const [inputMode, setInputMode] = useState(false);
  if (inputMode) {
    return (
      <Container>
        <FormElement
          onSubmit={e => {
            e.preventDefault();
            getCovid(query);

          }}>
          <InputField
            required
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <CancelButton onClick={() => setInputMode(false)}>X</CancelButton>
        </FormElement>
      </Container>
    );
  }
  return (
    <Container>
      <City onClick={() => setInputMode(true)}>{countrynm}</City>
      <Country>{country}</Country>
    </Container>
  );
}
export default Location;

const FormElement = styled.form`
display:flex;
position:relative;
background:blueviolet;
` ;
const InputField = styled.input`
padding:4px;
width:50px;
background:transparent;
&:focus{
  outline:0;
}
`;
const SearchButton = styled.button`
padding :4px;
background:blue;
border-top-right-radius:5px;
border-bottom-right-radius:5px;
color:white;
border:none;`;

const CancelButton = styled.span`
position: absolute;
background:pink;
cursor: pointer;
width:20px;
height:20px;
border-radius:50%;
top:-5px;
right:-8px;

`;
const Container = styled.div`
      text-align:center;
    `
const City = styled.h1`
font-family: 'Merriweather',sans-serif;
  font-size: 1.6rem;
  position: relative;
  cursor: pointer;
  &:hover {
      top:-5px
  }
`

const Country = styled.h3`
    font-family: 'Fira Sans',sans-serif;
   font-size: 1.1rem;
    `