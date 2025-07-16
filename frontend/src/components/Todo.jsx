import React from "react";

const Todo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          📝 My ToDo List
        </h1>

        {/* Input Field */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition">
            Add
          </button>
        </div>

        {/* ToDo List */}
        <ul className="space-y-3">
          {/* Example ToDo Item */}
          <li className="flex items-center justify-between bg-gray-100 p-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
              />
              <span className="text-gray-700">Learn React Router 🚀</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </li>

          <li className="flex items-center justify-between bg-gray-100 p-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
              />
              <span className="text-gray-700">Build ToDo App UI 🎨</span>
            </div>
            <button className="text-red-500 hover:text-red-700">
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
