export default function validString(value) {
  if (typeof(value) !== 'string') {
    return false;
  }
  const spaceLessString = value.replace(/\s/g, '');
  if (!spaceLessString.length) {
    return false;
  }
  else {
    return true;
  }
}