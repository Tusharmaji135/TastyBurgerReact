import React from "react";
import Layout from "../../components/layouts/Layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <div id="home">
          <Section1 />
        </div>
        {/* Home Section About */}
        <div id="about">
          <Section2 />
        </div>
        {/* Home Section Menu */}
        <div id="menu">
          <Section3 />
        </div>
        {/* Home Section Promotion */}
        <div id="promotion">
          <Section4 />
        </div>
        {/* Home Section Shop */}
        <div id="shop">
          <Section5 />
        </div>
        {/* Home Section Blog */}
        <div id="blog">
          <Section6 />
        </div>
        {/* Home Section Contact */}
        <div id="contact">
          <Section7 />
        </div>
      </Layout>
    </>
  );
}

export default Home;
