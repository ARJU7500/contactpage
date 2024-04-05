import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-[150px] md:mt-[700px] lg:my-[150px]">
      <div className="px-4 lg:flex lg:justify-between lg:items-start lg:px-36">
        {/* 1st */}
        <div className="lg:w-[33%]">
          <h5 className="text-[#002f87] font-bold">Small-to-Medium Business</h5>
          <hr className="h-[2px] bg-slate-500" />
          <div className="flex justify-between items-start mt-5">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Introduction</p>
              <p className="font-semibold">getting Started</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">All solution</p>
              <p>Accept Payment</p>
              <p>MAke Payment</p>
              <p>Manage Risk</p>
              <p>Accelerate Growth</p>
              <p>Streamline Operations</p>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className="lg:w-[33%]">
          <h5 className="text-[#002f87] font-bold">Enterprise</h5>
          <hr className="h-[2px] bg-slate-500" />
          <div className="flex justify-between items-start mt-5">
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Introduction</p>
              <p className="font-semibold">Marketplaces & partners </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">Platforms & Solutions</p>
              <p>Accept Payment</p>
              <p>MAke Payment</p>
              <p>Manage Risk</p>
              <p>Accelerate Growth</p>
              <p>Streamline Operations</p>
            </div>
          </div>
        </div>
        {/* 3rd */}
        <div>
          <h5 className="text-[#002f87] font-bold">More</h5>
          <hr className="h-[2px] bg-slate-500" />
          <div className="flex flex-col gap-3 mt-5">
            <p className="font-semibold">Nonprofits</p>
            <p className="font-semibold">Pricing</p>
            <p className="font-semibold">Resource Center</p>
          </div>
        </div>
      </div>
      <div className="mt-[100px] lg:px-10">
        <div className="flex justify-center items-center">
          <img src="./image/footer/pay.png" className="w-[250px] " alt="logo" />
        </div>
        <div className=" px-4 mt-[30px] flex justify-between">
          <div className="md:flex md:justify-between md:items-center md:gap-5 lg:flex lg:justify-between lg:items-center lg:gap-10">
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Help
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Contact
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Fees
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Security
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Apps
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Shops
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Enterprise
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                partners
              </Link>
            </p>
            <p>
              <Link className="text-[#002f87] font-bold" to="#">
                Feedback
              </Link>
            </p>
          </div>
          <div>
            <img src="./image/footer/flag.png" className="w-10" alt="flag" />
          </div>
        </div>
      </div>
      <div className="py-4 px-4 lg:px-10">
        <hr className="h-[2px] bg-slate-500" />
      </div>
      <div className=" px-4 flex justify-between md:flex md:flex-col md:pb-10 lg:pb-0 lg:flex-row lg:justify-between lg:px-10">
        <div className="md:flex md:justify-between md:gap-5 lg:flex lg:justify-between lg:gap-10">
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              About
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Newsroom
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Job
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Investor Relation
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Values in Action
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Public Policy
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Sitemap
            </Link>
          </p>
        </div>
        <div className="md:flex md:justify-between md:gap-5 md:mt-5 lg:mt-0 lg:w-[33%]">
          <p>@1999-2022</p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Accessibility
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Privacy
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Cookies
            </Link>
          </p>
          <p>
            <Link className="text-[#002f87] font-bold" to="#">
              Legal
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
