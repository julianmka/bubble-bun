import { h, app } from "hyperapp";
import { withFx, http, action } from "@hyperapp/fx";

const state = { 
  goldie: "" 
}

const actions = {
  fetchGoldie: () => http("https://dog.ceo/api/breed/retriever/golden/images/random", "goldieFetched"),
  goldieFetched: data => ({ goldie: data.message })  
}

const view = state => 
  <div className="page">
    <div className="header">
      <h2>The Goldie Generator</h2>
      <div class="glitchButton"></div>
      <script src="https://button.glitch.me/button.js"></script>
    </div>
    <div className="image">
      <img src={state.goldie} alt="a majestic golden retriever"/>
    </div>
    <div className="button">
      <button className="button__goldie" onclick={action("fetchGoldie")}>New Goldie!</button>
    </div>
    <div className="footer">
      <p>
       Goldies provided by <a href="https://dog.ceo/dog-api/">dog.ceo API</a>. 
       Code @<a href="https://glitch.com/edit/#!/bubble-bun">Glitch</a>,
       remixed from <a href="https://corgi-button.glitch.me">Corgi Button</a>
      </p>
    </div>
  </div>

withFx(app)(state, actions, view, document.body).fetchGoldie()