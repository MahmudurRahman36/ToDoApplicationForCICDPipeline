# Modern ToDo App | Task Management

A premium, responsive, and feature-rich ToDo application built with **React.js** and **Tailwind CSS**. This application focuses on a clean user experience with smooth animations and persistent storage.

## 1. Project Folder Structure

```text
ToDoApplicationForCICDPipeline/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── FilterBar.jsx  # Task filtering & status
│   │   ├── Header.jsx     # App header & branding
│   │   ├── TodoForm.jsx   # Input for new tasks
│   │   ├── TodoItem.jsx   # Individual task logic (edit/delete)
│   │   └── TodoList.jsx   # Container for tasks
│   ├── App.jsx            # Main container & state management
│   ├── index.css          # Tailwind & custom design tokens
│   └── main.jsx           # React entry point
├── index.html             # HTML template & SEO tags
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.js         # Vite build configuration
└── package.json           # Dependencies & scripts
```

## 2. Installation Commands

To set up the project locally, run the following commands in your terminal:

```bash
# Install dependencies
npm install

# Initialize Tailwind (Already done in this project)
# npx tailwindcss init -p
```

## 3. Component Explanation

### `App.jsx` (The Brain)
- **State Management**: Uses `useState` to manage the list of tasks and the current filter.
- **Persistence**: Uses `useEffect` to sync the task list with `localStorage`, ensuring data survives page refreshes.
- **Filtering Logic**: Dynamically filters tasks based on 'All', 'Pending', or 'Completed' status.
- **CRUD Operations**: Contains the core logic for adding, toggling, editing, and deleting tasks.

### `TodoForm.jsx`
- Handles task creation.
- Features a "glassmorphism" focus effect and input validation.
- Automatically focuses the input on load.

### `TodoItem.jsx`
- **Double-click to Edit**: Users can double-click any task to enter edit mode.
- **Inline Editing**: Save changes by pressing `Enter` or cancel with `Escape`.
- **Micro-interactions**: Subtle hover states reveal action buttons (Edit/Delete).

### `FilterBar.jsx`
- Provides status tracking (e.g., "2/5 Completed").
- Offers "Clear Completed" functionality to keep the list clean.
- Uses a segmented control UI for switching between filters.

### `index.css`
- Defines the global design system including gradients, "glass-card" effects, and custom scrollbars.
- Includes Tailwind utility layers for reusable component styles.

## 4. How to Run the Project

1. **Start Development Server**:
   ```bash
   npm run dev
   ```
2. **Access the App**:
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 5. Future Improvements

To take this application to the next level, consider adding:

1. **Task Categories**: Allow users to tag tasks (e.g., "Work", "Personal", "Urgent") with color-coded labels.
2. **Due Dates & Reminders**: Add a date picker and browser notifications for upcoming tasks.
3. **Drag-and-Drop Reordering**: Implement `dnd-kit` or `react-beautiful-dnd` to allow manual sorting of tasks.
4. **Dark Mode**: Add a theme switcher using Tailwind's `dark` mode functionality.
5. **Progress Bar**: A visual progress bar at the top of the card to show the completion percentage.
6. **Backend Integration**: Sync tasks with a real database (like Firebase or Supabase) for cross-device access.
