import React, {Component} from "react";
import { Link } from "react-router-dom";

class WideBanner extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="wide-banner-text">
                            <h2 className="text-center ">HI! I'm <span id="banner-color-text">Nazmul Hasan</span></h2>
                            <p className="text-center mt-4">I'm a full stack software engineer having 4 years of experience based in Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default WideBanner;