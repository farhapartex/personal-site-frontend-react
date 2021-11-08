import React, {Component} from "react";
import SocialContact from "./SocialCntact";


class CenterHeaderText extends Component{
    render(){
        const imgUrl = "https://wallpapercave.com/wp/wp5890074.jpg";
        const sixadsUrl = "https://sixads.net/";
        const sustUrl = "https://www.sust.edu/";
        const sunamganjUrl = "http://www.sunamganj.gov.bd/";
        const veloceUrl = "http://velocebike.com/bangladesh/shop/mountain-bikes/outrage/outrage-603-black-blue/";
        const canonUrl = "https://www.amazon.in/Canon-EOS-200D-II-55-250mm/dp/B07S26X16N";

        return (
            <div className="w-100">
                <div className="heading">
                    <h3 className="text-center">About Me</h3>
                </div>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-4">
                            <div id="side-image">
                                <img src={imgUrl} alt="Hasan" className="w-100"/>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="w-75 ml-auto mt-3">
                                <p>
                                I'm Md Nazmul Hasan, based on <a href={sunamganjUrl} target="_blank" rel="noopener noreferrer" className="in-text-url">Sunamganj, Bangladesh</a>. I'm a full stack software engineer working for last 4 years
                                and developed web application, web backend services in a variety of domains. Currently I'm working as a Software Enginneer (Remote)
                                at <a href={sixadsUrl} target="_blank" rel="noopener noreferrer" className="in-text-url">Sixads</a>. I graduated from <a href={sustUrl} target="_blank" rel="noopener noreferrer" className="in-text-url">Shahjala University of Science & Technology</a> and acquired my B.Sc degree on Mathematics and second major on CSE.
                                The second major things is really important term to me, cause that gave me a chance to learn core concept of Computer Science. Also there I learned competitve programming, attended contest and solved problems based on
                                Data Structure and Algorithms.
                                </p>
                                <p>
                                    I started my career as a Software Engineer in 2018 and that time I worked with Java. But after 6 month I feel that Python is really cool to me
                                    and I moved from Java to Python. Then started working on backend applications which were based on Django framework. I always like to explore new era 
                                    technologies. Beside of working on backend, I thought I should learn frontend things so learned JavaScript and then Vuejs. But Currently
                                    I'm working with ReactJs (a popular JavaScript library for UI)
                                </p>
                                <p>
                                    Beside of programming I have some another hobbies. I like to ride by-cycle and also like to capture photos.
                                    I have a <a href={veloceUrl} target="_blank" rel="noopener noreferrer" className="in-text-url">Veloce-603</a> by-cycle with which sometime I tour my city. I have <a href={canonUrl} target="_blank" rel="noopener noreferrer" className="in-text-url">Canon 200d II</a> DSLR camere. I try to capture beautiful moments
                                    whenever I can.
                                </p>
                                
                            </div>
                            <div className="mt-5">
                                <SocialContact />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}


export default CenterHeaderText;