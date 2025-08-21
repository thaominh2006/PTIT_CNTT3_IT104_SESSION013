import { Component } from 'react'
type InitialState = {
    name: string
}
export default class Exercise1 extends Component<{}, InitialState> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: "Thao Minh"
        }
    }
  render() {
    return (
      <div>
        Ho va ten: {this.state.name}
      </div>    
    )
  }
}
