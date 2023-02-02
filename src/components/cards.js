import "./components.css";

export const DietCards = (props) => {
    return (
        <div className={`diet-card ` + props.cardMode}>
            <button
                onClick={props.method}
                type="button"
                className={"btn-diet " + props.buttonMode}
            >
                {props.buttonMode === "button-normal" ? (
                    "ADD"
                ) : (
                    <i className="fa-solid fa-trash-can"></i>
                )}
            </button>
            <img className="diet-image" src={props.image} alt="" />
            <h3>{props.name}</h3>
        </div>
    );
};

export const DisplayCard = () => {
    return (
        <div className="pick-of-week">
            <div className="left-card">
                <div className="card-head">
                    <h4>PICK OF THE WEEK</h4>
                </div>
                <div className="recipe-contents">
                    <h2 className="recipe-title">Maggie's Shawarma</h2>
                    <p className="recipe-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio natus
                        magni non expedita ea nemo voluptatibus vitae sunt? Non blanditiis
                        cum explicabo necessitatibus quasi ex voluptate praesentium laborum
                        voluptates nostrum!
                    </p>
                    <button className="btn btn-recipe">VIEW FULL RECIPE</button>
                </div>
            </div>
            <div className="right-card">
                <img
                    src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
            </div>
        </div>
    );
};


export const RecipeCards = (props) => {

    return (
        <div className="recipe-card">
            <div className="contents-wrapper">
                <div className="card-title">
                    <h2>RICE BEEF</h2>
                </div>
                <div className="card-preferences">
                    <img src='https://cdn-icons-png.flaticon.com/512/4491/4491013.png' alt="" className="preference-img" />
                </div>
                <div className="card-contents">
                    <div className="card-rating">
                        <p>by Ronald</p>
                    </div>
                    <div className="card-btn">
                        <button >view recipe</button>
                    </div>
                </div>
            </div>
        </div>

    )

}