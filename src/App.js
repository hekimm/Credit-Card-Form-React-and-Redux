import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import CardForm from "./components/CardForm/CardForm";
import { useSelector } from "react-redux";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

function HomePage() {
  const cardDetails = useSelector((state) => state.card.details);

  return (
    <HomePageContainer>
      <CardForm />
      <Card details={cardDetails} />
    </HomePageContainer>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* If the "/card" route is desired to be used in the future
        <Route path="/card" element={<Card />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
