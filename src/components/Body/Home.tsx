import { Link } from "react-router-dom";
import { Card } from "./Card";
import { NavBar } from "./NavBar";
import Contact from "./Contact";
export const Home = () => {
  return (
    <div className="h-auto w-screen bg-sky-100 lg:flex lg:justify-center lg:items-center lg:flex-col">
      <div className="lg:max-w-Portfolio_width bg-sky-100" >
      <NavBar />
      <div className="mt-64 items-center  flex flex-col justify-around md:justify-between md:px-10 w-screen lg:w-full my-40 lg:justify-between md:flex-row h-96 mb-80 lg:mx-10 ">
        <div className="max-w-96 min-w-40 ">
          <div className="max-w-96 w-max">
            <h1 className="font-bold text-4xl text-left hover:animate-bounce ">
              Always coding is the way to success!!
            </h1>
            <h3 className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
              rem mollitia autem quae asperiores deleniti, natus nisi dolor hic
              pariatur accusamus tempore! Porro doloremque quasi Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ducimus ipsum sit
              explicabo tempora dolor consequuntur quae. Ratione fugit veritatis
              placeat voluptatem, commodi quasi error reiciendis, minus, animi
              accusamus possimus corrupti.
            </h3>
            <div className="mt-5">
              <Link to="/signup">
                <button className="text-xl bg-green-500 text-zinc-50 p-2 rounded-full border-2 font-sans">
                  Connect with us
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-80 lg:w-96 relative mt-20">
          <div className="absolute top-0 -left-8 w-72 h-72 bg-yellow-300 rounded-full  mix-blend-multiply filter blur-xl animate-blob animation-delay-4000 opacity-70 "></div>
          <div className="absolute top-0 -right-8 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000 opacity-70 "></div>
          <div className="absolute bottom-20 left-7 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000 opacity-70 "></div>
          <img
            src="/coding.png"
            alt="Home Page Workspace logo"
            className="w-96 h-96 lg:w-96 lg:h-96 hover:animate-blob"
          ></img>
        </div>
      </div>
    </div>

      <div className="mt-20 flex justify-center w-screen  flex-col items-center">
        <h1 className=" ml-5 font-bold text-5xl ">Portfolio</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-center lg:max-w-Portfolio_width md:max-w-screen">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      
      <Contact/>
      </div>
  );
};
