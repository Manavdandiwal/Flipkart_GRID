import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Body />
            <Footer />
            {/* <StickyNav length='40'>insert your Navbar Component here</StickyNav> */}
        </div>
    );
}

export default App;
