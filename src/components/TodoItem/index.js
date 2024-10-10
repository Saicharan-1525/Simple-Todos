// Write your code here
import './index.css'

const TodoItems = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const OnDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-small-container">
      <p className="para">{title}</p>
      <button type="button" className="button" onClick={OnDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItems
