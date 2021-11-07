import React, {Component} from "react";
import { Link } from "react-router-dom";

class WideBanner extends Component{
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div id="wide-banner-text">
                            <h1 className="text-center ">Hi,</h1>
                            <h2 className="text-center ">I'm Md Nazmul Hasan</h2>
                            <h4 className="text-center mt-4">Software Engineer at <Link to={""}>Sixads</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default WideBanner;