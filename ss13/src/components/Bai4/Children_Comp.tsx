import { Component } from 'react'
type Propstype = {
    name: string
}
export default class Children_Comp extends Component<Propstype> {
    
  render() {
    return (
      <div>
       Ho va ten ben component con: {this.props.name}
      </div>
    )
  }
}
