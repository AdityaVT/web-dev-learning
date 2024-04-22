// https://github.com/gregnb/mui-datatables
import MUIDataTable from "mui-datatables"

const highlightLogs = [
    {
        id: "0",
        date: "2024-01-01",
        time: "10:00",
        highlight: "Complete react assignments",
        comment: "Not completed",
        achieved: false
    },
    {
        id: "1",
        date: "2024-01-02",
        time: "12:00",
        highlight: "Movie date",
        comment: "Nice time",
        achieved: true
    },
    {
        id: "2f88",
        date: "2024-03-31",
        time: "10:00",
        highlight: "Enjoy the day with Sreeza",
        comment: "",
        achieved: false
    }
]

const columns = [
    {
        name: "date",
        label: "Date",
        options: {
            filter: true,
            sort: true
        }
    },
    {
        name: "time",
        label: "Time",
        options: {
            filter: false,
            sort: true
        }
    },
    {
        name: "highlight",
        label: "Highlight",
        options: {
            filter: false,
            sort: false
        }
    },
    {
        name: "comment",
        label: "Comment",
        options: {
            filter: false,
            sort: false
        }
    },
    {
        name: "achieved",
        label: "Achieved",
        options: {
            filter: false,
            sort: false
        }
    }
]

const options = {
    filterType: "checkbox"
}

const MuiTable = () => {
    return (
        <MUIDataTable
            title={"Highlight Logs"}
            data={highlightLogs}
            columns={columns}
            options={options}
        />
    )
}

export default MuiTable