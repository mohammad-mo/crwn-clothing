import React from 'react'

import ProductCard from '../../components/product-card/product-card.component'

import './category-preview.styles.scss'

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <span className='title'>{title.toUpperCase()}</span>
      </h2>
      <div className='preview'>
        {React.Children.toArray(
          products
            .filter((_, index) => index < 4)
            .map((product) => <ProductCard product={product} />),
        )}
      </div>
    </div>
  )
}

export default CategoryPreview
