export function getCategory(categories, id) {
  const category = categories.find(category => category.id === id)
  return category
}
