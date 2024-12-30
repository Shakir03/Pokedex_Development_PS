import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import 'rsuite/styles/index.less';
import 'rsuite/dist/rsuite.min.css';
import { ROUTES } from './constants/routepaths';
import { PokemonProvider } from './context/pokemonContext/pokemon.provider';
const HomePage = React.lazy(() => import('./pages/home/home.page'));
// const DetailPage = React.lazy(() => import('./pages/details/details.page'));

function App() {
  // const [isCardSelected, setIsCardSelected] = useState(false);
  // const [pokemonId, setPokemonId] = useState(1); // Default to 1 or any valid ID
  // const offset = 100; // Example offset, adjust as needed

  // const toggleModal = () => {
  //   setIsCardSelected(!isCardSelected);
  // };
  return (
    <>
      <main>
        <PokemonProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path={ROUTES.HOME}
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <HomePage />
                  </Suspense>
                }
              />
              {/* <Route
                path={ROUTES.DETAILS}
                element={
                  <Suspense fallback={<div>Loading</div>}>
                    <DetailPage isCardSelected={isCardSelected} toggleModal={toggleModal} pokemonId={pokemonId} offset={offset} />
                  </Suspense>
                }
              /> */}
            </Routes>
          </BrowserRouter>
        </PokemonProvider>
      </main>
    </>
  );
}

export default App;
