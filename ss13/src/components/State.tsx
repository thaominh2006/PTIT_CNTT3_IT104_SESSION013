import { Component } from 'react'
type Task = {
    id: number,
    name: string,
    completed: boolean
}
type IntitialSate = {
    taskName: string,
    todo: Task[]
    fullName: string,
    isActive: boolean
}

export default class State extends Component<{}, IntitialSate> {
    constructor(props: {}) {
        super(props);
        this.state = {
            taskName: "",
            todo: [
                {
                    id: 1,
                    name: "hoc reactjs",
                    completed: false
                },
                {
                    id: 2,
                    name: "Thao minh",
                    completed: true
                }
            ],
            fullName: "Thao Minh",
            isActive: true
        }
    }
    render() {
        return (
            <div>
                Hoc ve state
                <p>Ten sinh vien: {this.state.fullName}</p>
                <p>{this.state.isActive ? "Hoat dong" : "Khong hoat dong"}</p>
                <ul>{this.state.todo.map((item) =>
                    <>
                        <li key={item.id}>Name: {item.name}</li>
                        <li key = {item.id}>Hoan thanh: {item.completed? "Hoan thanh" : "Chua hoan thanh"}</li>
                    </>
                )}</ul>
            </div>
        )
    }
}
