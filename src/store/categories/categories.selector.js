export const selectCategoriesMap = (state) => {
  const categoriesMap = state.categories.categories.reduce(
    (acc, { title, items }) => {
      acc[title.toLowerCase()] = items
      console.log(acc)
      return acc
    },
    {},
  )
  return categoriesMap
}
