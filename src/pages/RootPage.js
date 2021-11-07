import React, {Component} from "react";
import WideBanner from "../component/Widebanner";
import CenterHeaderText from "../component/CenterHeaderText";


class RootPage extends Component{
    render(){
        return (
            <div>
                <WideBanner/>
                <div className="mt-5">
                    <CenterHeaderText />
                </div>
            </div>
        )
    }
}


export default RootPage;