import { useEffect, useState } from 'react'
import ffindexService from './services/ffindex'

const App = () => {
  const [stories, setStories] = useState([])

  const fetchStories = () => {
    ffindexService
    .getAllStories()
    .then(stories => setStories(stories))
  }

  useEffect(fetchStories, [])

  const fetchAuthorName = (author_id) => {
    return ffindexService.getUser(author_id).then(response => response.data)
  }

  const onClick = () => {
    const ex = fetchAuthorName("1")
    console.log(ex)
  }

  return (
    <>
      {stories.map(story => <p>{story.name} by {story.author_id}</p>)}
      <button onClick={onClick}>click</button>
    </>
  )
}

export default App
