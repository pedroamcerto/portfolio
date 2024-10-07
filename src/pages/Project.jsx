import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects"

function Project() {
    const {id} =  useParams()

    const project = projects.filter(project => project.id = id)[0]

    return (
        <div className='bg-[#262626] mt-[4rem] pb-16 font-raleway md:h-screen'>

            <div className="py-0 pl-36 pt-12">
                <Link to="/projects" className="text-white">href="../projects"</Link> {/* Proposital hehe :) */}
            </div>

            <div className="container mx-auto pt-20">
                <h1 className="text-center text-white text-4xl pb-24">{project.name}</h1>

                <div className="flex flex-wrap gap-6">
                    <div className="w-[47%]">
                        <img src={project.img} alt="Imagem do projeto"/>
                    </div>
                    <div className="w-[47%]">
                        <div className="">
                            <p className="text-white">
                                {project.detailed_description}
                            </p>
                        </div>

                        <div>
                            <p className="text-white py-4">
                                Tecnologias: {project.technologies.join(", ")}
                            </p>
                        </div>

                        <div className="w-full flex justify-between pt-3 pb-6">
                            <Link className="bg-purple-500 border rounded-lg px-4 py-1 w-[48%] inline-block text-center text-white" to={project.github_link} target="_blank">
                                Github
                            </Link>

                            <Link to={project.deploy} className="bg-purple-500 border rounded-lg px-4 py-1 w-[48%] inline-block text-center text-white" target="_blank">
                                Deploy
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Project;