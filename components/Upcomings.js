import React from "react";

const Upcomings = ({ Upcomings }) => {
  console.log(Upcomings);
  return (
    <div className="row py-2">
      <div className="col-2 col-sm-1 col-md-3 col-lg-2 py-1 pe-md-0 mb-md-1">
        <div className="d-inline-block d-md-block bg-primary text-white text-center breaking-caret py-1 px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            fill="currentColor"
            className="bi bi-lightning-fill"
            viewBox="0 0 16 16"
          >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
          </svg>
          <span className="d-none d-md-inline-block">Upcommings...</span>
        </div>
      </div>

      <div className="col-10 col-sm-11 col-md-9 col-lg-10 ps-1 ps-md-2">
        <div className="breaking-box position-relative py-2">
          <div
            className="box-carousel"
            data-flickity='{ "cellAlign": "left", "wrapAround": true, "adaptiveHeight": true, "prevNextButtons": true , "autoPlay": 5000, "pageDots": false, "imagesLoaded": true }'
          >
            {Upcomings.data.map((upc) => {
              return (
                <div className="col-12 aribudin" key={upc.id}>
                <a className="h6 fw-normal" href="#">
                  {upc.attributes.title}
                </a>
              </div>
              )
            })}
         

            {/* <div className="col-12 aribudin">
              <a className="h6 fw-normal" href="#">
                Investors Betting Against Tesla Made $1 Billion on Friday
              </a>
            </div>

            <div className="col-12 aribudin">
              <a className="h6 fw-normal" href="#">
                Carmelo Anthony Officially Signs with the Houston Rockets
              </a>
            </div>

            <div className="col-12 aribudin">
              <a className="h6 fw-normal" href="#">
                Lemon make your skin fresh and glowing
              </a>
            </div>

            <div className="col-12 aribudin">
              <a className="h6 fw-normal" href="#">
                5 Takeaways From Elon Musk???s Interview With The Times About
                Tesla
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcomings;
