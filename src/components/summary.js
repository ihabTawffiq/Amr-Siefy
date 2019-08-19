import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/base/summ.css';


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
            
          <div class="container">
	
          <div onClick={this.centers} class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">المصري</h1>
                  <p class="title">EL-Masry</p>
                  <span class="atomic-number">29</span>
                  <span class="atomic-mass">63.54</span>
              </div>
              <div class="back-facing">
                  <h3>بمحيط منطقة الهرم</h3>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          

          <div onClick={this.centers} id="frw" class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">الفردوس</h1>
                  <p class="title">El-Firdous</p>
                  <span class="atomic-number">29</span>
                  <span class="atomic-mass">63.54</span>
              </div>
              <div class="back-facing">
                  <h3>إمبابة</h3>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>


          <div onClick={this.centers} class="element-card">
              <div class="front-facing">
                  
                  <h1 class="abr">المجد</h1>
                  <p class="title">EL-Majed</p>
                  <span class="atomic-number">29</span>
                  <span class="atomic-mass">63.54</span>
              </div>
              <div class="back-facing">
                  <h3>بمنطقة المنيب</h3>
                  <p><a class="btn" href="https://en.wikipedia.org/wiki/Copper" target="_blank">معلومات أكثر</a></p>
              </div>
          </div>
          
      </div>
        )
    }

}


export default Center;