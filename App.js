const axios = require('axios')
module.exports = async (username, repo, page, token) => {
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`
  const data = (await axios.get(`https://api.github.com/repos/${username}/${repo}/contributors?per_page=${page || 0}`)).data
  return data[Math.floor(Math.random() * data.length)]
}
