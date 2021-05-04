export default async function SubmitForm(props) {
  const {reqBody} = props
  const fullDomain = window.location.href
  const domain = fullDomain.split('/').slice(0,3).join('/')
  console.log('domain', domain)
  const url = 'https://ql0ugv7001.execute-api.us-east-1.amazonaws.com/dev/register'
  const requestType = 'POST'
  const response = await fetch(url, {
    method: requestType,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': domain,
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