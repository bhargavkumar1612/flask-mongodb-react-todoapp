import { Component } from "react"

class TodoItem extends Component {
    render(){
        const {todoItem,onClickCheckbox} = this.props
        return <div className="todo-item">
            <input 
                name={`todo${todoItem.id}`}
                type="checkbox"
                checked={todoItem.status}
                onClick={()=>onClickCheckbox(todoItem.id)}
                onChange={()=>("change in db")}
            />
            <label className="todo-desc" htmlFor={`todo${todoItem.id}`}>{todoItem.task}</label>
        </div>
    }
}

export default TodoItem