// import * as ACTIONS from "../../store/actions/pokemonAction";

import { PokemonResult } from '../../context/pokemonContext/pokemon.provider';

// export interface PokemonContextType {
//   state: PokemonState;
//   dispatch: React.ActionDispatch<[action: PokemonAction]>;
//   getPokemonData: (isReset?: boolean) => Promise<void>;
//   getPokemonDetailsListByUrl: (results: PokemonResult[]) => Promise<any[]>;
//   setAppLoading: (loading: boolean) => void;
// }

interface PokemonState {
  pokemonsList: any[];
  allPokemonsList: any[];
  pokemonSelectedId: number | null;
  pokemonData: any | null;
  isLoading: boolean;
  isLoadMoreInprogress: boolean;
  pokemonsTypes: any[];
  pokemonGenderList: any[];
}

interface PokemonAction {
  type: string;
  payload?: any;
}

export const initialState: PokemonState = {
  pokemonsList: [],
  allPokemonsList: [],
  pokemonSelectedId: null,
  pokemonData: null,
  isLoading: true,
  isLoadMoreInprogress: false,
  pokemonsTypes: [],
  pokemonGenderList: [],
};

export const reducer = (state: PokemonState, action: PokemonAction) => {
  switch (action.type) {
    case 'ACTIONS.SET_POKEMON_LIST':
      return {
        ...state,
        pokemonsList: [...state.pokemonsList, ...action.payload],
      };
    case 'ACTIONS.SET_ALL_POKEMON_LIST':
      return {
        ...state,
        allPokemonsList: action.payload,
      };
    case 'ACTIONS.SET_FILTERED_POKEMON_LIST':
      return {
        ...state,
        pokemonsList: action.payload,
      };
    case 'ACTIONS.SET_POKEMON_TYPE':
      return {
        ...state,
        pokemonsTypes: action.payload,
      };

    case 'ACTIONS.SET_POKEMON_GENDER_LIST':
      return {
        ...state,
        pokemonGenderList: action.payload,
      };

    case 'ACTIONS.SET_API_CALL_INPROGRESS':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'ACTIONS.SET_LOAD_MORE_API_CALL_INPROGRESS':
      return {
        ...state,
        isLoadMoreInprogress: action.payload,
      };

    case 'ACTIONS.SET_POKEMON_BY_ID':
      return {
        ...state,
        pokemonData: action.payload,
      };
    case 'ACTIONS.RESET_POKEMON_DATA':
      return {
        ...state,
        pokemonData: null,
      };
    case 'ACTIONS.SET_POKEMON_ID':
      return {
        ...state,
        pokemonSelectedId: action.payload,
      };

    default:
      return state;
  }
};
