import { screen, render, cleanup } from "@testing-library/react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import SelectComponent from "./select-component";

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('select component page', () => {
    test('render container', async() => {
        renderWithRedux(<Router><SelectComponent /></Router>);
        expect(await screen.findAllByRole('select-component-container')).toHaveLength(1);
    })

    test('render title', async() => {
        renderWithRedux(<Router><SelectComponent /></Router>);
        expect(await screen.findAllByRole('title')).toHaveLength(1);
    })
})

