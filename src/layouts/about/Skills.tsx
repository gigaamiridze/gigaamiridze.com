import React from "react";
import { skills } from "../../data";
import { SkillsList } from "../../components";

function Skills() {
  return (
    <SkillsList>
      {skills.map((item) => {
        const { id, skillsList } = item;

        return (
          <ul key={id}>
            {skillsList.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )
      })}
    </SkillsList>
  )
}

export default Skills;