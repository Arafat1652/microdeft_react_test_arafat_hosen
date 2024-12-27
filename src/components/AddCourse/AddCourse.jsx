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

  const handleAddCourse = async (e) => {
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
    <>
     <Helmet>
                <title>Add Books|| StoryStacks</title>
            </Helmet>
      <div className="w-full max-w-md p-8  rounded-xl mx-auto  h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        
        <h3 className="text-3xl font-bold text-center mb-8">Add Book</h3>
        <form onSubmit={handleAddCourse}>
          {/* form book name */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="bookName"
                  placeholder="Book Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form book category*/}
            <div className="form-control w-1/2 ml-4 ">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <div className="input-group">
                <select
                  name="category"
                  className="select select-bordered w-full"
                >
                  
                  <option>Novel</option>
                  <option>Thriller</option>
                  <option>History</option>
                  <option>Drama</option>
                  <option>Sci-Fi</option>
                </select>
              </div>
            </div>
            {/*  */}
          </div>
          {/* form book Description */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Short Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form book quantity */}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  min={1}
                  name="quantity"
                  placeholder="Quantity"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>
          {/* form rating */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  max={5}
                  min={1}
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* form author */}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="author"
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* form row */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={user.email}
                  className="input input-bordered w-full"
                  readOnly
                />
              </label>
            </div>

            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  placeholder="Book Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form */}

          <div className="flex mb-5 w-full">
            <div className="form-control w-full ">
              <label>Book Content</label>
              <br />
              <textarea
                id="content"
                className="border"
                name="content"
                rows="4"
                cols="49"
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            value="Add"
            className="btn btn-block text-xl bg-[#000000] text-[#ccff00] border-none"
          />
        </form>
      </div>
    </>
  );
};

export default AddCourse;
