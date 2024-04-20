import './pagestyles.css'

export const Experience = () => {
    return (
        <div className=" to-slate-950 rounded-xl border border-slate-800 bg-gradient-to-r from-slate-900 px-8 py-10 shadow-2xl text-left max-w-4xl w-full max-h-[700px] overflow-y-auto">
            <ol className=" relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2023 - Present</time>
                    <div className={"flex space-x-1 items-baseline"}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Android Developer Researcher,</h3>
                        <p className="text-md font-normal italic text-gray-900 dark:text-gray-300">U.C. Irvine School of Medicine</p>
                    </div>
                    <p className=" font-normal text-gray-500 dark:text-gray-400">Worked on a machine-learning based Android app which identifies eyedrop medication labels using object detection and text recognition.</p>
                    <p className=" font-normal text-gray-500 dark:text-gray-400">Wrote methods to extract expiration date from medicine bottles and wrote utility methods to store and retrieve JSON parsed data in internal storage.</p>
                    <p className=" font-bold text-gray-500 dark:text-gray-400 language-gradient">Android Studio, Java, Kotlin, ML Kit, Gson, Mobile Dev</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023 - January 2024</time>
                    <div className={"flex space-x-1 items-baseline"}>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Engineer Intern,</h3>
                        <p className="text-md font-normal italic text-gray-900 dark:text-gray-300">NeuroLeap Corp.</p>
                    </div>
                    <p className=" font-normal text-gray-500 dark:text-gray-400">Developed API endpoints for the company main site in a REST architecture for email transactions and user information changes, utilizing JWT authentication.</p>
                    <p className=" font-normal text-gray-500 dark:text-gray-400">Wrote several HTML templates for email transactions and conducted API/Db testing.</p>
                    <p className=" font-bold text-gray-500 dark:text-gray-400 language-gradient">VSCode, Golang, Vue, Javascript, PostgresQL, Postman, Web Dev</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                    <div className={"flex space-x-1 items-baseline"}>
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Air Quality Info iOS App</h3>
                        <p className="text-md font-normal italic text-gray-900 dark:text-gray-300">Hackathon</p>
                    </div>
                    <p>Private Repo </p>
                    <p className="font-bold text-gray-500 dark:text-gray-400 language-gradient">
                        Xcode, Swift, SwiftUI
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022</time>
                    <div className={"flex space-x-1 items-baseline"}>
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Pomopal Chrome Extension</h3>
                        <p className="text-md font-normal italic text-gray-900 dark:text-gray-300">Hackathon</p>
                    </div>
                    <a href="https://github.com/00raymond/pomopal" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">Repo Link</a>
                    <p className="font-bold text-gray-500 dark:text-gray-400 language-gradient">
                        Javascript, HTML, CSS
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2021</time>
                    <div className={"flex space-x-1 items-baseline"}>
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Enrolled in B.S. Software Engineering</h3>
                        <p className="text-md font-normal italic text-gray-900 dark:text-gray-300"></p>
                    </div>
                    <p className=" font-bold text-gray-500 dark:text-gray-400 language-gradient">GPA: 3.8</p>
                </li>
            </ol>
        </div>
        )
}