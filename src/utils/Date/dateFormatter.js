export function dateFormatter(date) {
  const selected_date = new Date(date)
  return selected_date.toLocaleString("de-DE")
}
