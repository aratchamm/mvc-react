import React, { Component } from 'react';
import './Home.css';


export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div class="container-fluid">

        <div class="row">
          <div class="col text-center" id="navLeft">
            <div class="profile">
              <img id="profileIMG" src="https://sv1.picz.in.th/images/2023/04/22/yz2U39.jpg"></img>
              <div class="Info">
                <p>
                  <span id="editInfo"><span class="material-symbols-outlined">edit</span>edit</span><br />
                  <span id="nameInfo">Name Name</span><br />
                  <span id="telInfo">088-888-8888</span><br />
                </p>
              </div>
            </div>
          </div>
          <div class="col-8 text-center" id="navCenter">
          <div id="compo" class="container">
          
          <img class="picCom" src="https://www.workitdaily.com/media-library/man-updates-his-linkedin-profile.jpg?id=27003617"></img>
          <p>fsafsa</p>
          <img class="plus" src="https://sv1.picz.in.th/images/2023/04/24/yfGoil.png"></img>
          </div>
          </div>
          <div class="col text-center" id="navRight">
            text3
          </div>
        </div>
      </div>
    );
  }
}
