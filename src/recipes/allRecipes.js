import React, { useState, useEffect } from 'react'
import "./allrecipes.css"
import { RecipeCards, NoItemFound, DetailedRecipe, SampleCard } from '../components/cards'
import { db } from '../firebase'
import { collection, query, onSnapshot } from "firebase/firestore";

const AllRecipes = () => {
  const [recettes, setRecettes] = useState([])
  const [displayItems, setDisplayItems] = useState([])
  const [filterValue, setFilterValue] = useState('')
  const [selectedRecipes, setSelectedRecipes] = useState([])
  const [renderTrigger, setRenderTrigger] = useState(false)

  useEffect(() => {
    const q = query(collection(db, 'recipes'))
    const unsubscribe = onSnapshot(q, snapshot => {
      let recipesArr = []
      snapshot.forEach(doc => {
        recipesArr.push({ ...doc.data(), id: doc.id })
      })

      setRecettes(recipesArr)
      setDisplayItems(recipesArr)
    })

    // let names = recettes.filter(rec => rec.title.toLowerCase().includes("deez"))
    // console.log(names)
  }, [])

  const handleFilter = (e) => {
    setFilterValue(e.target.value)

    if (e.target.value === '') {
      setDisplayItems(recettes)
    } else {
      let filterResult = recettes.filter(item => item.title.toLowerCase().replace(" ", "").includes(e.target.value.toLowerCase().replace(" ", "")))
      setDisplayItems(filterResult)
    }
  }

  useEffect(() => {
    if (selectedRecipes.length > 0) {
      console.log(selectedRecipes)
    } else {
      console.log(typeof selectedRecipes)
    }
  }, [selectedRecipes])
  return (
    <section className="all-recipes">
      {(!(selectedRecipes.length === 0)) ? <DetailedRecipe procedure={selectedRecipes.procedure} title={selectedRecipes.title} author={selectedRecipes.author} ingredients={selectedRecipes.ingredients} clickMethod={() => { setSelectedRecipes([]) }} /> : null}
      <div className="filter">

      </div>
      <div className={((selectedRecipes.length === 0)) ? "recipes-body-section" : "invisible"}>
        <div className="search-bar-container">
          <div className="search-bar">
            <input type="text" value={filterValue} className='input-field' onChange={(e) => { handleFilter(e) }} />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="filter-container">
            <button className="btn btn-add">FILTER <i className="fa-solid fa-filter"></i></button>
          </div>
        </div>
        <div className="all-recipes-container">
          <div className="recipe-cards-container">
            {(displayItems.length == 0) ? <NoItemFound /> : displayItems.map((item, index) => { return (<RecipeCards title={item.title} author={item.author} id={item.id} clickMethod={() => { setSelectedRecipes(item) }} />) })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllRecipes