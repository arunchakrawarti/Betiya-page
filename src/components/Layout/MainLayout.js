import Footer from "../Navbar/Footar";
import Header from "../Navbar/Header";


const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 text-paragraph">
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default MainLayout;