import TodoItem from './TodoItem'

const TodoList = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TodoList
