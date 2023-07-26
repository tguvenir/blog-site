import React from "react";
import Main from "../../components/Main";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const Home = () => {
  return (
    <div>
      <Main>
        <Hero />
        <Articles />
        <CTA />
      </Main>
    </div>
  );
};

export default Home;
