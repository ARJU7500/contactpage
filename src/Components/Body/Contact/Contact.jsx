function Contact() {
  return (
    <div className="flex flex-col gap-10">
      <div className="">
        <h5 className="text-2xl md:text-4xl lg:text-3xl">Some other ways to</h5>
        <h5 className="text-2xl md:text-4xl lg:text-3xl">connect with us </h5>
      </div>
      <div>
        <h5 className="text-lg md:text-2xl lg:text-lg">
          Want to speak with sales right away?
        </h5>
        <p className="text-[#459adb] text-lg font-bold md:text-2xl lg:text-lg">
          call 877-794-7639
        </p>
      </div>
      <div>
        <h5 className="text-lg md:text-2xl lg:text-lg">
          Need Help with your existing account?
        </h5>

        <div className="flex justify-center items-center lg:justify-start lg:text-start">
          <p className="text-[#459adb] font-bold text-lg md:text-2xl lg:text-lg">
            Visit our Help Center
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 text-[#459adb] md:h-7"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <div className="bg-[#459adb] rounded-full h-5 w-5 opacity-20 ml-[-16px]"></div>
        </div>
      </div>
      <div>
        <h5 className="text-lg md:text-2xl lg:text-lg">
          Want helpful business insights?
        </h5>
        <div className="flex justify-center items-center lg:justify-start lg:text-start">
          <p className="text-[#459adb] font-bold text-lg md:text-2xl lg:text-lg">
            Visit our Business Resource Center
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 text-[#459adb] md:h-7"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <div className="bg-[#459adb] rounded-full h-5 w-5 opacity-20 ml-[-16px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
