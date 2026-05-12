const FilterBar = ({ currentFilter, onFilterChange, taskCount, completedCount, onClearCompleted }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'pending', label: 'Pending' },
    { id: 'completed', label: 'Completed' },
  ]

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
      <div className="flex p-1 bg-slate-100 rounded-xl">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
              currentFilter === filter.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-500 font-medium">
          {completedCount}/{taskCount} Completed
        </span>
        {completedCount > 0 && (
          <button
            onClick={onClearCompleted}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Clear Completed
          </button>
        )}
      </div>
    </div>
  )
}

export default FilterBar
