import React, { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card.component'

import './shop.styles.scss'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {React.Children.toArray(
              categoriesMap[title].map((product) => (
                <ProductCard product={product} />
              )),
            )}
          </div>
        </Fragment>
      ))}
    </>
  )
}

export default Shop
