import React from "react";
import Main from "../../components/Main";
import Hero from "./container/Hero";
import Articles from "./container/Articles";

const Home = () => {
  return (
    <div>
      <Main>
        <Hero />
        <Articles />
      </Main>
    </div>
  );
};

export default Home;
