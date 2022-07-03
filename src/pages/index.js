import * as React from "react";
import Layout from "../components/Layout/Layout";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Timeline from "../images/timeline.png";
import Button from "../components/Button/Button";
import { StaticImage } from "gatsby-plugin-image";

import Violet from "../images/violet.jpg";
import Azur from "../images/azur.jpg";
import BlueRaspberry from "../images/blueraspberry.jpg";
import Grandeur from "../images/grandeur.jpg";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Home - Victoire Beaufils</title>
      <div className="row align-items-center about-section">
        <div className="col about">
          <h1 id="about"> ABOUT </h1>
          <p> Senior in Computer Science, Purdue University</p>
          <p>
            Fan of real-world applications of CS, especially if related to
            health, brain sciences, education, the environment or web services.
            Rock Climber and BCI enthusiast.
          </p>
        </div>
        <div className="col-md-3 picture">
          <StaticImage
            class="img-fluid"
            src="../images/portrait.png"
            layout="constrained"
            quality="100"
            height="150"
          ></StaticImage>
        </div>
      </div>
      <div class="timeline">
        <StaticImage
          class="img-fluid"
          src="../images/timeline.png"
          layout="constrained"
        />
      </div>
      <div class="projects">
        <h1 id="projects"> PROJECTS </h1>
        <ProjectCard
          name="BCI DASHBOARD"
          tech="React, Jest, Socket.IO, SASS"
          description="BCI Dashboard aims at organizing and facilitating the access and utilization of EEG recordings, providing an all-in-one platform hosting experiments and recordings on the cloud, as well as ensuring device connection and readiness"
          date="May 2022 - Present"
          github="https://github.com/neurotechpurdue/bci-dashboard-client"
          image={Violet}
        ></ProjectCard>
        <ProjectCard
          image={BlueRaspberry}
          name="TRACKWRAPPED"
          tech="MongoDB, Docker, React, Express, Go, React Testing, D3.js, TailwindCSS, AWS S3, Auth0"
          description="TrackWrapped helps users plan their routines by allowing them to schedule events, record journal entries, track various metrics and compiles all information for the users to view in interactive ways.
        "
          date="Jan - May 2022"
          demo="https://track-wrapped.vercel.app/"
          right
        ></ProjectCard>
        <ProjectCard
          image={Azur}
          name="TRAVELING MERCHANT"
          tech="MongoDB, React, Express, Node.js, Bootstrap"
          description="A hub for any sales gone virtual, Traveling Merchant is a virtual resale platform geared at handling trading logistics and payment options for the gaming industry."
          date="Sept - Dec 2021"
          github="https://github.com/NicholasDullam/traveling_merchant"
          demo="https://bit.ly/travelingmerchant"
        ></ProjectCard>
        <ProjectCard
          image={Grandeur}
          name="SAVE MY WALLET"
          tech="SQL, Python, Flask"
          description="a grocery store budgeting website that allows people to log in, set a monthly budget, add items to their cart, and purchase them."
          date="Sept - Dec 2021"
          right
          github="https://github.com/allygilbert/cs348-savemywallet"
        ></ProjectCard>
      </div>
    </Layout>
  );
};

export default IndexPage;
