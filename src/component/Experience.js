import React from "react";
import H1 from "./H1";
import ExperienceCard from "./ExperienceCard";
import { data } from "../constants";
import { styles } from "../styles";

function Experience() {
  return (
    <div className="my-5 min-h-screen">
      <H1 fade="right" className={styles.sectionHeadText + " pb-24"}>
        Experience
      </H1>
      {data.experience.thai.map((item,index) => {
        console.log(index);
        return <ExperienceCard fade={(index%2)==0?"left":"right"}>{item}</ExperienceCard>;
      })}
    </div>
  );
}

export default Experience;
