import React from "react"; 
const HtmlPage=()=>{
    return(
        <div className="content">
            <section>
                <h3 className="title">HTML for Absolute Beginners</h3>
                <p className="parag">
                 While many guides on the internet attempt to teach HTML using a lot of mind-boggling theory, this tutorial will instead focus on giving you the practical skills to build your first site.
                </p>
                <p className="parag">
                The aim is to show you ‘how’ to create your first web page without spending the entire tutorial focusing too much on the “why.”
                </p>
                <p className="parag">
                By the end of this tutorial, you will have the <strong>know-how to </strong>create a basic website and we hope that this will inspire you to delve further into the world of HTML using our follow-on guides
                </p>
            </section>
            <button className="btn">Apply Now</button>
        </div>
    )
}

export default HtmlPage;