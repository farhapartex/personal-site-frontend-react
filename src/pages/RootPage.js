import React, {Component} from "react";
import WideBanner from "../component/Widebanner";
import CenterHeaderText from "../component/CenterHeaderText";
import Footer from "../component/Footer";

class RootPage extends Component{
    render(){
        return (
            <div>
                <WideBanner/>
                <div id="about-section">
                    <CenterHeaderText />
                </div>
                <Footer/>
            </div>
        )
    }
}


export default RootPage;