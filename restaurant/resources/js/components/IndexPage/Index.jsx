import React from 'react';
import Repices from './Repices';
import Feedback from './Feedback';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            storage_url: props.storage_url,
            recipes: props.recipes
        }
    }

    render() {
        const storage_url = this.state.storage_url;
        const recipes = this.state.recipes;

        return (
            <div>
                <Repices storage_url={storage_url} recipes={recipes}/>
                <Feedback />
            </div>
        );
    }
}

export default Index;
