import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: props.recipe,
            storage_url: props.storage_url
        }
    }

    render() {
        const recipe = this.state.recipe;
        const storage_url = this.state.storage_url;

        return (
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="single_recepie text-center">
                    <div className="recepie_thumb">
                        <img src={storage_url + recipe.img} alt="" />
                    </div>
                    <h3>{recipe.title}</h3>
                    <span>{recipe.body}</span>
                    <p>Time Needs: {recipe.time_needs} Mins</p>
                    <a href="#" className="line_btn">View Full Recipe</a>
                </div>
            </div>
        );
    }
}

export default Recipe;
