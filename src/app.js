import React from 'react';
import ReactDOM from 'react-dom';
// import IndecisionApp from './components/IndecisionApp';
import './styles/style.css';
import  Navbar from './components/navbar';
import Center from './components/centers';
import Cover from './components/Cover';
import Footer from './components/footer';
import About from './components/about_elseify';



class All extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Cover/>
                <Center/>
                <About/>
                <Footer/>
               
            </div>
        )
    }
}


ReactDOM.render(<All/>, document.getElementById('app'));



