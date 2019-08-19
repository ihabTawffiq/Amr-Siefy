import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/base/center.css';


class Center extends React.Component{

    centers = ()=>{
      $(document).ready(function(){
	
        $('.element-card').on('click', function(){
          
          if ( $(this).hasClass('open') ) {
            $(this).removeClass('open');
          } else {
            $('.element-card').removeClass('open');
            $(this).addClass('open');
          }
          
        });
        
      });
    }

    render(){
        return(
        <div> 
<div className="rectangle"></div>

<div id="center" class="parallax-content baner-content" >
<h1 id="tit">المراكز التعليمية</h1>
 
            <div class="container">
                <div class="first-content">
                                         
                <div class="container">
          <div onClick={this.centers} id="elmasry" className="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">المصري</h1>
                  <p class="title">EL-Masry</p>
                  <span class="atomic-number">29</span>
                  <span class="atomic-mass">63.54</span>
              </div>
              <div class="back-facing">
                  <h5> ش عثمان محرم، أول شمال جنب جراج شركة بيبسي - الطالبية - الهرم</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          


          

          <div onClick={this.centers} id="frw" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">الفردوس</h1>
                  <p class="title">El-Firdous</p>
                  <span class="atomic-number">22</span>
                  <span class="atomic-mass">48.88</span>
              </div>
              <div class="back-facing">
                  <h5>محطة الجراج، أمام بنزينة موبيل-مساكن العرايس-الفردوس-إمبابة</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>


          <div onClick={this.centers} id="mjd" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">المجد</h1>
                  <p class="title">EL-Majed</p>
                  <span class="atomic-number">104</span>
                  <span class="atomic-mass">261</span>
              </div>
              <div class="back-facing">
                  <h5>أبو زارع، بجوار بنزينة أبو زارع - المنيب</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          
      </div>
      <div class="container">
          <div onClick={this.centers} id="mstqbl" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">المستقبل</h1>
                  <p class="title">EL-Mustaqbal</p>
                  <span class="atomic-number">87</span>
                  <span class="atomic-mass">223.020</span>
              </div>
              <div class="back-facing">
                  <h5> نصر الدين، فوق النفق - الهرم </h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          

          <div onClick={this.centers} id="insh" className="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">الإنشاء</h1>
                  <p class="title">El-Inshaa</p>
                  <span class="atomic-number">110</span>
                  <span class="atomic-mass">269</span>
              </div>
              <div class="back-facing">
                  <h5>شارع العشرين، أمام كشري رسلان - فيصل</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>


          <div onClick={this.centers} id="vip" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">VIP</h1>
                  
                  <span class="atomic-number">19</span>
                  <span class="atomic-mass">40</span>
              </div>
              <div class="back-facing">
                  <h5>أمام كلية التربية الرياضة - محطة المساحة - فيصل</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          
      </div>
      <div class="container">
          <div onClick={this.centers} id="elmasry2" class="element-card">
              <div class="front-facing">
                  
                  
                  <h6 class="abr">المصري</h6>
                  <p class="title">Embaba</p>
                  <span class="atomic-number">55</span>
                  <span class="atomic-mass">133</span>
              </div>
              <div class="back-facing">
                  <h5>  ش النصرأمام تمر حنة ارض الجمعية -إمبابة</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          

          <div onClick={this.centers} id="ok" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">OK</h1>
                  
                  <span class="atomic-number">30</span>
                  <span class="atomic-mass">65.3</span>
              </div>
              <div class="back-facing">
                  <h5>شارع ناصر الثورة - أمام كبابجي الواعر - فيصل</h5>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>


          <div onClick={this.centers} id="tera" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">تيرا</h1>
                  <p class="title">Tera</p>
                  <span class="atomic-number">20</span>
                  <span class="atomic-mass">40</span>
              </div>
              <div class="back-facing">
                  <h3> أمام مبنى محافظة الجيزة - الهرم</h3>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          
      </div>
                    

                </div>
             </div>
         </div>

       
      </div>
        )
    }

}


export default Center;