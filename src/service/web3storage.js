import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQyNmQ2Nzc3ZjBiZmQ4NEJkNDBhNDJjZUVBRGUxQzA3OTUzQ0Y3RjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTUyMzkyMDc4MTAsIm5hbWUiOiJteS10b2tlbiJ9.7DCV2oQKRFfJDkDseJFc1mPzrF90Kp3vLvfuDiRVHwo"
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}


export default makeStorageClient()