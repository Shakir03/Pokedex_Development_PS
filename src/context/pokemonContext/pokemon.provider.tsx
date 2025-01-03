import React, { useReducer, useEffect, useRef, ReactNode } from 'react';
import { initialState, reducer } from '../../store/reducers/reducer';
import PokemonContext from './pokmon.context';
// import * as ACTIONS from "../../store/actions/pokemonAction";
import { allPokemonURL, initialURL } from '../../services/common.service';

// Define the types
interface PokemonProviderProps {
  children: ReactNode;
}

export interface PokemonResult {
  name: string;
  url: string;
}

export const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const batchURL = useRef(initialURL);
  const setAppLoading = (loading: boolean) => {
    dispatch({
      type: 'ACTIONS.SET_API_CALL_INPROGRESS',
      payload: loading,
    });
  };
  const setLoadMoreDataInprogress = (loading: boolean) => {
    dispatch({
      type: 'ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS',
      payload: loading,
    });
  };

  const getPokemonData = async (isReset = false) => {
    if (isReset) {
      batchURL.current = initialURL;
    }
    if (!batchURL.current) return;
    setLoadMoreDataInprogress(true);
    const resp = await fetch(batchURL.current);
    const { next, results } = await resp.json();

    batchURL.current = next;
    const pokemonsList = await getPokemonDetailsListByUrl(results);
    setPokemonList(pokemonsList);
    setLoadMoreDataInprogress(false);
  };

  const getPokemonDetailsListByUrl = async (results: PokemonResult[]) => {
    const pokemonsDetailsList = await Promise.all(
      results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const res = response.json();
        return res;
      })
    );
    return pokemonsDetailsList;
  };

  const getAllPokemonDataList = async () => {
    const resp = await fetch(allPokemonURL);
    const { results } = await resp.json();
    dispatch({
      type: 'ACTIONS.SET_ALL_POKEMON_LIST',
      payload: results,
    });
  };

  const setPokemonList = (pokemonsList: any[]) => {
    dispatch({
      type: 'ACTIONS.SET_POKEMON_LIST',
      payload: pokemonsList,
    });
  };

  useEffect(() => {
    getPokemonData().then(() => state.isLoading && setAppLoading(false));
    getAllPokemonDataList();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
        getPokemonData,
        getPokemonDetailsListByUrl,
        setAppLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
