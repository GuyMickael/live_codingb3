import { useState } from "react";
import "./App.css";
import TrainerForm from "./components/TrainerFrom";
import type { ITrainer } from "./types/trainer.type";
import TrainerSelector from "./components/TrainerSelector";
import BaasicPokemonList from "./components/BaasicPokemonList";
import { Link } from "react-router-dom";

function App() {
  const [arrayOfTrainers, setArrayOfTrainers] = useState<ITrainer[]>([]);

  return (
    <>
      <TrainerSelector arrayOfTrainers={arrayOfTrainers} />
      <TrainerForm getter={arrayOfTrainers} setter={setArrayOfTrainers} />
      <Link to="/login">Go to Login Page With link</Link>
      <br />
      <a href="/login">Go to Login Page With anchor tag</a>
    </>
  );
}

export default App;
