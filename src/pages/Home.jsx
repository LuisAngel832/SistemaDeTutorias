import Header from "../components/Header";
import TutoriasBox from "../components/tutoriasbox";
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