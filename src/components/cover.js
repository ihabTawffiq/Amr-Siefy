import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/base/cover.css';
import Imageee from './img/cover4-01-01.jpg';


class Cover extends React.Component{
    render(){

        return(
                
            <div>
            
                <img src={Imageee} className="img-fluid" alt="Responsive image"/>
                <div className="container">
                    <a id="bt" href="#" className="btn btn-white btn-animation-1"> طالب جديد</a>  
                     <a id="bt" href="#" className="btn btn-white-2 btn-animation-1">تسجيل دخول </a> 
                </div>
               
            </div>
        )
    }
}
export default Cover; 