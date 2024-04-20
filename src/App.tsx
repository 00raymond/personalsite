import './App.css';
import {Nameplate} from "./pages/nameplate";
import {useState} from "react";
import {SlidingTabBar} from "./Slider";
import {Experience} from "./pages/Experience";
import {Projects} from "./pages/Projects";

function App() {

    const [tabIndex, setTabIndex] = useState<number>(0);

    const tabContents = [
        <Nameplate />,
        <Experience />,
        <Projects />,
        <div>Skills Content Here</div>
    ];

        return (
            <div className="App bg-black grid-background w-screen h-screen">
                <div className={"flex items-center relative top-16"}>
                    <SlidingTabBar activeTabIndex={tabIndex} setActiveTabIndex={setTabIndex} />
                </div>
                <div className={"flex text-white justify-center items-center relative top-28"}>
                    {tabContents[tabIndex]}
                </div>
            </div>
        );
    }
    export default App;