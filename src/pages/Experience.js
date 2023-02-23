import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Centro Educacional São Francisco, Conceição de Macabu, Rio de Janeiro
          </h3>
          <p> Diploma do Ensino Médio</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Em Andamento"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          FeMASS, Macaé, Rio de Janeiro
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          Diploma de Bacharel
          </h4>

          <p> Sistemas de Informação</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor IA - FeMASS 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Macaé, RJ
          </h4>
          <p>
            Atuei como bolsista em um projeto para desenvolvedor uma Rede Neural Artificial na FeMASS.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - Em Andamento"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Desenvolvedor Full Stack - UFRJ
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Macaé, RJ
          </h4>
          <p>Atuo como bolsista em um projeto de programação Web na UFRJ</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
