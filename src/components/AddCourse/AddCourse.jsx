import { useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

const AddCourse = () => {
  const { token } = useOutletContext();

  const handleAddCourse = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const badge_text = e.target.badge_text.value;
    const badge_color = e.target.badge_color.value;
    const instructor_name = e.target.instructor_name.value;
    const description = e.target.description.value;
    const courseInfo = {
      title,
      badge_text,
      badge_color,
      instructor_name,
      description,
    };
    console.log(courseInfo);
    try {
      const res = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/course",
        courseInfo,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.status === true) {
        toast.success("Added Course Successfully");
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
      alert("Failed to add course.");
    }
  };

  //   {
  //     "title": "React professional course",
  //     "description": "This course is only for professionals who has react expertise",
  //     "badge_text": "Featured",
  //     "badge_color": "red", // #ff0000
  //     "instructor_name": "Naim"
  // }

  return (
    <div
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/15764162/pexels-photo-15764162.jpeg?cs=srgb&dl=pexels-allan-carvalho-264847051-15764162.jpg&fm=jpg)`,
      }}
      className="bg-cover bg-center p-24"
    >
      <Helmet>
        <title>Add Course|| MicroDeftTest</title>
      </Helmet>
      <div className="w-full max-w-md p-8  rounded-xl mx-auto  h-full  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <h3 className="text-3xl font-bold text-center mb-8 text-white">
          ADD COURSE
        </h3>
        <form onSubmit={handleAddCourse}>
          {/* form course title */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            {/* badge_text*/}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-white">Badge Text</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="badge_text"
                  placeholder="Badge Text"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            {/*  */}
          </div>
          {/* badge color */}
          <div className="flex mb-5">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-white">Badge Color</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="badge_color"
                  placeholder="Badge Color"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            {/*instructor_name*/}
            <div className="form-control w-1/2 ml-4">
              <label className="label">
                <span className="label-text text-white">Instructor Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="instructor_name"
                  placeholder="Instructor Name"
                  className="input input-bordered w-full "
                  required
                />
              </label>
            </div>
          </div>
          {/* decscription*/}
          <div className="flex mb-5 w-full">
            <div className="form-control w-full ">
              <label className="text-white">Description</label>
              <br />
              <textarea
                id="content"
                className="border"
                name="description"
                rows="4"
                cols="49"
                required
              ></textarea>
            </div>
          </div>

          <button className="relative inline-block px-4 mr-2 py-2 font-medium group w-full">
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
            <input
              type="submit"
              value="Add Course"
              className="relative text-black group-hover:text-white"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
