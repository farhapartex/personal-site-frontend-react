import React, {Component} from "react";
import WideBanner from "../component/Widebanner";
import CenterHeaderText from "../component/CenterHeaderText";


class RootPage extends Component{
    render(){
        return (
            <div>
                <WideBanner/>
                <div id="about-section">
                    <CenterHeaderText />
                </div>
            </div>
        )
    }
}


export default RootPage;