import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ecom from "../../Assets/Projects/ecom.png";
import bit from "../../Assets/Projects/bit.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1> 
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Building an AI-Powered 3D Website with React"
              description="An AI-powered 3D platform to design using ML and beyond"
              ghLink="https://github.com/biswajeet6/3D"
              demoLink="https://subtle-cascaron-eb9640.netlify.app" 
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Blockchain-Based Decentralized Application"
              description=
              "Building a Blockchain-Based Decentralized Application (DApp) with Solidity and Smart Contracts using ReactJs "
              ghLink="https://github.com/biswajeet6/metaMask"
              demoLink="https://644e8779cbc6c463561d0e14--majestic-naiad-268008.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/biswajeet6/chat_me"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Spotify Clone"
              description="Develop a Spotify clone using React and the Spotify Web API, allowing users to search for and play songs, create playlists, and access their Spotify account."
              ghLink="https://github.com/biswajeet6/Spotify-clone"
              demoLink="https://luminous-gecko-e85d2e.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Sorting visualiser Dashboard"
              description="React Sorting Visualiser Dashboard is a web application that provides a visual representation of various sorting algorithms such as bubble sort, insertion sort, quicksort, etc. to help users understand how they work.              "
              ghLink="https://github.com/biswajeet6/Sorting-Visualiser"
              demoLink="https://gilded-pasca-9741f8.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Admin Dashboard using React"
              description="Developed and built a fully functional admin dashboard using ReactJs, that gathers data from backend and displays graphs"
              ghLink="https://github.com/biswajeet6/AdminFin_me"
              demoLink="https://classy-gaufre-1ccb3c.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecommerce Site"
              description="Built An ecommerce site from scratch using ReactJS"
              ghLink="https://github.com/biswajeet6/Ecommerce-site"
              demoLink="https://verdant-froyo-fe26a0.netlify.app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bit}
              isBlog={false}
              title="Candy Crush Game"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/biswajeet6/Candy-Crush"
              demoLink="https://tangerine-palmier-de827f.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
