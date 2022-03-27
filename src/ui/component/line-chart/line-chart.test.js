import { screen, render, cleanup } from "@testing-library/react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import LineChart from "./line-chart";

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('line chart component', () => {
    test('render container', async () => {
        renderWithRedux(<Router><LineChart /></Router>);
        expect(await screen.findAllByRole('line-chart-container')).toHaveLength(1);
    })

    test('render chart', async () => {
        renderWithRedux(<Router><LineChart /></Router>);
        expect(await screen.findAllByRole('chart')).toHaveLength(1);
    })

    test('render canvas', async () => {
        renderWithRedux(<Router><LineChart /></Router>);
        expect(await screen.findAllByRole('canvas')).toHaveLength(1);
    })

})

