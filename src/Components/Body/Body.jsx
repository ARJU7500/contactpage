import AllLink from "./AllLinks/AllLink";
import Contact from "./Contact/Contact";
import Form from "./Form/Form";

function Body() {
  return (
    <body>
      {/* message for user  */}
      <div className=" bg-[#002f87] h-[50vh] lg:flex lg:justify-between lg:items-center lg:px-10 ">
        <div className="p-4 text-center lg:w-[450px]">
          <h1 className="text-white text-xl font-semibold md:text-4xl lg:text-2xl">
            Connect With your sales team
          </h1>
          <p className="text-white  text-lg mt-2 md:text-xl lg:text-lg">
            Let's Talk about how our payment solution can help grow your
            business.
          </p>
        </div>
        {/* form  */}
        <div className="absolute top-[30%] px-4 md:px-10 md:top-[15%] lg:top-[30%] lg:w-[50%] lg:right-[0%]">
          <Form />
        </div>
      </div>
      <div className="  px-4 mt-[900px] md:px-[36px] md:mt-[640px] lg:mt-[100px] lg:flex lg:justify-between">
        <div className="text-center lg:text-start ">
          <Contact />
        </div>
      </div>
      <div className="px-4 flex flex-col mt-[50px] lg:mt-[350px]">
        <AllLink />
      </div>
    </body>
  );
}

export default Body;
