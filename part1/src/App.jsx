import { useState, useEffect } from 'react'
import noteService from './services/notes'

const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? 'make not important' : 'make important'
    return (
        <li className='note'>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className='error'>
            {message}
        </div>
    )
}

const Footer = () => {
    const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div style={footerStyle}>
            <br/>
            <em>Note app, Aditya V. T.</em>
        </div>
    )
}

const App = () => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                console.log(returnedNote)
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter(note => note.important === true)

    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`
        const note = notes.find(note => note.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(
                    `Note '${note.content}' was already removed from the server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
            })
    }

    return (
        <div>
            <h1>Notes</h1>
            <Notification  message={errorMessage} />
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
                )}
            </ul>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange} />
                <button type="submit">save</button>
            </form>
            <Footer />
        </div>
    )
}

export default App