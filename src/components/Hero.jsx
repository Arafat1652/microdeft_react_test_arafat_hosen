import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero mt-20 py-24 mb-40">
  <div className="hero-content text-center">
    <div className="max-w-lg">
      <h1 className="text-5xl font-bold">Welcome to <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient bg-300%">MicroDeft Test</span></h1>
      <p className="py-6">This is  an Test functionality project where you will see....</p>
      <Link to='/' className="relative inline-block px-4 mr-2 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">Course</span>
</Link>
      <Link to='/' className="relative inline-block px-4 py-2 font-medium group">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
<span className="relative text-black group-hover:text-white">Blogs</span>
</Link>
      
    </div>
  </div>
</div>
    );
};

export default Hero;