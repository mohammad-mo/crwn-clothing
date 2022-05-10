import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import {
  selectCategoriesMap,
  selectIsLoading,
} from '../../store/categories/categories.selector'

import ProductCard from '../../components/product-card/product-card.component'
import Spinner from '../../components/spinner/spinner.component'

import './category.styles.scss'

const Category = () => {
  const { category } = useParams()
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectIsLoading)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2 className='category-title'>{category.toUpperCase()}</h2>
          <div className='category-container'>
            {products &&
              React.Children.toArray(
                products.map((product) => <ProductCard product={product} />),
              )}
          </div>
        </>
      )}
    </>
  )
}

export default Category
