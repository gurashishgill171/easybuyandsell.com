import React from 'react'
import './Testinomials.css'
import gurashish from '../../assets/Gurashish.png';
import parmeet from '../../assets/char.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'


function Testinomials() {
    return (
    <div class="wrapper">
        <div class="box">
            <FontAwesomeIcon icon={faQuoteLeft} className="icon_left_quote"/>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            
            <div class="content">
                <div class="info">
                    <div class="name">Alex Smith</div>
                    <div class="job">Designer | Developer</div>
        </div>
        <div class="image">
          <img src={gurashish} alt="" />
        </div>
      </div>
    </div>
    <div class="box">
      <FontAwesomeIcon icon={faQuoteLeft} className="icon_left_quote"/>
      <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
      <div class="content">
        <div class="info">
          <div class="name">Steven Chris</div>
          <div class="job">YouTuber | Blogger</div>
        </div>
        <div class="image">
          <img src={parmeet} alt="" />
        </div>
      </div>
    </div>
  </div>

    )
}

export default Testinomials
