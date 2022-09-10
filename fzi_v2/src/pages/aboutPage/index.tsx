import React from "react";
import Navbar from "../../components/molecules/navbar";
import Footer from "../../components/organisms/footer";
import Header from "../../components/organisms/header";

function About() {
  return (
    <>
      <Navbar />
      <div style={{ margin: "5em" }}>
        <h3>About us</h3>
      </div>
      <Footer />
    </>
  );
}

export default About;
