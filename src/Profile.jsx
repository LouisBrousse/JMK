import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import DatePickerComponent from "./components/DatePickerComponent.jsx";
import "./Profile.css"; // Import du CSS personnalisé

function Profile() {
  return (
    <div id="page-content">
      <Header />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Profil Utilisateur</h2>
        
        <div className="row">
          {/* Colonne gauche */}
          <div className="col-md-6 mb-4">
            <label htmlFor="floatingInput" className="form-label">Date de naissance</label>
            <DatePickerComponent />
          </div>

          {/* Colonne droite */}
          <div className="col-md-6 mb-4">
            <label htmlFor="weightInput" className="form-label">Poids (kg)</label>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="weightInput"
                placeholder="70"
              />
              <label htmlFor="weightInput">Poids (kg)</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="heightInput" className="form-label">Taille (cm)</label>
            <div className="form-floating">
              <input
                type="number"
                className="form-control"
                id="heightInput"
                placeholder="170"
              />
              <label htmlFor="heightInput">Taille (cm)</label>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <label htmlFor="activityLevel" className="form-label">Niveau d'activité physique</label>
            <select className="form-select" id="activityLevel">
              <option selected>Quel est votre niveau d'activité physique?</option>
              <option value="1">Niveau 1: Sédentaire</option>
              <option value="2">Niveau 2: Sportif Occasionnel</option>
              <option value="3">Niveau 3: Sportif intensif</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <label htmlFor="goal" className="form-label">Objectif</label>
            <select className="form-select" id="goal">
              <option selected>Quel est votre objectif?</option>
              <option value="1">Perte de poids</option>
              <option value="2">Maintien</option>
              <option value="3">Gain de poids</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
