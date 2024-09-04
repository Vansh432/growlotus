import React from "react";
function ServiceDisciption(){

    const style={
        desciption:{
            textAlign: "center",
            fontSize: "1rem",
            marginBottom: "40px",
            color: "black",
        }
    }
 
    return<>
    <div style={{textAlign:"center"}}>
        <p className="serviceDescrition" style={style.desciption}>
        At Grow Lotus Fintech Private Limited, we offer a comprehensive range of financial services designed to meet the diverse needs of our clients. Whether you're an individual seeking personal financial solutions or a business looking for funding opportunities, our expert team is here to provide you with tailored advice and support.
        </p>
        <form action="#Services" method="get">
        <button className="serviceBtn" >EXPLORE</button>
        </form>
        </div>
    </>
}

export default ServiceDisciption;