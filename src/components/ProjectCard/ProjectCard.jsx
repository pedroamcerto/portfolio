import { Link } from "react-router-dom";


function ProjectCard({ projects }) {
    return ( 
        <div className="container flex flex-wrap gap-12 justify-center mx-auto font-raleway">
            {
                projects.map(project => (
                        <div className="w-96 h-min border py-6 border-blue-50 rounded-lg">
                            <div className="w-11/12 mx-auto">
                                <img src={project.img} alt="Imagem do projeto" />
                            </div>
                            <div className="px-4">
                                <h2 className="text-white text-2xl pt-6">{project.name}</h2>
                                <p className="text-white text-lg pt-2">{project.description}</p>

                                <div className="w-full flex justify-between pt-3 pb-6">
                                    <Link className="bg-purple-500 border rounded-lg px-4 py-1 w-[48%] inline-block text-center text-white" to={project.github_link} target="_blank">
                                        Github
                                    </Link>

                                    <Link to={project.deploy} className="bg-purple-500 border rounded-lg px-4 py-1 w-[48%] inline-block text-center text-white" target="_blank">
                                        Deploy
                                    </Link>
                                </div>

                                <Link to={`/project/${project.id}`} className="underline text-white">Mais detalhes</Link>
                            </div>
                        </div>
                    )
                )
            }


        </div>
     );
}

export default ProjectCard;