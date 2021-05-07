export default function validString(value) {
  if (!value) {
    return false
  }
  if (value.length < 5) {
    return false
  }
  if (value.length > 5 && value.length !== 9) {
    return false
  } else {
    return true
  }
}