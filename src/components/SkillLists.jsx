import {useState, useEffect} from "react";
function SkillLists(){
   const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
  <ul class="skills-list"> 
    {skills.map((skill, index) => ( 
      <li key={index}>{skill}</li> 
    ))} 
    </ul>
    )

}
export default SkillLists