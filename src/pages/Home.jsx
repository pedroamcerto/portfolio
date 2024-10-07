import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import desenho from "../assets/images/desenho.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Home() {
    const [ text ] = useTypewriter({
        words: ['Fullstack Developer.', "AWS Architect", "AI Enthusiast"], 
        loop: true,                        
    });

    return (
        <div className='bg-[#262626] mt-[4rem] pb-16'>
            <div className='container mx-auto'>
                <section className='pt-36 px-12'>
                    <div className='flex items-center justify-center flex-wrap gap-12 md:gap-0'>
                        <div className="w-full md:w-2/3 flex flex-col items-center">
                            <div className='w-3/4'>
                                <h1 className='text-4xl font-raleway text-white'>
                                    Hi there! 
                                    <span className="animate-wiggle-more animate-infinite animate-duration-1000 animate-delay-[600ms] w-min inline-block">
                                        👋🏻
                                    </span>
                                </h1>
                                <h2 className='text-4xl md:text-6xl text-white'>I'm Pedro Certo.</h2>
                                <div>
                                    <p className='text-white text-3xl md:text-4xl'>
                                        <span className='text-purple-500'>{text}</span> <Cursor/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/3'>
                            <img src={desenho} alt="Imagem de desenho do Pedro Certo" className='h-m'/>
                        </div>
                    </div>
                </section>
                <section className='pt-28 md:pt-72 px-12'>
                    <h1 className='text-white text-4xl'>Deixe-me me <span className='text-purple-500'>apresentar.</span></h1>

                    <div className='mt-12'>
                        <p className='text-xl text-white'>
                            Me apaixonei por tecnologia desde pequeno, e, desde então, sempre busquei <span className='text-purple-500'>aprender mais</span> sobre. <br/><br/>
                            As linguagens em que sou mais fluente são <span className='text-purple-500'>Python, Java e Javascript.</span> <br /><br />
                            As áreas que hoje eu mais me interesso incluem <span className='text-purple-500'>arquitetura de soluções e machine learning.</span> <br /> <br />
                            Sempre que posso, <span className="text-purple-500">me divirto</span> construindo soluções IOT em casa, usando placas controladoras, sensores e atuadores.

                        </p>
                    </div>
                </section>
                <section className='pt-24 px-12'>
                    <div>
                        <h1 className='text-center text-4xl text-white'>Me encontre aqui!</h1>
                        <h3 className='text-center text-xl text-white'>Sinta-se livre para se <span className='text-purple-500'>conectar</span></h3>
                        <div className='flex gap-6 items-center justify-center mt-12'>
                            <Link to="https://github.com/pedroamcerto" target="_blank" className="text-white text-center text-5xl">
                                <FaGithub />    
                            </Link>
                            <Link to="https://linkedin.com/in/pedro-certo" target="_blank" className="text-white text-center text-5xl">
                                <FaLinkedin />    
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
