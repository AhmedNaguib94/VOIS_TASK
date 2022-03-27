import { screen, render, cleanup } from "@testing-library/react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import ChartDetails from "./chart-details";

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('chart details page', () => {
    test('render container', async() => {
        renderWithRedux(<Router><ChartDetails /></Router>);
        expect(await screen.findAllByRole('chart-details-container')).toHaveLength(1);
    })

    test('render elements', async() => {
        renderWithRedux(<Router><ChartDetails /></Router>);
        expect(await screen.findAllByRole('element')).toHaveLength(5);
    })
})

