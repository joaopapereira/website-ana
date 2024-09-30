import React from 'react';
import './Publications.module.css';

export function Publications() {
  return (
    <section id="publications" className="publications">
    <div className="container">
      <div className="section-title">
        <h2>Publications</h2>
      </div>

      <div className="row">
        <div className="col-lg-6" data-aos="fade-up">
          <div className="publications-item">
            <h4>Publication name</h4>
            <h5>Date</h5>
            <h5>Location of the publication</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Minor description</p>
            <p>Eventualy a link?</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}