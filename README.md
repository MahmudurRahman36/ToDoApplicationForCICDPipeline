# ToDo Application | Task Manager

A modern, responsive ToDo application built with **React.js** and **Tailwind CSS**. This app features a clean user interface, smooth animations, and local storage persistence.

## 1. Features

-   **Add & Delete Tasks**: Simple interface to add and remove tasks.
-   **Edit Tasks**: Double-click any task to edit it in place.
-   **Filter Tasks**: Toggle between viewing "All", "Pending", or "Completed" tasks.
-   **Progress Tracking**: See the percentage of completed tasks at a glance.
-   **Clear Completed**: One-click button to remove all completed tasks.
-   **Persistence**: All tasks are saved to `localStorage`, so they remain even after refreshing the page.

## 2. Installation

To get the project running locally, follow these steps:

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd ToDoApplicationForCICDPipeline
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

The app will be available at `http://localhost:5173` (or the port specified by Vite).

## 3. Component Structure

-   **`App.jsx`**: The main application container that manages the state of all tasks and filtering logic.
-   **`TodoForm.jsx`**: Component for adding new tasks with input validation.
-   **`TodoList.jsx`**: Renders the list of tasks and handles filtering.
-   **`TodoItem.jsx`**: Renders an individual task, handling toggle, edit, and delete actions.
-   **`FilterBar.jsx`**: UI for filtering tasks and clearing completed items.
