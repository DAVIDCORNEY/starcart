import { createSlice, current, nanoid } from '@reduxjs/toolkit'

const createFave = (fave, name) => ({
	id: nanoid(),
	rating: 5,
	name,
	...fave,
})
const initialState = []

export const favesSlice = createSlice({
	name: 'faves',
	initialState,
	reducers: {
		addFave: (state, action) => {
			const nameOfFave = action.payload.name ? action.payload.name : action.payload.title ? action.payload.title : 'no name'
			const existingFave = state.find(({name}) => name === nameOfFave);
			if(!existingFave) {
				const fave = createFave(action.payload, nameOfFave)
				state.push(fave)
			} else {
				alert('Sorry, you cannot add the same Fave more than once');
			}
		},
		updateFave: (state, action) => {
			// find fave
			// update fave with array of ids if none exists,
			// or add related id if doesn't exist in array already
			// return state
		},
		rateFave: (state, action) => {
			const {faveId, rating} = action.payload;
			// find fave
			const fave = state.find(({id}) => id === faveId);
			// update new on that fave
			const ratedFave = {...fave,rating};
			// return state
			return state.map(fave => {
				if(fave.id === faveId) {
					return ratedFave;
				}
				return fave;
			});
		},
		removeFave: (state, action) => {
			return state.filter(({id}) => id !== action.payload)
			/*
			 ! remove fave code here */
			/*
			 * make sure to return the whole state because it's just a single array of faves */
			// return state.???
		},
	},
})

export const { addFave, removeFave, rateFave } = favesSlice.actions
export const selectFaveState = state => state.faves
