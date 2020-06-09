import React from 'react';
import Header from './Header/Header';
import Index from './IndexPage/Index';
import AboutPage from './AboutPage/Index';
import RecipesPage from './RecipesPage/Index';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storage_url: process.env.MIX_STORAGE_URL,
            app_url: process.env.MIX_APP_URL,
            recipes: []
        }
    }

    componentDidMount() {
        const self = this;
        axios.get('recipes')
            .then(function (response) {
                self.setState({
                    recipes: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const storage_url = this.state.storage_url;
        const app_url = this.state.app_url;
        const recipes = this.state.recipes;

        return (
            <BrowserRouter>
                <Header />
                <Route
                    path={'/'} exact
                    component={props => <Index {...props} storage_url={storage_url} app_url={app_url} recipes={recipes}/>}
                />
                <Route
                    path={'/about'}
                    component={props => <AboutPage {...props} storage_url={storage_url} app_url={app_url} recipes={recipes}/>}
                />
                <Route
                    path={'/recipes'}
                    component={props => <RecipesPage {...props} storage_url={storage_url} app_url={app_url} recipes={recipes} />}
                />
            </BrowserRouter>
        );
    }
}

export default App;
