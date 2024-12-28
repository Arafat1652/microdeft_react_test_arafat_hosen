import { BsPersonFill } from "react-icons/bs";

import "./card.css";

const Card = ({course}) => {
    const {title,badge_text, badge_color, instructor_name,image, description} = course
    console.log(course);
    return (
        <div>
      <a href="javascript:void(0)">
        <div className="card">
          <div className="card-image-container">
            <img className="card-image" src={image} alt="card-image" />
          </div>
          <div className="card-content">
            <div
              className={`badge ${badge_color === "#ff0000" ? "badge-blue" : "badge-red"}`}
            >
              {badge_text}
            </div>
            <h6 className="card-title">{title}</h6>
            <p className="card-description">{description}</p>
          </div>
          <div className="card-footer">
            <div className="card-instructor">
              <BsPersonFill size={20} />
              <div className="instructor-name">{instructor_name}</div>
            </div>
            <div className="learn-more">
              <a href="#" className="learn-more-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="learn-more-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
    );
};

export default Card;


// {/* <div>
//             <a href="javascript:void(0)">
//   <div className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
//     <div className=" m-2.5 overflow-hidden text-white rounded-md border-4 w-[95%]">
//       <img className="w-full" src={image} alt="card-image" />
//     </div>
//     <div className="p-4">
//       <div  className={`${
//     badge_color === '#ff0000' ? 'bg-blue-500 text-black' : 'bg-red-500'
//   } mb-4 rounded-full py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center`}
// >
//         {badge_text}
        
//       </div>
//       <h6 className="mb-2 text-slate-800 text-xl font-semibold">
//        {title}
//       </h6>
//       <p className="text-slate-600 leading-normal font-light">
//        {description}
//       </p>
//     </div>
 
//     <div className="flex items-center justify-between p-4">
//       <div className="flex items-center">
//       <BsPersonFill size={20}/>
//           {/* className="relative inline-block h-8 w-8 rounded-full" */}
        
//         <div className="ml-3 text-lg">
//           <span className="text-slate-800 font-semibold">{instructor_name}</span>
//         </div>
//         <br />
        
//       </div>
//       <div className="flex flex-col">
//       <a href="#" className="text-slate-800 font-semibold text-sm hover:underline flex items-center">
//         Learn More
//         <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//         </svg>
//       </a>
//     </div>
//     </div>
//   </div> 
// </a>
//         </div> */}