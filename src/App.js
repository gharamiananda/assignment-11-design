import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div >
      <div class="bg">

        {/* <!-- Preloader --> */}
        <div class="preloader">
          <div class="centrize full-width">
            <div class="vertical-center">
              <div class="spinner-logo">
                <img src="images/logo.png" alt="" />
                <div class="spinner-dot">
                  <div class="spinner-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Head/er --> */}
        <Home />




      </div>
    </div>
  );
}

export default App;
