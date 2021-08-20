import { Component } from "react";
import TodoItem from "../TodoItem"
import './index.css'

const baseUrl = "http://localhost:5000/"


class TodoApp extends Component {
    state = {todos:[]}

    onClickCheckbox = async (id)=>{
        let {todos} = this.state
        todos.forEach(t=>{
            if(t.id===id){
                t.status = !(t.status)
            }
        })
        await this.setState({todos:todos})
        await this.updateTodoStatusDB(id)
    }

    updateTodoStatusDB = async (id)=>{
        const {todos} = this.state
        const updated = todos.filter((t)=>t.id===id)[0]
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated)
        }
        await fetch(baseUrl+`my-task/${id}`,requestOptions)
    }

    fetchTodos = async ()=>{
        let todos = await fetch(baseUrl+"my-tasks")
        todos = await todos.json()
        this.setState({todos:todos.data})
    }

    onSubmitNewTask = async (e)=>{
        e.preventDefault()
        let task = e.target.childNodes[1].value
        task = {"task":task,"status":false}
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        }
        await fetch(baseUrl+`my-tasks`,requestOptions)
        this.fetchTodos()
    }

    onClickDelete = async (id)=>{
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }
        await fetch(baseUrl+`my-task/${id}`,requestOptions)
        this.fetchTodos()
    }

    componentDidMount(){
        this.fetchTodos()
    }
    
    render(){
        const {todos} = this.state
        return <div className="bg-container">
            <div className="inner-container">
                <div className="header-container">
                    <h1>Todo App</h1>
                </div>
                <div className="todo-container">
                    {todos.map(todo=><TodoItem todoItem={todo} 
                                               key={todo.id} 
                                               onClickCheckbox={this.onClickCheckbox}
                                               onClickDelete={this.onClickDelete}
                                    />)}
                </div>
                <div className="input-container">
                    <form onSubmit={this.onSubmitNewTask}>
                        <label htmlFor="new-todo">Add New</label>
                        <input id='input-element' className="input-todo" type="text" name="new-todo"/>
                    </form>
                </div>
            </div> 
        </div>
    }
}

export default TodoApp