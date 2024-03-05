

function citiesReducer(state, action) {

    switch (action.type) {
        case 'loading':
            return { ...state, isLoading: true };
        case 'loaded':
            return { ...state, isLoading: false, cities: action.payload }
        case 'addCity':
            return { ...state, cities: [...state.cities, action.payload] }
        case 'deleteCity':
            return { ...state, cities: state.cities.filter(city => city.id !== action.payload) }
        case 'rejected':
            return { ...state, isLoading: false, error: action.payload }
        default:
            return state;
    }

}

export default citiesReducer; 