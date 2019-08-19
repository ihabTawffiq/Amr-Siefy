import React from 'react';
import '../styles/base/_about-elseify.css';

class About extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility : false
        };
    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility  : !prevState.visibility
            };
        });
    }
   
    render(){
    return(
        <div id="summary" className = "About">
            <h1>أ/عمرو عبدالعظيم الصيفى</h1>
            <hr></hr>
            <div className = "Section">
            <div className = "information">  
            </div>
            
                <div className = "Information--big">
                    <p>حاصل على بكالوريوس علوم وتربية</p>
                    <p>معلم خبير بمدرسة الاورمان الثانوية بنات</p>
                    <p> تمهيدي ماجستير قسم صحة نفسية</p>

                    <p>  JICA بعثة السفر الى اليابان عام 2002 بالتعاون بين وزارة التربية والتعليم ومؤسسة </p>
                </div>
            
            </div>
        </div>
    );
            }
}

export default About;


