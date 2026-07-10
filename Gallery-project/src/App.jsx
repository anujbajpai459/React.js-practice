import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async (pageNo) => {
    try {
      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=10`
      );
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <div className="p-5">
      <div className="flex gap-4 mb-5">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="bg-blue-500 text-white px-5 py-2 rounded"
        >
          Prev
        </button>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-green-600 text-white px-5 py-2 rounded"
        >
          Next
        </button>

        <span className="font-bold self-center">
          Page: {page}
        </span>
      </div>

      <div className="flex flex-wrap gap-5">
        {userData.length > 0 ? (
          userData.map((elem) => (
            <div
              key={elem.id}
              className="w-44 bg-white rounded-xl shadow p-2"
            >
              <div className="h-40 overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover"
                  src={elem.download_url}
                  alt={elem.author}
                  loading="lazy"
                />
              </div>

              <h2 className="mt-2 text-center font-semibold">
                {elem.author}
              </h2>
            </div>
          ))
        ) : (
          <h3 className="text-gray-400 text-xl">
            No User Available
          </h3>
        )}
      </div>
    </div>
  );
};

export default App;