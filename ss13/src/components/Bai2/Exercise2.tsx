import { Component } from 'react'
type InitialState = {
    id: number
    name: string
    date: string
    address: string
}
export default class Exercise2 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            id: 1,
            name: "Thao Minh",
            date: "24/01/2006",
            address: "Ha Noi"
        }
    }
    render() {
        return (
            <div>
                <h1>Thong tin ca nhan</h1>
                <p>ID: {this.state.id}</p>
                <p>Name: {this.state.name}</p>
                <p>Date: {this.state.date}</p>
                <p>Address: {this.state.address}</p>
            </div>
        )
    }
}
