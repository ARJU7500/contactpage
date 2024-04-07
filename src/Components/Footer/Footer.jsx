import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="my-[50px] px-6 lg:mt-[100px]">
      <div className="">
        <div className="flex justify-center items-center lg:flex lg:justify-start">
          <img src="./image/footer/pay.png" className="w-[200px] " alt="logo" />
        </div>
        <div className="mt-[30px] flex justify-between">
          <div className="md:flex md:flex-wrap gap-5 ">
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Help
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Contact
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Fees
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Security
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Apps
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Shops
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Enterprise
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                partners
              </Link>
            </p>
            <p>
              <Link
                className="text-[#002f87] font-bold md:text-xl lg:text-lg"
                to="#"
              >
                Feedback
              </Link>
            </p>
          </div>
          <div>
            <img src="./image/footer/flag.png" className="w-10" alt="flag" />
          </div>
        </div>
      </div>
      <div className="py-4">
        <hr className="h-[2px] bg-slate-500" />
      </div>
      <div className="flex justify-between">
        <div className="md:flex md:flex-wrap gap-5">
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              About
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Newsroom
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Job
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Investor Relation
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Values in Action
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Public Policy
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Sitemap
            </Link>
          </p>
        </div>
        <div className="md:flex md:flex-wrap gap-5">
          <p className="md:text-xl">@1999-2022</p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Accessibility
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Privacy
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Cookies
            </Link>
          </p>
          <p>
            <Link
              className="text-[#002f87] font-bold md:text-xl lg:text-lg"
              to="#"
            >
              Legal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
