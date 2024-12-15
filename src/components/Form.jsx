import { IoMdAdd } from "react-icons/io";

const Form = ({ input, setInput, addTodo }) => {
   const handleSubmit = (e) => {
      e.preventDefault();
      addTodo();
   }
   return (
      <form className="relative mb-6" onSubmit={handleSubmit}>
         <input
            type="text"
            placeholder="Make a coffee"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="block w-full rounded-lg border-b border-gray-300 bg-white p-2 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-blue-500  focus:outline-none focus:ring-blue-500/5"
         />
         <div className="absolute inset-y-1 right-1 flex justify-end">
            <button
               type="submit"
               aria-label="Submit"
               className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
               <IoMdAdd color="white" size={20} />
            </button>
         </div>
      </form>
   );
};

export default Form;
