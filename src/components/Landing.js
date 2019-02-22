import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'


const Landing = props => {
  return (
    <>
      <div className={classnames("w3-container")} style="padding:128px 16px" id="about">
        <h3 className={classnames("w3-center")}>ABOUT THE COMPANY</h3>
        <p className={classnames("w3-center", "w3-large")}>Key features of our company</p>
        <div className={classnames("w3-row-padding", "w3-center")} style="margin-top:64px">
          <div className={classnames("w3-quarter")}>
            <i className={classnames("fa", "fa-desktop", "w3-margin-bottom", "w3-jumbo", "w3-center")}></i>
            <p className={classnames("w3-large")}>Responsive</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className={classnames("w3-quarter")}>
            <i className={classnames("fa", "fa-heart", "w3-margin-bottom", "w3-jumbo")}></i>
            <p className={classnames("w3-large")}>Passion</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className={classnames("w3-quarter")}>
            <i className={classnames("fa", "fa-diamond", "w3-margin-bottom", "w3-jumbo")}></i>
            <p className={classnames("w3-large")}>Design</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className={classnames("w3-quarter")}>
            <i className={classnames("fa", "fa-cog", "w3-margin-bottom", "w3-jumbo")}></i>
            <p className={classnames("w3-large")}>Support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
      </div>


      <div className={classnames("w3-container", "w3-light-grey")} style="padding:128px 16px">
        <div className={classnames("w3-row-padding")}>
          <div className={classnames("w3-col", "m6")}>
            <h3>We know design.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore.</br>
            </p>
            <p><a href="#work" className={classnames("w3-button", "w3-black")}><i className={classnames("fa fa-th")} /> View Our Works</a></p>
          </div>
          <div className={classnames("w3-col m6")}>
            <img className={classnames("w3-image", "w3-round-large")} src="/w3images/phone_buildings.jpg" alt="Buildings" width="700" height="394" />
          </div>
        </div>
      </div>


      <div className={classnames("w3-container")} style="padding:128px 16px" id="team">
        <h3 className={classnames("w3-center")}>THE TEAM</h3>
        <p className={classnames("w3-center", "w3-large")}>The ones who runs this company</p>
        <div className={classnames("w3-row-padding", "w3-grayscale")} style="margin-top:64px">
          <div className={classnames("w3-col", "l3", "m6", "w3-margin-bottom")}>
            <div className={classnames("w3-card")}>
              <img src="/w3images/team2.jpg" alt="John" style="width:100%" />
              <div className={classnames("w3-container")}>
                <h3>John Doe</h3>
                <p className={classnames("w3-opacity")}>CEO & Founder</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className={classnames("w3-button", "w3-light-grey", "w3-block")}><i className={classnames("fa", "fa-envelope")}></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className={classnames("w3-col", "l3", "m6", "w3-margin-bottom")}>
            <div className={classnames("w3-card")}>
              <img src="/w3images/team1.jpg" alt="Jane" style="width:100%" />
              <div className={classnames("w3-container")}>
                <h3>Anja Doe</h3>
                <p className={classnames("w3-opacity")}>Art Director</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className={classnames("w3-button", "w3-light-grey", "w3-block")}><i className={classnames("fa", "fa-envelope")}></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className={classnames("w3-col", "l3", "m6", "w3-margin-bottom")}>
            <div className={classnames("w3-card")}>
              <img src="/w3images/team3.jpg" alt="Mike" style="width:100%" />
              <div className={classnames("w3-container")}>
                <h3>Mike Ross</h3>
                <p className={classnames("w3-opacity")}>Web Designer</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className={classnames("w3-button", "w3-light-grey", "w3-block")}><i className={classnames("fa", "fa-envelope")}></i> Contact</button></p>
              </div>
            </div>
          </div>
          <div className={classnames("w3-col", "l3", "m6", "w3-margin-bottom")}>
            <div className={classnames("w3-card")}>
              <img src="/w3images/team4.jpg" alt="Dan" style="width:100%" />
              <div className={classnames("w3-container")}>
                <h3>Dan Star</h3>
                <p className={classnames("w3-opacity")}>Designer</p>
                <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                <p><button className={classnames("w3-button", "w3-light-grey", "w3-block")}><i className={classnames("fa", "fa-envelope")}></i> Contact</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={classnames("w3-container", "w3-row", "w3-center", "w3-dark-grey", "w3-padding-64")}>
        <div className={classnames("w3-quarter")}>
          <br>Partners</br>
        </div>
        <div className={classnames("w3-quarter")}>
          <span className={classnames("w3-xxlarge" )}> 55 +</span>
          <br>Projects Done</br>
        </div>
        <div className={classnames("w3-quarter")}>
          <span className={classnames("w3-xxlarge")}>89+</span>
          <br>Happy Clients</br>
        </div>
        <div className={classnames("w3-quarter")}>
          <span className={classnames("w3-xxlarge")}>150+</span>
          <br>Meetings</br>
        </div>
      </div>


      <div className={classnames("w3-container")} style="padding:128px 16px" id="work">
        <h3 className={classnames("w3-center")}>OUR WORK</h3>
        <p className={classnames("w3-center", "w3-large")}>What we've done for people</p>

        <div className={classnames("w3-row-padding")} style="margin-top:64px">
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_mic.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A microphone" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_phone.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A phone" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_drone.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A drone" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_sound.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="Soundbox" />
          </div>
        </div>

        <div className={classnames("w3-row-padding", "w3-section")}>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_tablet.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A tablet" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_camera.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A camera" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_typewriter.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A typewriter" />
          </div>
          <div className={classnames("w3-col", "l3", "m6")}>
            <img src="/w3images/tech_tableturner.jpg" style="width:100%" onClick="onClick(this)" className={classnames("w3-hover-opacity")} alt="A tableturner" />
          </div>
        </div>
      </div>


      {/* <div id="modal01" className={classnames("w3-modal w3-black" onClick="this.style.display='none'">
        <span className={classnames("w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
        <div className={classnames("w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className={classnames("w3-image" />
          <p id="caption" className={classnames("w3-opacity w3-large"></p>
        </div>
      </div> */}

      <div className={classnames("w3-container", "w3-light-grey", "w3-padding-64")}>
        <div className={classnames("w3-row-padding")}>
          <div className={classnames("w3-col", "m6")}>
            <h3>Our Skills.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
              tempor incididunt ut labore et dolore.</br></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br>
              tempor incididunt ut labore et dolore.</br></p>
          </div>
          <div className={classnames("w3-col", "m6")}>
            <p className={classnames("w3-wide")}><i className={classnames("fa", "fa-camera", "w3-margin-right")}/>Photography</p>
            <div className={classnames("w3-grey")}>
              <div className={classnames("w3-container", "w3-dark-grey", "w3-center")} style="width:90%">90%</div>
            </div>
            <p className={classnames("w3-wide")}><i className={classnames("fa", "fa-desktop", "w3-margin-right")}></i>Web Design</p>
            <div className={classnames("w3-grey")}>
              <div className={classnames("w3-container", "w3-dark-grey", "w3-center")} style="width:85%">85%</div>
            </div>
            <p className={classnames("w3-wide")}><i className={classnames("fa", "fa-photo", "w3-margin-right")}></i>Photoshop</p>
            <div className={classnames("w3-grey")}>
              <div className={classnames("w3-container", "w3-dark-grey", "w3-center")} style="width:75%">75%</div>
            </div>
          </div>
        </div>
      </div>

      <div className={classnames("w3-container", "w3-center", "w3-dark-grey")} style="padding:128px 16px" id="pricing">
        <h3>PRICING</h3>
        <p className={classnames("w3-large")}>Choose a pricing plan that fits your needs.</p>
        <div className={classnames("w3-row-padding")} style="margin-top:64px">
          <div className={classnames("w3-third", "w3-section")}>
            <ul className={classnames("w3-ul", "w3-white", "w3-hover-shadow")}>
              <li className={classnames("w3-black", "w3-xlarge", "w3-padding-32")}>Basic</li>
              <li className={classnames("w3-padding-16")}><b>10GB</b> Storage</li>
              <li className={classnames("w3-padding-16")}><b>10</b> Emails</li>
              <li className={classnames("w3-padding-16")}><b>10</b> Domains</li>
              <li className={classnames("w3-padding-16")}><b>Endless</b> Support</li>
              <li className={classnames("w3-padding-16")}>
                <h2 className={classnames("w3-wide")}>$ 10</h2>
                <span className={classnames("w3-opacity")}>per month</span>
              </li>
              <li className={classnames("w3-light-grey", "w3-padding-24")}>
                <button className={classnames("w3-button", "w3-black", "w3-padding-large")}>Sign Up</button>
              </li>
            </ul>
          </div>
          <div className={classnames("w3-third")}>
            <ul className={classnames("w3-ul", "w3-white", "w3-hover-shadow")}>
              <li className={classnames("w3-red", "w3-xlarge", "w3-padding-48")}>Pro</li>
              <li className={classnames("w3-padding-16")}><b>25GB</b> Storage</li>
              <li className={classnames("w3-padding-16")}><b>25</b> Emails</li>
              <li className={classnames("w3-padding-16")}><b>25</b> Domains</li>
              <li className={classnames("w3-padding-16")}><b>Endless</b> Support</li>
              <li className={classnames("w3-padding-16")}>
                <h2 className={classnames("w3-wide")}>$ 25</h2>
                <span className={classnames("w3-opacity")}>per month</span>
              </li>
              <li className={classnames("w3-light-grey", "w3-padding-24")}>
                <button className={classnames("w3-button", "w3-black", "w3-padding-large")}>Sign Up</button>
              </li>
            </ul>
          </div>
          <div className={classnames("w3-third", "w3-section")}>
            <ul className={classnames("w3-ul", "w3-white", "w3-hover-shadow")}>
              <li className={classnames("w3-black", "w3-xlarge", "w3-padding-32")}>Premium</li>
              <li className={classnames("w3-padding-16")}><b>50GB</b> Storage</li>
              <li className={classnames("w3-padding-16")}><b>50</b> Emails</li>
              <li className={classnames("w3-padding-16")}><b>50</b> Domains</li>
              <li className={classnames("w3-padding-16")}><b>Endless</b> Support</li>
              <li className={classnames("w3-padding-16")}>
                <h2 className={classnames("w3-wide")}>$ 50</h2>
                <span className={classnames("w3-opacity")}>per month</span>
              </li>
              <li className={classnames("w3-light-grey", "w3-padding-24")}>
                <button className={classnames("w3-button", "w3-black", "w3-padding-large")}>Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Landing
