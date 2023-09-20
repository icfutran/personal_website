import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout.js";
import ita_lathe from "../images/ita_lathe.png";
import { AiFillLinkedin } from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import "./index.css";

const IndexPage = () => {
  const [copied, setCopied] = useState(false);
  const [hoverMail, setHoverMail] = useState(false);

  function resetCopied() {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }
  return (
    <Layout>
      <div class="home-container">
        <div class="home-left">
          <h1>ITA FUTRAN</h1>
          <h3>MECHANICAL ENGINEER</h3>
          <h4>HUMAN INTERACTION ROBOTICS</h4>
          <h4>BIOMECHANICS</h4>
          <h4>BIOMIMICRY</h4>
          <div class="contact-stack">
            <a
              href="https://www.linkedin.com/in/ita-futran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin class="contact-icon" />
            </a>
            {!copied ? (
              <div class="mail">
                {hoverMail && (
                  <div class="copy-to-clipboard">copy to clipboard</div>
                )}
                <HiMail
                  onClick={() => {
                    navigator.clipboard.writeText("icfutran@mit.edu");
                    setCopied(true);
                    resetCopied();
                  }}
                  onMouseEnter={() => setHoverMail(true)}
                  onMouseLeave={() => setHoverMail(false)}
                  class="contact-icon"
                />
              </div>
            ) : (
              <div class="mail">
                <div class="copied">copied</div>
                <HiMail class="contact-icon" />
              </div>
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
