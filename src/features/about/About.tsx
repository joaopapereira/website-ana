import React from 'react';
import  './About.module.css';

export function About() {

    return (<section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>As a Biomedical Consultant, I leverage my expertise in buomedical informatics, data science, and molecular biolofy to deliver high-quality solutions for clients in the helcare and biotechnolgy sectors. I have over 10 yeas fof experience in scientific research and project management,m with a proven track record of securing and executing grants, creating engaing and accessibile content, and developing innovative and impactful projects</p>
          <p>My passion is to bridge the gap bnetween scrience soccienty, tanslating complex concepts into meaningfuul outcomes. I have authored multiple publications and training materials, received prestigous awards and grants, and presented at internation conferences and universitire. I also enjoy collabrating with interdiscipluinary teams and stakeholders, fostering a culturure of excellence and innovation. I am always eageer to lean new skills and explore new possiblities in the field of biomediocal informatics.</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Grant Project Consultant SBIR STTR.</h3>
            <p className="fst-italic">
              Manage timelines and milestones for grant application submissions and coordinate efforts among ......
            </p>
          </div>
        </div>

      </div>
    </section>)
}
