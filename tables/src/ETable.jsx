// https://www.codevertiser.com/editable-text-field-in-table-using-reactjs/
import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditableTable = () => {
    const [highlightData, setHighlightData] = useState([])

    const getHighlights = () => {
        axios.get("http://localhost:3001/highlights")
        .then(response => {
            console.log(response.data)
            setHighlightData(response.data)
        })
    }
    useEffect(getHighlights, [])

    const onChangeHighlight = (event, id) => {
        const { name, value, checked } = event.target
        const highlightRecord = highlightData.find(highlight => highlight.id === id)
        const updatedRecord = (name === "achieved") ?
            { ...highlightRecord, [name]: checked } : { ...highlightRecord, [name]: value }

        axios
            .put(`http://localhost:3001/highlights/${id}`, updatedRecord)
            .then(response => console.log(response))

        const editData = highlightData.map((item) => {
            if (item.id == id && name) {
                return updatedRecord
            } else {
                return item
            }
        })
        setHighlightData(editData)
    }

    const addHighlight = () => {
        const newHighlight = {
            date: "",
            time: "",
            highlight: "",
            comment: "",
            achieved: false
        }

        axios
        .post("http://localhost:3001/highlights", newHighlight)
        .then(response => {
            console.log(response)
            setHighlightData(highlightData.concat(response.data))
        })
    }

    const removeHighlight = (id) => {
        console.log(id)
        if (window.confirm(`Are you sure you want to delete this note?`)) {
            axios
                .delete(`http://localhost:3001/highlights/${id}`)
                .then(response => console.log(response))
            const filteredHighlightData = highlightData.filter(record => record.id != id)
            setHighlightData(filteredHighlightData)        
        }
    }

    return (
        <div className="container">
            <h1>Highlight Logs</h1>
            <table className="table table-bordered table-dark rounded-pill">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Highlight</th>
                        <th>Comment</th>
                        <th>Achieved</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {highlightData.map(({id, date, time, highlight, comment, achieved}) => (
                        <tr key={id}>
                            <td>
                                <input
                                    name="date"
                                    value={date}
                                    type="date"
                                    onChange={(event) => onChangeHighlight(event, id)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <input
                                    name="time"
                                    value={time}
                                    type="time"
                                    onChange={(event) => onChangeHighlight(event, id)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <textarea
                                    name="highight"
                                    value={highlight}
                                    onChange={(event) => onChangeHighlight(event, id)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <textarea
                                    name="comment"
                                    value={comment}
                                    onChange={(event) => onChangeHighlight(event, id)}
                                    className="form-control"
                                />
                            </td>
                            <td>
                                <input
                                    name="achieved"
                                    checked={achieved}
                                    type="checkbox"
                                    onChange={(event) => onChangeHighlight(event, id)}
                                    className="form-check-input"
                                />
                            </td>
                            <td>
                                <button onClick={() => removeHighlight(id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={addHighlight}>Add highlight</button>
        </div>
    )
}

export default EditableTable