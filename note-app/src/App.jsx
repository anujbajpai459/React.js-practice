import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  // Add Note
  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) return;

    setTask([...task, { title, details }]);

    setTitle("");
    setDetails("");
  };

  // Delete Note
  const deleteHandler = (idx) => {
   const copyTask =[...task];
   copyTask.splice(idx,1)
   setTask(copyTask);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row gap-10 p-10">
      
      {/* Form Section */}
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4 w-full md:w-[450px] h-fit"
      >
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Add Notes
        </h1>

        <input
          type="text"
          placeholder="Enter Task Heading"
          className="border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Details"
          className="border border-gray-300 p-3 rounded-md outline-none focus:border-blue-500 resize-none h-28"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Add Notes
        </button>
      </form>

      {/* Notes Section */}
      <div className="flex-1 bg-gray-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">
          Your Notes
        </h1>
          <div className="flex flex-wrap gap-5">
            {task.map((elem, idx) => (
              <div
                key={idx}
                className="relative bg-white p-4 rounded-xl shadow-md w-64 min-h-[180px] hover:shadow-xl transition"
              >
          
                <h3 className="text-xl font-bold text-blue-600 mb-3 pr-6">
                  {elem.title}
                </h3>

                {/* Details */}
                <p className="text-gray-700 break-words mb-5">
                  {elem.details}
                </p>

                {/* Delete Button */}
                <button
                  onClick={() => deleteHandler(idx)}
                  className="absolute bottom-3 left-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default App;