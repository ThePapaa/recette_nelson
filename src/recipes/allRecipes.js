import React from 'react'
import { db } from '../firebase'
import { Link } from 'react-router-dom'

const AllRecipes = () => {
  return (
    <section className="recipe-add-section">
      <div className="main-section">
        <div className="section-head">
          <h1>ALL RECIPES</h1>
          <div className="nav-btn-holder">
            <Link to='/recipes'> <button className="btn-navigate">CREATE A RECIPE</button></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllRecipes