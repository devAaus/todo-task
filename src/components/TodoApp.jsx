import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Form from './Form';
import useTodos from '../hooks/useTodos';
import TodoCard from './TodoCard';
import { FaInfoCircle } from 'react-icons/fa';

const TodoApp = () => {
   const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
   const [input, setInput] = useState('');

   // Handle add todo
   const handleAddTodo = () => {
      addTodo(input);
      setInput('');
   };

   return (
      <div className="w-full max-w-xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md min-h-[400px] relative">
         <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>
         <Form
            input={input}
            setInput={setInput}
            addTodo={handleAddTodo}
         />
         <div className="absolute top-2 right-2">
            <FaInfoCircle
               data-tooltip-id="my-tooltip"
               data-tooltip-content=" Click on a todo to toggle it as completed"
               className='cursor-pointer'
            />
            <ReactTooltip id='my-tooltip' />
         </div>
         <motion.ul layout>
            <AnimatePresence>
               {todos.map((todo) => (
                  <TodoCard
                     key={todo.id}
                     todo={todo}
                     toggleTodo={toggleTodo}
                     deleteTodo={deleteTodo}
                  />
               ))}
            </AnimatePresence>
         </motion.ul>
      </div>
   );
};

export default TodoApp;