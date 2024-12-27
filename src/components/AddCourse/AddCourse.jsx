import { useState } from 'react';
import axios from 'axios';

const AddCourse = ({ token }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    badge_text: '',
    badge_color: '',
    instructor_name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://react-interview.crd4lc.easypanel.host/api/course',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert('Course added successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to add course.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Badge Text"
        value={formData.badge_text}
        onChange={(e) => setFormData({ ...formData, badge_text: e.target.value })}
      />
      <input
        type="text"
        placeholder="Badge Color"
        value={formData.badge_color}
        onChange={(e) => setFormData({ ...formData, badge_color: e.target.value })}
      />
      <input
        type="text"
        placeholder="Instructor Name"
        value={formData.instructor_name}
        onChange={(e) => setFormData({ ...formData, instructor_name: e.target.value })}
      />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
