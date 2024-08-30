import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>
           <div className="footer">
               <div className="footer-container">
                   <div className="message-for-users">
                   
                           Please contact me in any way <br /> you like
                     
                   </div>
                   <div className="social-links">
                       <div className="social-links-h">
                           Social
                       </div>
                       <div className="social-links-items">
                           <a href="https://www.instagram.com/_nishant_singhh_/">Instagram</a>
                           <a href="https://x.com/Nishant37315718?t=ihpQOy_8NvLLSuwTEOhEWQ&s=09">Twitter</a>
                           <a href="https://github.com/NishantSinghhhhh">Github</a>
                           <a href="https://www.linkedin.com/in/nishant-singh-8a5a00282/">LinkedIn</a>
                       </div>
                   </div>
                   <div className="social-links">
                       <div className="social-links-h">
                           Contact
                       </div>
                       <div className="social-links-items">
                       <a href="mailto:nishant.1703.developer@gmail.com?subject=Subject%20Here&body=Body%20Here">Mail</a>
                           <> +91 9649959730</>
                       </div>
                   </div>
                   <div className="footer-menu social-links">
                       <div className="footer-menu-h social-links-h">
                           Other Menu
                       </div>
                       <div className="footer-menu-links social-links-items">
                           <p className="footer-menu-links-items">Home.</p>
                           <p className="footer-menu-links-items">About.</p>
                           <p className="footer-menu-links-items">Projects.</p>
                           <p className="footer-menu-links-items">Contact.</p>
                       </div>
                   </div>
                   <div className="footer-btn">
                       <a href="/" className='footer-btn-a'>Get Started!</a>
                   </div>
               </div>
               <div className="footer-bottom">
                   <div className="left-footer-bottom">
                       <p>India</p>
                   </div>
                   <div className="right-footer-bottom">
                       <p>Nishant Singh</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
