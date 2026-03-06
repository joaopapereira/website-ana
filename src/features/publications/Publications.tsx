import React from "react";
import "./Publications.module.css";

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
              <h4>
                Differential activation of eMI by distinct forms of cellular
                stress
              </h4>
              <h5>2021 Aug</h5>
              <h5>Journal: Autophagy</h5>
              <p>
                <em>
                  Department of Developmental & Molecular Biology, Albert
                  Einstein College of Medicine, NY, USA
                </em>
              </p>
              <p>
                This study shows how endosomal microautophagy (eMI) responds to
                specific cellular stresses and its regulatory mechanisms,
                highlighting interplay with other autophagy pathways.
              </p>
              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/32559125/">PubMed</a>
              </p>
            </div>
            <div className="publications-item">
              <h4>
                Streamlined particle quantification (SParQ) plug‑in is an
                automated fluorescent vesicle quantification tool
              </h4>
              <h5>2020 Sep</h5>
              <h5>Journal: Autophagy</h5>
              <p>
                <em>
                  Departments of Developmental & Molecular Biology and Genetics,
                  Albert Einstein College of Medicine, NY, USA
                </em>
              </p>
              <p>
                Introduces a Fiji/ImageJ plug‑in for automated quantification of
                fluorescent vesicles relevant for autophagy and lysosomal
                studies.
              </p>
              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/31752589/">PubMed</a>
              </p>
            </div>
            <div className="publications-item">
              <h4>
                Autophagy in Dictyostelium: Mechanisms, regulation and disease
                in a simple biomedical model
              </h4>
              <h5>2017 Jan</h5>
              <h5>Journal: Autophagy</h5>
              <p>
                <em>
                  Instituto de Investigaciones Biomédicas Alberto Sols
                  (CSIC-UAM), Madrid, Spain; Univ of Cincinnati College of
                  Medicine, Cincinnati, OH, USA
                </em>
              </p>
              <p>
                Comprehensive review of autophagy mechanisms in *Dictyostelium*
                and its relevance as a model to understand basic autophagy
                processes relevant to human health.
              </p>
              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/27715405/">PubMed</a>
              </p>
            </div>
            <div className="publications-item">
              <h4>
                Dissecting the function of Atg1 complex in Dictyostelium
                autophagy reveals a connection with the pentose phosphate
                pathway enzyme transketolase
              </h4>
              <h5>2015 Aug</h5>
              <h5>Journal: Open Biology</h5>
              <p>
                <em>
                  Instituto de Investigaciones Biomédicas Alberto Sols,
                  CSIC/UAM, Madrid, Spain
                </em>
              </p>
              <p>
                Investigates the Atg1 complex in *Dictyostelium*, revealing
                novel interactions and potential metabolic regulation links
                between autophagy and the pentose phosphate pathway.
              </p>
              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/26246495/">PubMed</a>
              </p>
            </div>
            <div className="publications-item">
              <h4>Monitoring autophagy in Dictyostelium</h4>
              <h5>2013</h5>
              <h5>Journal: Methods in Molecular Biology</h5>
              <p>
                <em>
                  Instituto de Investigaciones Biomédicas Alberto Sols
                  (CSIC-UAM), Madrid, Spain
                </em>
              </p>
              <p>
                Methodological protocols for assessing autophagic flux and
                dynamics in *Dictyostelium* cells, including imaging techniques
                and confocal approaches.
              </p>
              <p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/23494324/">PubMed</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
