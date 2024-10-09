import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Bulle1 from "./components/Bulle1.jsx";
import BulleTitre from "./components/BulleTitre.jsx";
import BulleCalIn from "./components/BulleCalIn.jsx";
import BulleCalOut from "./components/BulleCalOut.jsx";
import BulleTot from "./components/BulleTot.jsx";
import './TableauDeBord.css'; 

function TableauDeBord() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <div>TABLEAU DE BORD</div>
        <Bulle1>
          <BulleTitre title="Objectifs du jour" /> {/* Titre dans la bulle */}
          <div className="calorie-container">
            {" "}
            {/* Conteneur pour Cal In et Cal Out */}
            <BulleCalIn calories={2000} /> {/* Cal In avec 2000 calories */}
            <BulleCalOut calories={1500} /> {/* Cal Out avec 1500 calories */}
          </div>
        </Bulle1>
        <Bulle1>
          <BulleTitre title="Réalisation du jour" /> {/* Titre dans la bulle */}
          <div className="calorie-container">
            {" "}
            {/* Conteneur pour Cal In et Cal Out */}
            <BulleCalIn calories={2000} /> {/* Cal In avec 2000 calories */}
            <BulleCalOut calories={1500} /> {/* Cal Out avec 1500 calories */}
          </div>
        </Bulle1>
        <BulleTot balance={1500} />
      </div>
      <div className="buttoncontainer">
        <button type="button" className="btn btn-primary btn-lg">
          J’ai pris un repas
        </button>
        <button type="button" className="btn btn-primary btn-lg">
          J’ai fait du sport
        </button>
      </div>
      <Footer />
    </>
  );
}

export default TableauDeBord;
