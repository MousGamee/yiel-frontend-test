import axios from 'axios'

const api = axios.create({
    baseURL : 'http://localhost:8000'
})

export const getHomes = () => api.get('/homes').then(res => res.data)

export const getHomeById = (homeId) => api.get(`/homes/${homeId}`).then(res => res.data)

export const updateOffre = ({homeId, ...updatedOffre}) => api.patch(`/homes/${homeId}`, updatedOffre).then(res => res.data)