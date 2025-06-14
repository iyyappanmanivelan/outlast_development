import React from "react";

function Scoreboard({ table }) {
  return (
    <section className="updown-space scorebg position-relative">
      <div className="overlay6 position-absolute" style={{left:"0px"}}></div>
      <div className="position-absolute w-100 " style={{left:"0px"}}>
        <div className="container">
        <div className="getknow d-flex align-items-center justify-content-center gap-3"
         data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000">
          <div className="fticon">
            <img src="\assets\football-og.png" className="img-fluid" />
          </div>
          <div className="gt-title ">
            <h4 className="m-0 cg ">Scoreboard</h4>
          </div>
        </div>
        <div class="accordion   mt-5 pt-md-5" id="accordionExample">
          <div class="accordion-item ">
            <h2 class="accordion-header" id="headingOne">
              <div
                class="accordion-button w-100"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                under 9
              </div>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show overflow-x-scroll "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body " style={{width:"1300px"}}>
                <table>
                  <thead>
                    <th>Teams</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Lose</th>
                    <th>Draw</th>
                    <th>GD</th>
                    <th>Points</th>
                  </thead>
                  <tbody className="scoreboard">
                    {table?.under9?.map((data) => (
                      <tr>
                        <td>{data?.name}</td>
                        <td>{data?.played}</td>
                        <td>{data?.win}</td>
                        <td>{data?.lose}</td>
                        <td>{data?.draw}</td>
                        <td>{data?.gd}</td>
                        <td>{data?.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <div
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Under 11
              </div>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse overflow-x-scroll"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={{width:"1300px"}}>
                <table>
                  <thead>
                    <th>Teams</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Lose</th>
                    <th>Draw</th>
                    <th>GD</th>
                    <th>Points</th>
                  </thead>
                  <tbody className="scoreboard">
                    {table?.under11?.map((data) => (
                      <tr>
                        <td>{data?.name}</td>
                        <td>{data?.played}</td>
                        <td>{data?.win}</td>
                        <td>{data?.lose}</td>
                        <td>{data?.draw}</td>
                        <td>{data?.gd}</td>
                        <td>{data?.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <div
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Under 13
              </div>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse overflow-x-scroll"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={{width:"1300px"}}>
                <table>
                  <thead>
                    <th>Teams</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Lose</th>
                    <th>Draw</th>
                    <th>GD</th>
                    <th>Points</th>
                  </thead>
                  <tbody className="scoreboard">
                    {table?.under13?.map((data) => (
                      <tr>
                        <td>{data?.name}</td>
                        <td>{data?.played}</td>
                        <td>{data?.win}</td>
                        <td>{data?.lose}</td>
                        <td>{data?.draw}</td>
                        <td>{data?.gd}</td>
                        <td>{data?.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingfour">
              <div
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Under 15
              </div>
            </h2>
            <div
              id="collapsefour"
              class="accordion-collapse collapse overflow-x-scroll"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body" style={{width:"1300px"}}>
                <table>
                  <thead>
                    <th>Teams</th>
                    <th>Played</th>
                    <th>Win</th>
                    <th>Lose</th>
                    <th>Draw</th>
                    <th>GD</th>
                    <th>Points</th>
                  </thead>
                  <tbody className="scoreboard">
                    {table?.under15?.map((data) => (
                      <tr>
                        <td>{data?.name}</td>
                        <td>{data?.played}</td>
                        <td>{data?.win}</td>
                        <td>{data?.lose}</td>
                        <td>{data?.draw}</td>
                        <td>{data?.gd}</td>
                        <td>{data?.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Scoreboard;
