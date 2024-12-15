import React from 'react';
import { motion } from 'framer-motion';
import { MdDelete } from 'react-icons/md';

const TodoCard = ({ todo, toggleTodo, deleteTodo }) => {
   return (
      <motion.li
         initial={todo.new ? { opacity: 0, scale: 0.8 } : {}}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         layout
         className={`flex justify-between items-center p-2 mb-2 border rounded-lg ${todo.completed ? 'bg-green-200 line-through' : 'bg-white'}`}
         onAnimationComplete={() => todo.new = false} // Reset the new flag after animation completes
      >
         <span
            onClick={() => toggleTodo(todo.id)}
            className="cursor-pointer flex-grow font-bold overflow-hidden break-words text-xl"
            style={{ wordBreak: 'break-word' }}
         >
            {todo.text}
         </span>
         <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-2 p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
         >
            <MdDelete color="white" size={20} />
         </button>
      </motion.li>
   );
};

export default TodoCard;
