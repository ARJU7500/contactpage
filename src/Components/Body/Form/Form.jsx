function Form() {
  // let url = "https://restcountries.com/v3.1/all";
  return (
    <div className="bg-white shadow-lg p-5 w-full rounded-md lg:w-[600px] lg:p-10 ">
      <div>
        <h1 className="text-xl md:text-2xl lg:text-3xl">Get Started</h1>
        <p className=" text-sm md:text-lg lg:text-lg">
          Tell us a little about your business so we can connect you with the
          right people.
        </p>
      </div>
      <form className="mt-5">
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Full Name*"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-mdlg:w-full "
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Last Name*"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            placeholder="Work email*"
            className=" w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:-full"
          />
        </div>
        <div className="mb-5">
          <input
            type="number"
            name="email"
            id="email"
            autoComplete="off"
            required
            placeholder="Phone number*"
            className=" w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md  lg:w-full"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Company name*"
            className=" w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md  lg:w-full"
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Company website*"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md  lg:w-full"
          />
        </div>
        <div className="mb-5">
          <select
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md  lg:w-full"
          >
            <option>Country</option>
            <option>India</option>
            <option>UAE</option>
          </select>
        </div>
        <div className="mb-5">
          <select
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Company website*"
            className="w-[100%]  rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
          >
            <option>Country</option>
            <option>India</option>
            <option>UAE</option>
          </select>
        </div>
        <div className="mb-5">
          <select
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            placeholder="Company website*"
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
          >
            <option>Country</option>
            <option>India</option>
            <option>UAE</option>
          </select>
        </div>
        <div className="mb-5 flex gap-2">
          <input type="checkbox" className="lg:w-10" />
          <p>
            I have read and accepted the
            <a href="#" className="text-[#459adb] ml-1">
              PayPal Privacy Policy.
            </a>
          </p>
        </div>
        <div className="mb-5 p-5">
          <p>
            I consent to paypal contacting me by phone or by email, and to
            sending me product or industry information relevant to my query. I
            know I can unsubscribe at any time.
          </p>
        </div>
        <div className=" flex justify-center items-center md:flex md:justify-center md:items-center">
          <button className="px-6 hover:shadow-form rounded-3xl bg-[#459adb] py-2 lg:px-48 text-base text-white outline-none md:text-lg">
            Submit
          </button>
        </div>
        <div className="flex justify-center mt-10 items-center">
          <p>*Required fields.</p>
        </div>
      </form>
    </div>
  );
}

export default Form;