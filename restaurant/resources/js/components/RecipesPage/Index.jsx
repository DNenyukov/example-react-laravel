import React from 'react';
import Recipe from '../IndexPage/Recipe';

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: props.recipes,
            storage_url: props.storage_url,
        }
    }

    render() {
        if (this.state.recipes.length !== 0) {
            const recipes = this.state.recipes;
            const storage_url = this.state.storage_url;
            return (
                <div>
                    <div className="recepie_area">
                        <div className="container">
                            <div className="row">
                                {
                                    recipes.map(recipe =>
                                        <Recipe
                                            recipe={recipe}
                                            storage_url={storage_url}
                                            key={recipe.id}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <span>Загрузка....  </span>
            );
        }
    }
}

export default Index;
