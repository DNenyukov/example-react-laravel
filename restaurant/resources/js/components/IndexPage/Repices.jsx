import React from 'react';
import Recipe from './Recipe';
import VideoArea from './VideoArea';

import axios from 'axios';

class Repices extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recipes: props.recipes,
            storage_url: props.storage_url
        }
    }

    render() {
        if (this.state.recipes.length !== 0) {
            const recipes = this.state.recipes.slice(0, 3);
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


                    <div className="latest_trand_area">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="trand_info text-center">
                                        <p>Thousands of recipes are waiting to be watched</p>
                                        <h3>Discover latest trending recipes</h3>
                                        <a href="#" className="boxed-btn3">View all Recipes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <VideoArea />
                </div>
            );
        } else {
            return (
                <span>Загрузка....  </span>
            );
        }
    }
}

export default Repices;
