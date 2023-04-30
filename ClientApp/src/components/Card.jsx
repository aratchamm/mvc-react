import React from "react";

const Data = ({ imgCilentSrc, imgCilentSrc2, imgCilentSrc3, Header }) => {
  return (
    <div id="compo" class="container mb-5">
      <img
        class="picCom"
        src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"
      ></img>
      <div class="p-2">
        <h3>{Header}</h3>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-8">
           {/* Render the first profile picture if available */}
           {imgCilentSrc && <img className="photoCol" src={imgCilentSrc} alt="profile pic" />}
{/* Render the second profile picture if available */}
{imgCilentSrc2 && <img className="photoCol" src={imgCilentSrc2} alt="profile pic" />}
{/* Add a placeholder image if there are more than 2 profile pictures */}
{imgCilentSrc3 && <img className="photoCol" src='https://sv1.picz.in.th/images/2023/04/24/ykJ4XJ.png' alt="profile pic" />}
        
          </div>

          <div class="col-4">
          <img
              class="plus"
              src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"
            ></img>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Data;
