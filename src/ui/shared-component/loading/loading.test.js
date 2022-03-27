import { screen, render, cleanup } from "@testing-library/react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from "./loading";

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('loading page', () => {
    test('render container', async() => {
        renderWithRedux(<Router><Loading /></Router>);
        expect(await screen.findAllByRole('container')).toHaveLength(1);
    })

    test('render overlayPage', async() => {
        renderWithRedux(<Router><Loading /></Router>);
        expect(await screen.findAllByRole('overlayPage')).toHaveLength(1);
    })
})

