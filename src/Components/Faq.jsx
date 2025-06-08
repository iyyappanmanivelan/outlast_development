import React from "react";

function Faq({ data , branch}) {
  return (
    <section className="updown-space bgframe2">
      <div className="container">
        <div className="getknow d-flex align-items-center justify-content-center gap-3" 
         data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg ">Training Program FAQs</h4>
          </div>
        </div>
        <div class="accordion mt-5 pt-md-5" id="accordionExample">
          {data.map((faq , i) => (
            <div class="accordion-item ">
              <h2 class="accordion-header" id="headingOne">
                <div
                  class="accordion-button w-100 faqqes"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseOne${i}`}
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                 {faq?.id}. {faq?.question}
                </div>
              </h2>
              <div
                id={`collapseOne${i}`}
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body faqans">
                    {faq?.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
