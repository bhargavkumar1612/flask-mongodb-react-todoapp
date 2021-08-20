import { Component } from "react"
import "./index.css"

class TodoItem extends Component {
    render(){
        const {todoItem,onClickCheckbox,onClickDelete} = this.props
        return <div className="todo-item">
                    <input 
                        name={`todo${todoItem.id}`}
                        type="checkbox"
                        checked={todoItem.status}
                        onClick={()=>onClickCheckbox(todoItem.id)}
                        onChange={()=>("do-nothing-or-react-will-scream")}
                    />
                    <label className="todo-desc" 
                           htmlFor={`todo${todoItem.id}`}
                           onClick={()=>onClickCheckbox(todoItem.id)}
                    >{todoItem.task}
                    </label>
                    <img alt="delete"
                         src={process.env.PUBLIC_URL+"/icons8-delete-64.png"}
                         className="delete-img"
                        onClick = {()=>onClickDelete(todoItem.id)}
                    />
                </div>
            }
        }

export default TodoItem