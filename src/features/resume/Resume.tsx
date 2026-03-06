import React from 'react';
import './Resume.module.css';

export function Resume() {
    return (<section id="resume" className="resume">
    <div className="container">
      <div className="section-title">
        <h2>Resume</h2>
        <p>As a Biomedical Consultant/ Consultant Manager, I leverage my expertise in research and development to deliver high-quality solutions for clients in the healthcare and biotechnology sectors. I have over 10 years of experience in scientific research and project management, with a proven track record of securing and executing grants, creating engaging and accessible content, and developing innovative and impactful projects.

My passion is to bridge the gap between science and society, translating complex concepts into meaningful outcomes. I have authored multiple publications and training materials, received prestigious awards and grants, and presented at international conferences and universities. I also enjoy collaborating with interdisciplinary teams and stakeholders, fostering a culture of excellence and innovation. I am always eager to learn new skills and explore new possibilities in the field of biomedical informatics.

My research is published in magazines as Nature, Nature Communications and Autophagy with 3400+ Citations. My main focus as a researcher is autophagy, genetics, gene editing and high throughput proteomics. </p>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <h3 className="resume-title">Summary</h3>
          <div className="resume-item pb-0">
            <h4>Ana Mesquita</h4>
            <p><em>Biomedical Consultant and Consultant Manager with 10+ years of experience in scientific research and project management. I specialize in healthcare and biotechnology, bridging the gap between complex science and real-world impact. My expertise spans autophagy, genetics, gene editing, and high-throughput proteomics, with publications in Nature, Nature Communications, and Autophagy (3,400+ citations). Proven track record in securing grants, leading interdisciplinary teams, creating accessible content, and delivering innovative, high-impact projects. Passionate about translating research into meaningful outcomes and fostering a culture of excellence and innovation.</em></p>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>PhD in Molecular Biology</h4>
            <h5>2010 - 2014</h5>
            <p><em>Instituto de Investigaciones Biomédicas de Madrid - CSIC, Madrid, Spain</em></p>
            <p>Thesis focused on identifying the protein constituents and roles in the autophagy pathway using the Dictyostelium discoideum model.</p>
          </div>
          <div className="resume-item">
            <h4>Master’s Degree, Biochemistry</h4>
            <h5>2008 - 2010</h5>
            <p><em>Universidade do Porto</em></p>
            <p>This master's degree imparts theoretical concepts and high-level techniques in order to furnish highly specialised workers to the sectors in biochemistry-related fields, namely life sciences, health and biotechology. Biochemistry master's holders are set to undertake fundamental or applied research or to carry out highly specialised technical functions.
</p>
          </div>
          <div className="resume-item">
            <h4>Bachelor’s Degree, Biochemistry and Molecular Biology</h4>
            <h5>2005 - 2008</h5>
            <p><em>Universidade do Porto</em></p>
            <p>This degree course provides a solid foundation in the area of biochemistry, creating the scientific and technological skills to allow students: a) the equivalence of the cycles taught at European institutions of the same level; b) to continue with a reasonable level of autonomy to advanced training in biochemistry or related areas in second cycle studies in a European institution; c) to enter directly into the job market.
</p>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Grants Manager and Scientific Writer</h4>
            <h5>Nov 2023 - Jun 2025</h5>
            <p><em>Synapticure · Houston, TX (Remote)</em></p>
            <ul>
              <li>Manage timelines and milestones for grant application submissions, coordinating multidisciplinary teams.</li>
              <li>Develop comprehensive grant proposals for agencies like NIH, DoD, and DOE, ensuring alignment with guidelines.</li>
              <li>Consult with clients to define project goals, research objectives, and funding needs.</li>
              <li>Create detailed budgets and provide post-award support for project initiation and compliance.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>MedTech Lead / Consultant Manager</h4>
            <h5>Nov 2023 - Jun 2025</h5>
            <p><em>Baginski Wegner and Company (BW&CO) · Houston, TX (Hybrid)</em></p>
            <ul>
              <li>Manage timelines and milestones for grant application submissions, coordinating multidisciplinary teams.</li>
              <li>Develop comprehensive grant proposals for agencies like NIH, DoD, and DOE, ensuring alignment with guidelines.</li>
              <li>Consult with clients to define project goals, research objectives, and funding needs.</li>
              <li>Create detailed budgets and provide post-award support for project initiation and compliance.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Biomedical Informatics and Data Science Research Fellow</h4>
            <h5>Jul 2021 - Aug 2023</h5>
            <p><em>Baylor College of Medicine · Houston, TX</em></p>
            <ul>
              <li>Developed and implemented an innovative project in Biomedical Informatics.</li>
              <li>Managed scientific projects from design to completion using cutting-edge genetics and genomics techniques.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Postdoctoral Researcher</h4>
            <h5>Sep 2016 - Jul 2019</h5>
            <p><em>Albert Einstein College of Medicine · New York, NY</em></p>
            <ul>
              <li>Studied a newly discovered type of autophagy (endosomal Microautophagy) as a therapeutic target for heart disease.</li>
              <li>Investigated cell clearance mechanisms to protect the heart from damaging agents and improve recovery after ischemic incidents.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>)
}