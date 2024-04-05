import Form from "./Form/Form";

function Body() {
  return (
    <body>
      <div className="bg-[#002f87] h-[50vh] px-4 lg:flex lg:justify-between lg:items-center md:px-10 lg:px-36">
        <div className="pt-10">
          <h1 className="text-white text-lg font-semibold md:text-3xl lg:text-4xl">
            Connect With your
          </h1>
          <h1 className="text-white text-lg font-semibold md:text-3xl lg:text-4xl">
            sales team
          </h1>
          <p className="text-white  text-sm mt-2 md:text-xl lg:mt-4">
            Let's Talk about how our payment solution can help grow your
            business.
          </p>
        </div>
        <div className="absolute pr-4 mt-10 md:top-[20%] lg:top-[30%] lg:right-[45px]">
          <Form />
        </div>
      </div>
      <div className=" hidden px-4 md:justify-center md:items-center lg:h-[100vh] lg:flex lg:justify-between lg:items-center lg:px-36">
        <div className="flex flex-col gap-14">
          <div className="">
            <h5 className="text-4xl">Some other ways to</h5>
            <h5 className="text-4xl">connect with us </h5>
          </div>
          <div>
            <h5 className="text-lg">Want to speak with sales right away?</h5>
            <p className="text-[#459adb] text-lg font-bold">
              call 877-794-7639
            </p>
          </div>
          <div>
            <h5 className="text-lg">Need Help with your existing account?</h5>

            <div className="flex justify-start items-center">
              <p className="text-[#459adb] font-bold text-lg">
                Visit our Help Center
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 text-[#459adb]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <div className="bg-[#459adb] rounded-full h-5 w-5 opacity-20 ml-[-16px]"></div>
            </div>
          </div>
          <div>
            <h5 className="text-lg">Want helpful business insights?</h5>
            <div className="flex justify-start items-center">
              <p className="text-[#459adb] font-bold text-lg">
                Visit our Business Resource Center
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 text-[#459adb]"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <div className="bg-[#459adb] rounded-full h-5 w-5 opacity-20 ml-[-16px]"></div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Body;
