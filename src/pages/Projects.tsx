import interpreter1 from '../assets/projects/interpreter1.png';
import interpreter2 from '../assets/projects/interpreter2.png';
import flexecute1 from '../assets/projects/flexecute1.png';
import wpmapp1 from '../assets/projects/wpmapp1.png';
import wpmapp2 from '../assets/wpmapp2.png';
import personal1 from '../assets/projects/personal1.png'
import './pagestyles.css';
import {useState} from "react";

export const Projects = () => {

    const [hovering, setHovering] = useState("")

    const handleHover = (name: string) => {
        setHovering(name)
    }

    const handleLeave = () => {
        setHovering("")
    }

    return (
        <>
            <div className=" to-slate-950 rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-10 shadow-2xl text-left max-w-6xl w-full max-h-[700px] overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/speedcodesite", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                onMouseEnter={() => handleHover("wpmapp")}
                                onMouseLeave={() => handleLeave()}
                            >
                                <img src={wpmapp1} alt="wpmapp1"  className={`${hovering === "wpmapp" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} h-60 transition-all duration-200  w-80 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>RapidLabs Speed Coding</p>
                            <p className={"language-gradient font-bold"}>React, Node, Tailwind, Express</p>
                        </button>
                        <p className={"text-gray-300"}>Race to complete a randomly generated coding challenge in Java, Python, or C#. Users press Run Code to compile/interpret their language through Docker containers. </p>
                        <p>domain/demo soon</p>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/interpreter-w-java", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("interpreter")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <img src={interpreter1} alt="interpreter1"  className={`${hovering == "interpreter" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  h-60 w-80 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Java-based Interpreter</p>
                            <p className={"language-gradient font-bold"}>Java, Intellij IDEA</p>
                        </button>
                        <p className={"text-gray-300"}>Interpreter for a context-free grammar. Interpreter divided into a tokenizer, recursive-descent parser, and file reader. </p>
                        <p>SSA compiler soon</p>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                onClick={() => window.open("https://github.com/00raymond/interpreter-w-java", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("website")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <img src={personal1} alt="website1"  className={`${hovering === "website" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  w-80 h-60 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Personal Website</p>
                            <p className={"language-gradient font-bold"}>React, Tailwind, TS</p>
                        </button>
                        <p className={"text-gray-300"}>Personal website highlighting my skills and experience. Developed with React & Typescript and styled using Tailwind CSS. </p>
                        <a href={"raymondhouse.net"} target={"_blank"} className={"underline"} rel="noreferrer">raymondhouse.net</a>
                    </div>
                    <div>
                        <button className={"text-xl"}
                                // onClick={() => window.open("https://github.com/00raymond/interpreter-w-java", "_blank")}
                        >
                            <div className={"relative w-full h-full"}
                                 onMouseEnter={() => handleHover("flexecute")}
                                 onMouseLeave={() => handleLeave()}
                            >
                                <img src={flexecute1} alt="flexecute"  className={`${hovering === "flexecute" ? 'scale-105 opacity-50' : 'scale-100 opacity-100'} transition-all duration-200  w-80 h-60 rounded-xl shadow-lg border-2 border-slate-800 `}/>
                                <div className={"absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200"}>
                                    <svg className="w-24 h-24 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M10 5a2 2 0 0 0-2 2v3h2.4A7.48 7.48 0 0 0 8 15.5a7.48 7.48 0 0 0 2.4 5.5H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1V7a4 4 0 1 1 8 0v1.15a7.446 7.446 0 0 0-1.943.685A.999.999 0 0 1 12 8.5V7a2 2 0 0 0-2-2Z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M10 15.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Zm6.5-1.5a1 1 0 1 0-2 0v1.5a1 1 0 0 0 .293.707l1 1a1 1 0 0 0 1.414-1.414l-.707-.707V14Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            <p className={"font-bold mt-2"}>Flexecute Fitness Analyzer</p>
                            <p className={"language-gradient font-bold"}>React, Node, Tensorflow, Tailwind</p>
                        </button>
                        <p className={"text-gray-300"}>Machine learning based fitness tracking website made to simplify the meal prep and routine selection process. Model for suggestions developed with Tensorflow, website built in React/Node. </p>
                        <p>demo soon</p>
                    </div>
                </div>
            </div>
        </>
    )
}