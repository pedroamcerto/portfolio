import {
    VerticalTimeline,
    VerticalTimelineElement
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWorkOutline } from "react-icons/md";
import { experiences } from "../data/experience"


function About() {
    return ( 
        <div className='bg-[#262626] mt-[4rem] pb-16 font-raleway'>
            <div className="pt-24 w-2/3 mx-auto">
                <div>
                    <h1 className="text-left text-white text-4xl">Quem sou eu.</h1>

                    <div className="mt-12">
                        <p className="text-white text-xl ">
                            Olá, eu sou <span class="text-purple-500">Pedro</span>, um entusiasta da tecnologia que trabalha como assistente de TI na <span class="text-purple-500">TIVIT</span>, uma multinacional brasileira, focado em desenvolvimento de software e arquitetura de sistemas.<br/><br/> Tenho experiência em <span class="text-purple-500">computação em nuvem</span>, com certificações em <span class="text-purple-500">AWS</span> e <span class="text-purple-500">Azure</span>, e me orgulho de participar de projetos envolvendo <span class="text-purple-500">inteligência artificial</span>, como provas de conceito para soluções de reconhecimento de objetos e análise de documentos, utilizando tecnologias como <span class="text-purple-500">AWS Rekognition</span> e <span class="text-purple-500">Azure Document Intelligence</span>.<br/><br/> Além de me envolver no desenvolvimento de sistemas, estou imerso no estudo e na prática de <span class="text-purple-500">arquitetura de software</span>, orientado por mentores excepcionais. Essa colaboração aprimora minha capacidade de identificar as necessidades dos clientes e entregar soluções personalizadas.<br/><br/> Essa jornada de aprendizado contínuo me motiva a elevar constantemente minhas habilidades e competências como desenvolvedor, proporcionando uma <span class="text-purple-500">experiência de usuário</span> excepcional para as aplicações que criamos. Sou apaixonado por <span class="text-purple-500">desenvolvimento de software</span> e <span class="text-purple-500">resolução de problemas</span>, e é essa paixão que me impulsiona a explorar novos horizontes no mundo da tecnologia. Vamos embarcar nessa jornada juntos!
                        </p>

                    </div>
                </div>

                <div className="pt-32">
                    <h1 className="text-left text-white text-4xl pb-12">Experiência.</h1>

                    <VerticalTimeline className="">
                        {
                            experiences.map(experience => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: "#a855f7", color: "#fff" }}
                                    contentArrowStyle={{ borderRight: "7px solid  #a855f7" }}
                                    date={experience.date}
                                    iconStyle={{ background: "#a855f7", color: "#fff" }}
                                    icon={<MdOutlineWorkOutline />}
                                    >
                                    <h3 className="vertical-timeline-element-title">{experience.role}</h3>
                                    <h4 className="vertical-timeline-element-subtitle">{experience.location} | {experience.company} | {experience.duration} </h4>
                                    <p>
                                        {experience.activities}
                                    </p>
                                </VerticalTimelineElement>
                                )
                            )
                        }


                    </VerticalTimeline>
                </div>
            </div>
      
        </div>
     );
}

export default About;