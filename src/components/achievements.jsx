import React from "react";

function Achievements() {
  return (
    <div id="achievements" className="container section-margin mt-5">
      <h2 className="text-center mb-4">Achievements</h2>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
          <div className="card-achievement">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(85.2% .199 91.936)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trophy h-6 w-6"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <div className="card-title">
              Winner of CDU ITCodeFair Coding Competition
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card-achievement">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(0.7 0.16 253.42)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trophy h-6 w-6"
                aria-hidden="true"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <div className="card-title">Runner-up in GovHack 2023</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card-achievement">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(0.8 0.21 151.72)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-award h-6 w-6"
                aria-hidden="true"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <div className="card-title">CompTIA A+ Certification</div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="card-achievement">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(51.1% .262 276.966)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-book-open h-6 w-6"
                aria-hidden="true"
              >
                <path d="M12 7v14"></path>
                <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
              </svg>
            </div>
            <div className="card-title">
              Excellence Award in TAFENSW for Bachelor Degree
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Achievements;
