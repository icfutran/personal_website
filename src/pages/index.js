import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout.js";
import ita_lathe from "../images/ita_lathe.png";
import { AiFillLinkedin, AiFillCheckCircle } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import "./index.css";

const IndexPage = () => {
  const [copied, setCopied] = useState(false);

  function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 500);
  }
  return (
    <Layout>
      <div class="home-container">
        <div class="home-left">
          <h1>ITA FUTRAN</h1>
          <h2>MECHANICAL ENGINEER</h2>
          <h3>HUMAN INTERACTION ROBOTICS</h3>
          <h3>BIOMECHANICS</h3>
          <h3>BIOMIMICRY</h3>
          <div class="contact-stack">
            <AiFillLinkedin
              onClick={() => {
                window.open("https://www.linkedin.com/in/ita-futran");
              }}
              class="contact-icon"
            />
            {!copied ? (
              <HiMail
                onClick={() => {
                  navigator.clipboard.writeText("icfutran@mit.edu");
                  setCopied(true);
                  resetCopied();
                }}
                class="contact-icon"
              />
            ) : (
              <AiFillCheckCircle class="contact-icon" />
            )}
          </div>
        </div>
        <div class="home-right">
          <img src={ita_lathe} alt=""></img>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
