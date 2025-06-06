import React from 'react'

function AppFooter(){
  return (
    <div style={{background: "#f6e58d"}}>

        <footer >
            <div className="container text-center" >
              <br/><br/>
                   <div className="row align-items-start">
                    
                    <div className="col-4">
                      <h5>Company Info</h5><br/>
                      <h6><a className="linkFooter text-dark" href="">About Tokonya Dia</a></h6>
                      <h6><a className="linkFooter text-dark" href="https://www.cnnindonesia.com/">News</a></h6>
                      <h6><a className="linkFooter text-dark" href="">Help Center</a></h6>
                      <h6><a className="linkFooter text-dark" href="">Terms And Condition</a></h6>
                      <h6><a className="linkFooter text-dark" href="">Privacy Policy</a></h6>
                    </div>
                    <div className="col-4">
                      <h5>For You</h5><br/>
                      <h6><a className="contact text-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSd4Bat7fn4VTQZsHjttUyEKaBCSy2nHNVY970Phsm6yy17cDw/viewform?usp=sharing">Contact Us</a></h6>
                      <h6><a className="linkFooter text-dark" href="#">Delivery Service</a></h6>
                      <h6><a className="linkFooter text-dark" href="#">Flash Sale</a></h6>
                      <h6><a className="linkFooter text-dark" href="Careers.html">Careers</a></h6>
                    </div>

                    <div className="col-4">
                      <h5>Attribute</h5><br />
                      <h6><a className="linkFooter text-dark" href="https://www.flaticon.com/free-icons/commerce-and-shopping" title="commerce and shopping icons">Mayor Icons</a></h6>
                      <h6><a className="linkFooter text-dark" href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Freepik</a></h6>
                      <h6><a className="linkFooter text-dark" href="https://www.flaticon.com/free-icons/youtube" title="youtube icons">Flaticon</a></h6>
                      <h6><a className="linkFooter text-dark" href="https://www.flaticon.com/free-icons/tik-tok" title="tik tok icons">Designer Shah</a></h6>
                    </div>
              </div>

              <br /><br />
              <div className="container">
                      <h5>Follow Us</h5><br/>
                      
                      <a className="linkFooter text-dark mx-2" href="https://www.facebook.com/">
                        <img src="/icon/facebook.png" alt="" width="30" height="30" />
                      </a>
                      
                      <a className="linkFooter text-dark mx-2" href="https://www.instagram.com/">
                        <img src="/icon/instagram.png" alt="" width="30" height="30" />
                      </a>
                      
                      <a className="linkFooter text-dark mx-2" href="https://x.com/i/flow/login">
                        <img src="/icon/twitter.png" alt="" width="30" height="30" />
                      </a>
                      
                      <a className="linkFooter text-dark mx-2" href="https://www.youtube.com/">
                        <img src="/icon/youtube.png" alt="" width="30" height="30" />
                      </a>

                      <a className="linkFooter text-dark mx-2" href="https://www.tiktok.com/en/">
                        <img src="/icon/tik-tok.png" alt="" width="30" height="30" />
                      </a>

                    </div>

              <br/><br/>
              <div className="container">
                <p className="text-center"> Tokonya Dia 2025 All Right Reserved   ||   Website by M.I.Ramadhan</p>
              </div>
              <br/><br/>
            </div>
         </footer>

    </div>
  )
}

export default AppFooter