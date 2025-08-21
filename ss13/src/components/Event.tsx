import { Component } from 'react'

type Task = {
    id: number,
    task: string,
    completed: boolean
}

type InitialState = {
    fullName: string
    tasks: Task[]
    newTask: string
}

export default class Event extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            fullName: "Thao Minh",
            tasks: [
                {
                    id: 1,
                    task: "Mon toan",
                    completed: true
                }
            ],
            newTask: ""
        }
    }

    changeName = () => {
        this.setState({ fullName: "To Tuan" })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ fullName: e.target.value })
    }

    handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ newTask: e.target.value })
    }

    addTask = () => {
        if (this.state.newTask.trim() === "") return
        const newTaskObj: Task = {
            id: Date.now(),
            task: this.state.newTask,
            completed: false
        }
        this.setState({
            tasks: [...this.state.tasks, newTaskObj],
            newTask: ""
        })
    }

    deleteTask = (id: number) => {
        let result = this.state.tasks.filter(item => item.id !== id)
        this.setState({
            tasks: result
        })
    }

    render() {
        return (
            <div>
                <h2>Hoc ve event</h2>
                <p>Ten sinh vien: {this.state.fullName}</p>
                <button onClick={this.changeName}>Change</button>

                <input
                    type="text"
                    placeholder="Nhap ten sinh vien"
                    onChange={this.handleChange}
                    value={this.state.fullName}
                />

                <h1>Danh sach mon hoc</h1>
                <input
                    type="text"
                    placeholder="Nhap mon hoc moi"
                    value={this.state.newTask}
                    onChange={this.handleTaskChange}
                />
                <button onClick={this.addTask}>Thêm</button>

                <ul>
                    {this.state.tasks.map((item) => (
                        <li key={item.id}>
                            {item.task}
                            <button onClick={() => this.deleteTask(item.id)}>Xoa</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
