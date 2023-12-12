import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";
import Navbar from "../Shared/Navbar/Navbar";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeBanner></HomeBanner>
            {/* Skills */}
            <Skills></Skills>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;