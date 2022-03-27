import { screen, render, cleanup } from "@testing-library/react"
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../../../core/store/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import LessonsDetails from "./lessons-details";

afterEach(cleanup);

const renderWithRedux = (
    component,
    {initialState, store = createStore(reducer, initialState)} = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>)
    }
}

describe('lessons details component', () => {
    test('render container', async () => {
        renderWithRedux(<Router><LessonsDetails /></Router>);
        expect(await screen.findAllByRole('container')).toHaveLength(1);
    })

    test('render list', async () => {
        renderWithRedux(<Router><LessonsDetails /></Router>);
        expect(await screen.findAllByRole('list')).toHaveLength(1);
    })

})

