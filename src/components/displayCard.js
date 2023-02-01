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
