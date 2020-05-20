import React from "react";
import self from "../Assets/self.png";
import selfs from "../Assets/self-s.png";
import resume from "../Assets/Brian_Fairbanks_resume_04082020.pdf";

function Index() {
  return (
    <main className="m-0 mt-sm-3 mb-sm-3">
      <div className="container bg-light content py-3">
        {/* <!-- main--> */}
        <h2>About Me</h2>
        <hr/>
          {/* <!-- image of myself --> */}

          {/* <!-- the first one will float left, and display only when medium or bigger--> */}
          <div className="col-md-6 col-lg-4 col-xl-3 d-none d-md-block float-left mr-4" >
            <img className="img-fluid img-thumbnail" src={self} alt="Brian Fairbanks with his first dog, Kraken" title="Brian Fairbanks with his first dog, Kraken"/>
          </div>
            {/* <!-- the scond one here will expand to the full screen, but only be visable on small screens--> */}
            <div className="container-fluid d-block d-md-none mb-2 m-0 p-0" >
              <img className="img-fluid img-thumbnail" src={selfs} alt="Brian Fairbanks with his first dog, Kraken" title="Brian Fairbanks with his first dog, Kraken"/>
            </div>

              {/* <!--  About Me text content  --> */}
              <section>
                <h3>Intro</h3>
                <p>
                  Brian Fairbanks, 28, lives in Pflugerville, Texas with his fiance, Amanda, and their two Miniature Schnauzers, Kraken (pictured) and Mochi.
            </p>
              </section>

              {/* <!--  Education  --> */}
              <section>
                <h3>Education</h3>
                <p>
                  Brian's higher education began during his highschool years, where he attended japanese classNamees at Austin Community College in the late evenings.  This culminated in a one-month, homestay,
                  study abroad trip to Japan through Texas State University's program.
            </p>
                <p>
                  Brian attended Texas Tech University - Edward E. Whitacre, Jr. College of Engineering between 2010 to 2015,
                  whilst he developed code part-time for a small electric co-op, as their sole programmer.  He  attained his Bachelor of Science in Computer Science, as one of only
                  six students to complete the curriculum in spring, 2015.  In this time, he also completed his minors in Business and Japanese Linguistics.
            </p>
                <p>
                  He is currently unemployeed, but is taking this opportunity to brush up on his technical skills, attending the UT Coding Bootcamp, as well as taking Certification courses through Linux Academy.
                He has recently become LPI Certified for <a target="_blank" href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000443073/m5vp2vp35q">Linux Essentials</a> and in the process of prepping for the Azure Fundamentals exam.
            </p>
              </section>

              {/* <!--  Skills  --> */}
              <section>
                <h3>Skills</h3>
                <div className="row container p-0 mx-auto">
                  {/* <!-- Langauges --> */}
                <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Languages
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Python</li>
                          <li>Java</li>
                          <li>C++</li>
                          <li>C#</li>
                          <li>Assembly</li>
                          <li>SQL</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Web Based --> */}
                  <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card p-0 h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Web Based Skills
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>CSHTML</li>
                          <li>HTML</li>
                          <li>Node.js</li>
                          <ul>
                            <li>Express</li>
                          </ul>

                          <li>Javascript</li>
                          <ul>
                            <li>Jquery</li>
                            <li>JSON</li>
                          </ul>
                          <li>MVC3/ADP.NET</li>
                          <li>Restful APIs</li>
                          <li>React</li>
                          <li>PWAs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- UI Design --> */}
                  <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card p-0 h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          UI/Design
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>CSS</li>
                          <li>BootStrap</li>
                          <li>TailWind</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Databases --> */}
                  <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card p-0 h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Databases
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Oracle Database</li>
                          <li>Transact SQL</li>
                          <li>PL/SQL</li>
                          <li>MySQL</li>
                          <li>MongoDB</li>
                          <ul>
                            <li>Mongoose</li>
                          </ul>

                          <li>Toad</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Other --> */}
                  <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card p-0 h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Other
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>Service Now</li>
                          <li>Git</li>
                          <li>VBA</li>
                          <li>Microsoft Office Suite</li>
                          <li>Photoshop</li>
                          <li>Remote Desktop Manager</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Certifications --> */}
                  <div className="col-xs-12 col-md-6 col-lg-4 p-2">
                    <div className="card p-0 h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Certifications
                            </span>
                      </div>
                      <div className="card-body">
                        <ul>
                          <li>LPI Linux Essentials</li>
                        </ul>
                            Formerly:
                            <ul>
                          <li>CompTIA A+</li>
                          <li>CompTIA Net+</li>
                        </ul>
                            In Progress:
                            <ul>
                          <li>Microsoft Azure Fundamentals</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </section>


              {/* <!--  Work  --> */}
              <section>
                <h3>Experience </h3>

                <div className="container row mx-auto p-0">
                  {/* <!-- Employment Card Template--> */}

                  {/* <!-- <div className="card h-100">
                    <div className="card-header">
                      Featured
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">Special title treatment</h5>
                      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div> --> */}

                  {/* <!-- Dell --> */}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Dell Technologies
                            </span>
                        <span className="float-right text-light">
                          2015-2020
                            </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Senior Business System Analyst</h5>
                        <p className="card-text">
                          <ul>
                            <li>
                              Handled mission critical technical support for supply chain tools, including Glovia, OTM and
                              GTM (Oracle & Global Transportation Management) through Oracle databases, and their
                              dependent web portals
                                    </li>
                            <li>
                              Managed documentation and oversaw disaster recovery operations for Dell’s Supply Chain Data
                              Hub, primary supply chain database managing data flow for dozens of applications
                                    </li>
                            <li>
                              Aided in creation and management of proactive alerts and monitoring, leading to a decrease of
                              user logged incidents to only 20%
                                    </li>

                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- South Plains --> */}
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          South Plains Electric Co-op
                            </span>
                        <span className="float-right text-light">
                          2013-2015
                            </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">IT Generalist, Part-Time</h5>
                        <p className="card-text">
                          <ul>
                            <li>
                              Designed and executed migration of legacy power consumption tracking forms from
                              Lotus 1-2-3 to Excel using VBA
                                    </li>
                            <li>
                              Designed, wrote, and managed web-based employee time-off and visitor check-in applications
                                    </li>
                            <li>
                              Aided in employee system provisioning, installation, and maintenance for approximately 200 personnel across 3 sites
                                    </li>

                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Dell Internship --> */}
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 p-2">
                    <div className="card h-100">
                      <div className="card-header orange">
                        <span className="float-left text-light">
                          Dell Technologies
                            </span>
                        <span className="float-right text-light">
                          2013
                            </span>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">Supply Chain Software Development Intern</h5>
                        <p className="card-text">
                          <ul>
                            <li>
                              Created data retrieval tool on the department’s web portal, saving team members hours each
                              week on collecting and formatting reports

                                    </li>
                            <li>
                              Gathered and translated business requirements into technical specifications to organize and
                              prioritize backlogged manufacturing orders, based on ship date, quantity, and product type

                                    </li>
                            <li>
                              Used MVC3 and Transact-SQL databases, under the guidance of a technical mentor, to
                              develop a web-based tool for the internal team to identify, monitor, and report on problem orders
                              from a set number of Dell’s manufacturing partners. Team later expanded the tool and rolled out
                              to all global production regions
                                    </li>

                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>


                </div>

              </section>

              <div className="employment-card card mt-auto text-center p-3">
                <a target="_blank" href={resume} download>
                  <i className="fas fa-file fa-3x fa-icon-only d-block"></i>
                Resume
            </a>
              </div>

            </div>
        </main>
  )
}

export default Index;