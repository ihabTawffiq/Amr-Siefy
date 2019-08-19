import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/base/nav.css';
import Logo from './img/logo.png';
import Cover from './img/cover.jpg';

class Navbar extends React.Component {

    sideBar =()=>{
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay').on('click', function () {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });
    }

    render() {
        return (
            <div className="wrapper">


            
                <nav id="sidebar">
                    <div id="dismiss">
                        <i className="fas fa-arrow-left"></i>
                    </div>


                    <div className="sidebar-header">
                        <a id="logo2" className="navbar-brand" href="#"><img src={Logo} /></a>
                    </div>

                    <ul className="list-unstyled components">
                        <p></p>
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">الصفحة الشخصية</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#">الحضور</a>
                                </li>
                                <li>
                                    <a href="#">نتائج الإمتحانات</a>
                                </li>
                                <li>
                                    <a href="#">الواجب المنزلي</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">الدروس</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#">الباب الأول</a>
                                </li>
                                <li>
                                    <a href="#">الباب الثاني</a>
                                </li>
                                <li>
                                    <a href="#">الباب لثالث</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">المعرض</a>
                        </li>
                       
                    </ul>

                    <ul className="list-unstyled CTAs">
                        <li>
                            <a href="" className="download"> طالب جديد</a>
                        </li>
                        <li>
                            <a href="" className="article">تسجيل دخول</a>
                        </li>
                    </ul>
                </nav>

  
        <div id="content">

            <nav id="navbar" className="navbar navbar-expand-lg">
                   
                <div className="container-fluid">

                    <button onClick={this.sideBar} type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        
                    </button>

                         
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    <a id="logo" className="navbar-brand" href="#"><img src={Logo}></img></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li  className="nav-item">
                                <a id="navitem" className="nav-link" href="#">الرئيسية</a>
                            </li>
                            <li  className="nav-item">
                                <a id="navitem" className="nav-link" href="#center">المراكز التعليمية</a>
                            </li>
                            <li  className="nav-item">
                              <a id="navitem" className="nav-link" href="#summary">نبذة مختصرة</a>
                            </li>
                            <li  className="nav-item">
                                <a id="navitem" className="nav-link" href="#footer">تواصل معنا</a>
                            </li>
                        </ul>
                    </div>
                    </div>
            </nav> 
        
           </div>
            
            
        </div>
        
        
        )
    }
}

export default Navbar; 

