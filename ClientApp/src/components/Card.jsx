import React from "react";

const Data = ({ imgCilentSrc, imgCilentSrc2, Header }) => {
  return (
    <div id="compo" class="container">
              <img class="picCom" src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"></img>
              <div class="p-2"><h3>{Header}</h3></div>
              <div class="container">
                <div class="row">
                  <div class="col-8">
                    {/* เพิ่มโปรไฟล์คนมาถ้ามีคนสั่งเพิ่ม */}
                    <img class="photoCol" src={imgCilentSrc}></img>
                    <img class="photoCol" src={imgCilentSrc2}></img>
                    {/* ถ้าคนสั่งเพิ่มมากกว่า 3 คน */}
                    <img class="photoCol" src="https://sv1.picz.in.th/images/2023/04/24/ykJ4XJ.png"></img>
                  </div>
                  <div class="col-sm">
                  <img class="plus" src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"></img>
                  </div>
                </div>
              </div>

            </div>
  );
};

export default Data;