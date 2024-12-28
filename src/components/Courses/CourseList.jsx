import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useOutletContext } from "react-router-dom";
import Card from "./Card";

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
        setCourses(response.data.data.data); 
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed. Please try again.");
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
    return <div className="text-center">
    <span className="loading loading-spinner loading-lg text-error mt-24"></span>
    </div>
  }

  if (error) {
    return <div className="text-center text-red-400 mt-10">{error}</div>;
  }

  return (
    <div className="pb-20 min-h-screen w-[100%] border-[#6443ea66] border-t-2 rounded-t-[80px] rounded-b-none"> 
      <div className="min-h-screen container mx-auto p-5">
      <Helmet>
        <title>Courses || App</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center my-20">Our Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => ( <Card course={course} key={course.id}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CourseList;
