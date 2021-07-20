import React from "react";
import { Slide } from "react-awesome-reveal";
import { RoadmapProps } from "./types";
import { RoadMapSection } from "./styles";
import "./roadmap.css"
import Milestone from "./Milestone";
import { SvgIcon } from "../../common/SvgIcon";

const RoadMap = (props: RoadmapProps) => {
  return (
    <RoadMapSection id="roadmap">
      <Slide direction="up">
        <div className="D(f) Jc(c)">
        <h6 className="roadmap-title">{props.title}</h6>
        </div>
      </Slide>
      <section className="timeline">
        <ul>
          {props.milestones.map((mileStone, index) => <Milestone key={index + "-milstrone-"}>
            <div className="box">
              <div className="our-services settings">
                <div className="icon">
                  <SvgIcon src={mileStone.img} width={"55px"} height={"55px"} />
                </div>
                <h4>PHASE {index + 1}</h4>
                <p>{mileStone.text.map((content, idx) => <span key={idx+"mlt"} style={content[1] ? content[1] : {}}>{content[0]}</span>)}</p>
              </div>
            </div>
          </Milestone>
          )}
        </ul >
      </section >
    </RoadMapSection>
  )
};

export default RoadMap;