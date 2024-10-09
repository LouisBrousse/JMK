import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Bulle1 from "./components/Bulle1.jsx";

function Nutrition() {
    return (
      <>
        <Header />
        <div className="container mt-5">
        <div>NUTRITION</div>
        <Bulle1>
          <h2>Prise de nourriture en</h2> {/* Titre h2 */}

          {/* Inputs pour la date et l'heure */}
          <div className="input-group">
            <input type="date" className="form-control" placeholder="jj/mm/aaaa" />
            <input type="time" className="form-control" placeholder="hh:mm" />
          </div>

          {/* Input pour l'aliment/plat */}
          <div className="form-group mt-3">
            <label htmlFor="aliment">Aliment/Plat</label>
            <input type="text" id="aliment" className="form-control" placeholder="Aliment/Plat" />
          </div>

          {/* Input pour le poids */}
          <div className="form-group mt-3">
            <label htmlFor="poids">Poids (g)</label>
            <input type="number" id="poids" className="form-control" placeholder="Poids en g" />
          </div>

          {/* Bouton de validation */}
          <button type="button" className="btn btn-success mt-3">Valider</button>
        </Bulle1>
      </div>
        <Footer />
      </>
    );
  }
  
  export default Nutrition;
  