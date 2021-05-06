export default async function SubmitForm(props) {
  // FIXME: Adjust to take in all request types.
  const {reqBody} = props
  const fullDomain = window.location.href
  const domain = fullDomain.split('/').slice(0,3).join('/')
  console.log('domain', domain)
  const url = 'https://5fl1m459i6.execute-api.us-east-1.amazonaws.com/dev/api/register'
  const requestType = 'POST'
  const response = await fetch(url, {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(reqBody),
  })
  const res = await response.json()
  if (res && response.ok) {
    console.log('res', res)
  } else {
    console.log('error', res)
  }
}