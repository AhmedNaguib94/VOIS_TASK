import { LOADING, SET_CAMP, SET_CHART_DATA, SET_COUNTRY, SET_SCHOOL, SET_TOTAL_LESSONS, TOGGLE_CHART } from "./actions"

const reducer = (state = initialState(), action: any) => {
    if (action.type === LOADING) {
        return {
            ...state,
            loading: !state.loading
        }
    } else if (action.type === SET_CHART_DATA) {
        return {
            ...state,
            chartDataSet: Object.values(action.payload),
            originalDataSet: Object.values(action.payload),
        }
    } else if (action.type === TOGGLE_CHART) {
        return {
            ...state,
            chartDataSet: Object.values(action.payload),
        }
    } else if (action.type === SET_COUNTRY) {
        return {
            ...state,
            selectedCountry: action.payload,
        }
    } else if (action.type === SET_CAMP) {
        return {
            ...state,
            selectedCamp: action.payload,
        }
    } else if (action.type === SET_SCHOOL) {
        return {
            ...state,
            selectedSchool: action.payload,
        }
    } else if (action.type === SET_TOTAL_LESSONS) {
        return {
            ...state,
            totalLessons: action.payload,
        }
    }
    return state
}

const initialState = () => {
    return {
        loading: false,
        chartDataSet: [],
        originalDataSet: [],
        selectedCountry: '',
        selectedCamp: '',
        selectedSchool: '',
        totalLessons: 0
    }
}

export default reducer;