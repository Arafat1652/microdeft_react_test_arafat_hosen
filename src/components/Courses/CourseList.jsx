import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";

const CourseList = () => {
  const { token } = useOutletContext();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log(response.data.data.data);
        setCourses(response.data.data.data); // Assuming the data structure is `data.data`
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch courses. Please try again.");
        setLoading(false);
      }
    };

    if (token) {
      fetchCourses();
    } else {
      setError("No authorization token found.");
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div className="text-center text-white mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400 mt-10">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <Helmet>
        <title>Courses || App</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-center mb-8">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-5">
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-3`}
                style={{ backgroundColor: course.badge_color }}
              >
                {course.badge_text}
              </div>
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-400 mb-3">{course.description}</p>
              <p className="text-gray-300 text-sm">
                Instructor: {course.instructor_name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
