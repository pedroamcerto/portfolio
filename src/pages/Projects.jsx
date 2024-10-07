import Project from "./Project";
import {projects} from "../data/projects"

function Projects() {
    return ( 
        <div className='bg-[#262626] mt-[4rem] pb-16'>
            <div className="pt-24">
               <h1 className="text-center text-white text-4xl">Meus projetos</h1>

               <div className="pt-24">
                    <Project projects={projects}/>
               </div>
            </div>
        </div>
     );
}

export default Projects;