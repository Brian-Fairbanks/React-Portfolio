import React from 'react';

function Contact() {
  return (
    <article className="m-0 mt-sm-3 mb-sm-3">
      <div className="container bg-light content pt-3 pb-3">
        {/* <!--Section heading--> */}
        <h2>Contact Me</h2>
        <hr/>
          

          <div className="row">
            <div class="col-md-8 mb-md-0 mb-5">
              <p className="text-center w-responsive mx-auto mb-5 p-5">Do you have any questions? Please do not hesitate to contact me directly. I would love to get back to you as soon as I can.</p>
            </div>

            {/* <!--Grid column for My information --> */}
            <div className="col-md-4 text-center">
              <section className="row">
                <figure className="col-12 m-0 p-0">
                  <i className="fas fa-map-marker-alt fa-2x d-inline-block d-md-block"></i>
                  <span className="col-md-12 col-sm-10">Pflugerville, TX, 78660, USA</span>
                </figure>

                <figure className="col-12 m-0 p-0">
                  <i className="fas fa-phone mt-4 fa-2x d-inline-block d-md-block"></i>
                  <span className="col-md-12 col-sm-10">+1 (512) 789 - 4483</span>
                </figure>

                <figure className="col-12 m-0 p-0">
                  <i className="fas fa-envelope mt-4 fa-2x d-inline-block d-md-block"></i>
                  <span className="col-md-12 col-sm-10">brian.k.fairbanks@gmail.com</span>
                </figure>
              </section>
            </div>
          </div>

          {/* <!-- Other Website Icons --> */}
          <div className="card mt-5 p-0 bg-light">
            <div className="card-body d-flex justify-content-center justify-content-md-around p-0">
              {/* <!-- Linked In --> */}
              <figure className="br-1">
                <a target="_blank" href="https://www.linkedin.com/in/bkfairbanks/">
                  <i className="fab fa-linkedin fa-3x fa-icon-only p-1"></i>
                </a>
              </figure>
              {/* <!-- GitHub --> */}
              <figure className="">
                <a target="_blank" href="https://github.com/Brian-Fairbanks">
                  <i className="fab fa-github fa-3x fa-icon-only p-1"></i>
                </a>
              </figure>
              {/* <!-- FaceBook --> */}
              <figure className="">
                <a target="_blank" href="https://www.facebook.com/BKFairbanks">
                  <i className="fab fa-facebook-square fa-3x fa-icon-only p-1"></i>
                </a>
              </figure>
              {/* <!-- Resume --> */}
              <figure className="">
                <a target="_blank" href="Assets/Brian_Fairbanks_resume_04082020.pdf" download>
                  <i className="fas fa-file fa-3x fa-icon-only p-1"></i>
                </a>
              </figure>


            </div>
          </div>               
        </div>
    </article>
  );
}

export default Contact;