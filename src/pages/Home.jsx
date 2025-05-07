import Header from "../components/Header";
import TutoriasBox from "../components/Tutoriasbox";
import "../assets/css/home.css";    
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <TutoriasBox/>
        </div>
    )
}

export default Home