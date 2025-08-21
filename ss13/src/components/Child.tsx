import { Component } from 'react'
type Propstype = {
    fullName: string
}

export default class Child extends Component<Propstype> {
  render() {
    console.log("Gia tri nhan ve tu class cha", this.props)
    return (
      <div>
        Class con
        <p>Gia tri</p>
      </div>
    )
  }
}
