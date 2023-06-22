import React from "react";
import styled from "styled-components";
import Recommendations from "./Recommendations";
import NewToDisney from "./NewToDisney";
import Originals from "./Originals";
import Trending from "./Trending";

const Search = () => {
  return (
    <Container>
      <SearchBox type="text" placeholder="Movies, shows and more" />
      <h3>Popular Searches</h3>
      <Recommendations />
      <NewToDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const SearchBox = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #252932;
  font-size: 20px;
  transition: border-color 0.3s ease-in-out;
  background-color: #252932;
  width: 100%;
  margin-top: 30px;
  height: 6vh;
  color: white;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 2px rgba(249, 249, 249, 0.8);
  }
`;

export default Search;
