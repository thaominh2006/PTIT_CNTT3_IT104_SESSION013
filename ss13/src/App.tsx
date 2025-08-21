import { Component } from 'react'
import Exercise1 from './components/Bai1/Exercise1'
import Exercise2 from './components/Bai2/Exercise2'
import Exercise3 from './components/Bai3/Exercise3'
import Parent_Comp from './components/Bai4/Parent_Comp'
import Parent from './components/Bai5/Parent'
import ListPost from './components/Bai6/ListPost'
import Todolist from './components/Bai8/Todolist'
import UpdateState from './components/Bai9/UpdateState'
import Input from './components/Bai10/Input'
import AppTheme from './components/Bai7/AppTheme'
// import Parent from './components/Parent'
// import State from './components/State'
// import Event from './components/Event'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Parent></Parent>
        <hr />
        <State></State>
        <hr />
        <Event></Event> */}
        <Exercise1></Exercise1>
        <hr />
        <Exercise2></Exercise2>
        <hr />
        <Exercise3></Exercise3>
        <hr />
        <Parent_Comp></Parent_Comp>
        <hr />
        <Parent></Parent>
        <hr />
        <ListPost></ListPost>
        <hr />
        <AppTheme></AppTheme>
        <hr />
        <Todolist></Todolist>
        <hr />
        <UpdateState></UpdateState>
        <hr />
        <Input></Input>
      </div>
    )
  }
}
