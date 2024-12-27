import { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = ({ token }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://react-interview.crd4lc.easypanel.host/api/course', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch courses.');
      }
    };
    fetchCourses();
  }, [token]);

  return (
    <div className="course-list">
      {courses.map((course, index) => (
        <div className="card" key={index}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
          <span style={{ color: course.badge_color }}>{course.badge_text}</span>
          <p>Instructor: {course.instructor_name}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
