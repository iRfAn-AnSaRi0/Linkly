import React, { useEffect, useState } from "react";
import API from "../apis/BaseApi";

function History() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await API.get("/api/history");
        // console.log(response.data.data);
        
        setUrls(response.data.data || []);
      } catch (err) {
        setError("Failed to fetch URLs");
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left">URL History</h2>

      {urls.length === 0 ? (
        <p className="text-center">No URLs found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left text-sm sm:text-base">
                <th className="py-2 px-3 sm:py-3 sm:px-6">Original URL</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6">Short URL</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6">Clicks</th>
                <th className="py-2 px-3 sm:py-3 sm:px-6">Created At</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr
                  key={url._id}
                  className="border-b hover:bg-gray-50 text-xs sm:text-sm"
                >
                  <td className="py-2 px-3 max-w-xs break-words">
                    <a
                      href={url.orginalURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {url.orginalURL}
                    </a>
                  </td>
                  <td className="py-2 px-3 text-blue-600">
                    <a
                      href={`http://localhost:8000/${url.shortURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {`http://localhost:8000/${url.shortURL}`}
                    </a>
                  </td>
                  <td className="py-2 px-3">{url.clicks}</td>
                  <td className="py-2 px-3">
                    {new Date(url.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default History;
