import './App.css';
import Navmenu from './navbar';

function App() {
  return (
    <div>
      <ul>
        <li ><a class="active" href="#home">Poets.org</a></li>
        <li ><a href="#aap">Academy of American Poets</a></li>
        <li><a href="#npm">National Poetry Month</a></li>
        <li><a href="#about">American Poets Magazine</a></li>
        <li class="right red">Donate</li>
        <li class="right blue">Membership</li>
        <li class="right">Login</li>


      </ul>

      <div class="bg">
        <b>
          <p id="heading">poets<span id="org">.org</span></p>
          <p id="caption">"Without poetry, we lose our way."</p>
          <p id="name">—Joy Harjo, U.S. Poet Laureate & Academy of American Poets Chancellor (2019– )</p>
        </b>
      </div>
      <div class="container">
        <div class="george">
          <h3><a href="/poet/george-abraham" class="text-white" target="_self">George Abraham</a></h3>
          <img src="https://api.poets.org/sites/default/files/styles/poem_a_day_portrait/public/images/biographies/GeorgeAbraham_NewBioImage_0.png?itok=lmtAZFUL" class="img-fluid" ></img>
        </div>
        <div id="poemtext">
          <p id="poemname">Searching for a Palestinian<p> Necropastoral (Eve)</p>
          </p>
          <p>& I found it at the bottom of an american river—& in
            the leaves which gathered at its surface’s semblance
            of stillness, appearing & not so, as if endless</p>

          <p>though counted for, & I found it not in the beams
            of light, but how, electric & frantic, they danced beneath
            the water, like a choreography preceding any notion of</p>

          <p>body, or unknowable twins returning to the half-self
            they could have never imagined & I found it in that half
            -liminal light, divined into fractal’s endless—before split </p>

          <p>& risen, before splay & tempt, before </p>
          <input type="button" id="button" value="read the rest" onClick="document.getElementById('hideaway').style.display='block';"></input>
        </div>
      </div>
      <div class="poems">
        
      </div>
      
    </div>
  );
}

export default App;
