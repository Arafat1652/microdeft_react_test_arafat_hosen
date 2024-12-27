import { useState } from 'react';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import AddCourse from './components/AddCourse/AddCourse';
import CourseList from './components/Courses/CourseList';


const App = () => {
  const [token, setToken] = useState('');

  return (
    <div>
      {!token ? (
        <>
          <h1>Register</h1>
          <Register />
          <h1>Login</h1>
          <Login setToken={setToken} />
        </>
      ) : (
        <>
          <h1>Add Course</h1>
          <AddCourse token={token} />
          <h1>Courses</h1>
          <CourseList token={token} />
        </>
      )}
    </div>
  );
};

export default App;
