import axios from 'axios'

const baseUrl = 'http://localhost:3001'
const storiesUrl = `${baseUrl}/stories`
const usersUrl = `${baseUrl}/users`
const fandomsUrl = `${baseUrl}/fandoms`
const tagsUrl = `${baseUrl}/tags`
const languagesUrl = `${baseUrl}/languages`
const reviewsUrl = `${baseUrl}/reviews`


const getAllStories = () => {
    return axios.get(storiesUrl).then(response => response.data)
}

const getStory = (storyId) => {
    return axios.get(`${storiesUrl}/${storyId}`).then(response => response.data)
}

const getUser = (userId) => {
    return axios.get(`${usersUrl}/${userId}`).then(response => response.data)
}

const getAllFandoms = () => {
    return axios.get(fandomsUrl).then(response => response.data)
}

const getAllTags = () => {
    return axios.get(tagsUrl).then(response => response.data)
}

const getAllLangauges = () => {
    return axios.get(languagesUrl).then(response => response.data)
}

const getStoryReviews = (storyId) => {
    return axios.get(`${reviewsUrl}?story_id=${storyId}`).then(response => response.data)
}

export default { getAllStories, getStory, getUser, getAllFandoms, getAllTags, getAllLangauges, getStoryReviews }