import { Component } from 'react'
import Children_Comp from './Children_Comp'
type Propstype = {
    name: string
}
export default class Parent_Comp extends Component<{}, Propstype> {
    constructor(props: {}) {
        super(props)
        this.state = {
            name: "Thao Minh"
        }
    }
  render() {
    return (
      <div>
         Ho va ten ben component cha : {this.state.name}
        <Children_Comp name = {this.state.name}></Children_Comp>
      </div>
    )
  }
}
