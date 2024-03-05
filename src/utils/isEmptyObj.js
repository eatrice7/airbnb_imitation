function isEmptyObj(o) {
  if (o === null) return false

  return !!Object.keys(o).length
}
export default isEmptyObj