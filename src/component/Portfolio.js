import React from 'react'
import H1 from './H1'
import ProjectList from './ProjectList'
import { project } from '../constants'
import { styles } from '../styles'

function Portfolio() {
  return (
    <div className=" w-screen container mx-auto">
        <H1 id="project" className={styles.sectionHeadText}>
          My Project
        </H1>
        <ProjectList
          next={"back"}
          nexthref={"/"}
          icon={"fa-solid fa-arrow-left"}
          anime={"left"}
          data={project.filter((item) => item.name != "")}
        />
      </div>
  )
}

export default Portfolio
