export default async function SubmitForm(reqBody) {
  // FIXME: Adjust to take in all request types.
  // const {reqBody} = props
  console.log('reqBody', reqBody)
  const fullDomain = window.location.href
  const domain = fullDomain.split('/').slice(0,3).join('/')
  console.log('domain', domain)
  const url = 'https://0sjhqfet72.execute-api.us-east-1.amazonaws.com/dev/api/register'
  const requestType = 'POST'
  const response = await fetch(url, {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors', // this is new
    body: JSON.stringify(reqBody),
  })
  const res = await response.json()
  if (res && response.ok) {
    console.log('res', res)
  } else {
    console.log('error', res)
  }
}