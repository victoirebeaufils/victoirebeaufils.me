import { Link } from "gatsby";
import React from "react";
import "./ProjectCard.css";
import Button from "../Button/Button";
import { AiFillGithub, AiOutlineRightCircle } from "react-icons/ai";

const ProjectCard = (props) => {
  return (
    <div className="project-card row">
      <div
        style={
          props.right
            ? { display: "flex", flexDirection: "row-reverse" }
            : { display: "flex", flexDirection: "row" }
        }
      >
        <div
          class="col image"
          width="100%"
          style={
            props.right
              ? { marginLeft: "20px", backgroundImage: `url(${props.image})` }
              : { marginRight: "20px", backgroundImage: `url(${props.image})` }
          }
        ></div>

        <div class="col">
          <h2>{props.name}</h2>
          <p style={{ color: "#E49494" }}>{props.date}</p>
          <p>[{props.tech}]</p>
          <p>{props.description}</p>
          {props.github && (
            <Button
              link={props.github}
              color="white"
              bgcolor="hsl(202, 100%, 1%)"
            >
              Github{" "}
              <AiFillGithub
                color="white
   "
              />
            </Button>
          )}
          {props.demo && (
            <Button
              bgcolor="hsl(227, 76%, 63%)"
              color="white"
              link={props.demo}
            >
              {" "}
              Demo <AiOutlineRightCircle></AiOutlineRightCircle>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
