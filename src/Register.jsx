import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import './Register.css'; // Import du fichier CSS spécifique

function Register() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <form className="form-register">
          <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">Adresse Email</label>
            <input type="email" id="form2Example1" className="form-control" placeholder="Adresse Email" />
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">Mot de passe</label>
            <input type="password" id="form2Example2" className="form-control" placeholder="Mot de passe" />
          </div>

          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                <label className="form-check-label" htmlFor="form2Example31"> Se souvenir de moi </label>
              </div>
            </div>

            <div className="col text-end">
              <a href="#!">Mot de passe oublié?</a>
            </div>
          </div>

          <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4 w-100">Se connecter</button>

          <div className="text-center">
            <p>Pas encore menbre? <a href="#!">S'inscrire</a></p>
            <p>ou se connecter avec:</p>
            <div className="social-buttons d-flex justify-content-center">
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Register;
