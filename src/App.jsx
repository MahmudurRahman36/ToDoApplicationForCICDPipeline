import { useState, useEffect } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import FilterBar from './components/FilterBar'

function App() {
  // State for tasks
  const [tasks, setTasks] = useState(() => {
    // Load from localStorage on initialization
    const savedTasks = localStorage.getItem('todo_tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  // State for filtering
  const [filter, setFilter] = useState('all') // all, pending, completed

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks))
  }, [tasks])

  // CRUD Operations
  const addTask = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTasks([newTask, ...tasks])
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id))
    }
  }

  const editTask = (id, newText) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: newText } : task
    ))
  }

  const clearCompleted = () => {
    if (window.confirm('Clear all completed tasks?')) {
      setTasks(tasks.filter(task => !task.completed))
    }
  }

  // Filter logic
  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <main className="space-y-6 animate-slide-up">
          <TodoForm onAdd={addTask} />
          
          <div className="glass-card p-6 space-y-6">
            <FilterBar 
              currentFilter={filter} 
              onFilterChange={setFilter} 
              taskCount={tasks.length}
              completedCount={tasks.filter(t => t.completed).length}
              onClearCompleted={clearCompleted}
            />
            
            <TodoList 
              tasks={filteredTasks} 
              onToggle={toggleTask} 
              onDelete={deleteTask} 
              onEdit={editTask}
            />
            
            {tasks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-lg font-medium text-slate-900">No tasks yet</h3>
                <p className="text-slate-500">Add your first task above to get started!</p>
              </div>
            )}
            
            {tasks.length > 0 && filteredTasks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-medium text-slate-900">No matching tasks</h3>
                <p className="text-slate-500">Try changing your filter settings.</p>
              </div>
            )}
          </div>
        </main>
        
        <footer className="mt-12 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Modern ToDo App. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
