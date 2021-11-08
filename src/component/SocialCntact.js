import React, {Component} from "react";

class SocialContact extends Component{
    render(){
        const fbUrl = "https://www.facebook.com/FarHaPartex/";
        const githubUrl = "https://github.com/farhapartex";
        const linkedUrl = "https://www.linkedin.com/in/md-nazmul-hasan-08/";
        const flickrUrl = "https://www.flickr.com/photos/193876719@N06/";

        return (
                <div className="social-icon-block ml-auto mt-3">
                    <h5>Connect me via</h5>
                    <ul className="social-icon-list">
                        <li><a href={fbUrl} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg></a></li>
                        <li><a href={githubUrl} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 28 22"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg></a></li>
                        <li><a href={linkedUrl} target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 28 22"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a></li>
                        <li>
                            <a href={flickrUrl} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="28.861 41.416 47.754 22.153"><path fill="#FF0084" d="M54.461 52.492c0 6.117 4.96 11.077 11.078 11.077 6.117 0 11.076-4.96 11.076-11.077s-4.959-11.076-11.076-11.076c-6.118 0-11.078 4.959-11.078 11.076z"/><path fill="#0063DC" d="M28.861 52.492c0 6.117 4.959 11.077 11.077 11.077s11.077-4.96 11.077-11.077-4.959-11.076-11.077-11.076-11.077 4.959-11.077 11.076z"/></svg>
                            </a>
                        </li>
                    </ul>
                             
            </div>
        )
    }
}


export default SocialContact;