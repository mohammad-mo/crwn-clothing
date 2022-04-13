import { useNavigate } from 'react-router'

import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, size, route } = category

  const navigate = useNavigate()

  const useNavigateHandler = () => navigate(route)

  return (
    <div
      className={`directory-item-container ${size ? size : ''}`}
      onClick={useNavigateHandler}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
