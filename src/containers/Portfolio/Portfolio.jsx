import React from "react";
import "./Portfolio.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../projects.json";
import trackImage from "../../assets/thumbnails/comicBookFinder.png";
import seniorImage from "../../assets/portfolio-images/Senior-Travel-Covid-Care.gif";
import quizImage from "../../assets/portfolio-images/CodingQuiz.png";
import passwordImage from "../../assets/portfolio-images/Password-Generator.gif";

function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h1>Portfolio</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[6].id}
            key={projects[6].id}
            name={projects[6].name}
            image={projects[6].image}
            alt={projects[6].alt}
            description={projects[6].description}
            link={projects[6].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[7].id}
            key={projects[7].id}
            name={projects[7].name}
            image={projects[7].image}
            alt={projects[7].alt}
            description={projects[7].description}
            link={projects[7].link}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[0].id}
            key={projects[0].id}
            name={projects[0].name}
            image={trackImage}
            alt={projects[0].alt}
            description={projects[0].description}
            link={projects[0].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[1].id}
            key={projects[1].id}
            name={projects[1].name}
            image={seniorImage}
            alt={projects[1].alt}
            description={projects[1].description}
            link={projects[1].link}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[2].id}
            key={projects[2].id}
            name={projects[2].name}
            image={projects[2].image}
            alt={projects[2].alt}
            description={projects[2].description}
            link={projects[2].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[3].id}
            key={projects[3].id}
            name={projects[3].name}
            image={quizImage}
            alt={projects[3].alt}
            description={projects[3].description}
            link={projects[3].link}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ProjectCard
            id={projects[4].id}
            key={projects[4].id}
            name={projects[4].name}
            image={passwordImage}
            alt={projects[4].alt}
            description={projects[4].description}
            link={projects[4].link}
          />
        </div>
        <div className="col-sm-6">
          <ProjectCard
            id={projects[5].id}
            key={projects[5].id}
            name={projects[5].name}
            image={projects[5].image}
            alt={projects[5].alt}
            description={projects[5].description}
            link={projects[5].link}
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
