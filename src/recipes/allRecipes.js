import React from 'react'
import "./allrecipes.css"
import { RecipeCards } from '../components/cards'
// import { db } from '../firebase'
// import { Link } from 'react-router-dom'

const AllRecipes = () => {
  return (
    <section className="all-recipes">
      <div className="filter">

      </div>
      <div className="recipes-body-section">
        <div className="search-bar-container">
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" className='input-field' />
          </div>
          <div className="filter-container">
            <button className="btn btn-add">FILTER <i className="fa-solid fa-filter"></i></button>
          </div>
        </div>
        <div className="all-recipes-container">
          <div className="recipe-cards-container">
            <RecipeCards />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllRecipes