import React, { useState } from "react";

const Data = ({ imgCilentSrc, imgCilentSrc2, imgCilentSrc3, Header }) => {

  return (
    <div id="compo" className="container mb-5">
      <img
        className="picCom"
        src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"
      ></img>
      <div className="p-2">
        <h3>{Header}</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {/* Render the first profile picture if available */}
            {imgCilentSrc && (
              <img className="photoCol" src={imgCilentSrc} alt="profile pic" />
            )}
            {/* Render the second profile picture if available */}
            {imgCilentSrc2 && (
              <img className="photoCol" src={imgCilentSrc2} alt="profile pic" />
            )}
            {/* Add a placeholder image if there are more than 2 profile pictures */}
            {imgCilentSrc3 && (
              <img
                className="photoCol"
                src="https://sv1.picz.in.th/images/2023/04/24/ykJ4XJ.png"
                alt="profile pic"
              />
            )}
          </div>

          <div className="col-4">
            <img
              className="plus"
              src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"
            ></img>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Data;
