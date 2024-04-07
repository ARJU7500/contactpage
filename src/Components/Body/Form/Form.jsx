import { useState, useEffect } from "react";

function Form() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      // 1st promise
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network Shi krne ka ");
        }
        // convert into json data
        return res.json();
      })
      .then((data) => {
        // map fuction like a loop
        const countryNames = data.map((country) => country.name.common);
        // srting bat name a to z
        const sortedCountryNames = countryNames.sort((a, b) =>
          a.localeCompare(b)
        );
        setCountries(sortedCountryNames);
      })
      .catch((e) => {
        console.error("Thoda check kr kuch big gya h ", e);
      });
  }, []);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="bg-white shadow-lg p-5 w-full rounded-md ">
      <div>
        <h1 className="text-xl md:text-3xl lg:text-2xl">Get Started</h1>
        <p className=" text-sm md:text-xl md:mt-2 lg:text-lg">
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
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full "
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
            className=" w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
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
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
          />
        </div>
        <div className="mb-5">
          <select
            value={selectedCountry}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            required
            className="w-[100%] rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:shadow-md lg:w-full"
          >
            <option className="md:text-xl">Select Country*</option>
            {countries.map((country, index) => (
              <option className="md:text-xl" key={index} value={country}>
                {country}
              </option>
            ))}
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
            <option className="md:text-xl">Select Annual sales* </option>
            <option className="md:text-xl">1Lac-50Lac</option>
            <option className="md:text-xl">50Lac-1cr</option>
            <option className="md:text-xl">1cr-50cr</option>
            <option className="md:text-xl">50cr-10m</option>
            <option className="md:text-xl">other</option>
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
            <option className="md:text-xl">
              Do you have already papyl account*
            </option>
            <option className="md:text-xl">yes</option>
            <option className="md:text-xl">no</option>
          </select>
        </div>
        <div className="mb-5 flex gap-2">
          <input type="checkbox" className=" md:w-6 lg:w-5" />
          <p className="md:text-lg lg:text-base">
            I have read and accepted the
            <a href="#" className="text-[#459adb] ml-1">
              PayPal Privacy Policy.
            </a>
          </p>
        </div>
        <div className="mb-5 md:text-lg lg:text-base">
          <p>
            I consent to paypal contacting me by phone or by email, and to
            sending me product or industry information relevant to my query. I
            know I can unsubscribe at any time.
          </p>
        </div>
        <div className=" flex justify-center items-center md:flex md:justify-center md:items-center">
          <button className="px-6 hover:shadow-form rounded-3xl bg-[#459adb] py-2 text-base text-white outline-none md:text-xl md:px-36 md:py-3">
            Submit
          </button>
        </div>
        <div className="flex justify-center mt-10 items-center">
          <p className="text-xl lg:text-base">*Required fields.</p>
        </div>
      </form>
    </div>
  );
}

export default Form;
