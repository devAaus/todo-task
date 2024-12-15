import { useState, useEffect } from 'react';

// Custom hook to manage todos
const useTodos = () => {
   // Initialize state
   const [todos, setTodos] = useState(() => {
      const savedTodos = localStorage.getItem('todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
   });


   // Save todos to localStorage whenever they change 
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   // Add a new todo
   const addTodo = (text) => {
      if (text.trim()) {
         const newTodos = [
            ...todos,
            {
               id: Date.now(),
               text,
               completed: false
            }
         ];
         // Sort the todos by ID in descending order before setting the state
         const sortedTodos = newTodos.sort((a, b) => b.id - a.id);
         setTodos(sortedTodos);
      }
   };

   // Toggle completion status of a todo
   const toggleTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id
         ? { ...todo, completed: !todo.completed }
         : todo
      ));
   };

   // Delete a todo
   const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
   }

   return {
      todos,
      addTodo,
      toggleTodo,
      deleteTodo,
   };
};

export default useTodos;
