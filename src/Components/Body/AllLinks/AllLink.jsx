function AllLink() {
  return (
    <div className=" lg:flex lg:flex-row lg:gap-10">
      {/* 1st */}
      <div className="lg:w-[40%]">
        <h5 className="text-[#002f87] text-center font-bold md:text-2xl lg:text-start lg:text-lg">
          Small-to-Medium Business
        </h5>
        <hr className="h-[2px] bg-slate-500" />
        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col gap-3">
            <p className="font-semibold md:text-xl lg:text-lg">Introduction</p>
            <p className="font-semibold md:text-xl lg:text-lg">
              getting Started
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold md:text-xl lg:text-lg">All solution</p>
            <p className="md:text-xl lg:text-lg">Accept Payment</p>
            <p className="md:text-xl lg:text-lg">MAke Payment</p>
            <p className="md:text-xl lg:text-lg">Manage Risk</p>
            <p className="md:text-xl lg:text-lg">Accelerate Growth</p>
            <p className="md:text-xl lg:text-lg">Streamline Operations</p>
          </div>
        </div>
      </div>
      {/* 2nd */}
      <div className="mt[20px] lg:w-[40%]">
        <h5 className="text-[#002f87] text-center font-bold md:text-2xl lg:text-start lg:text-lg">
          Enterprise
        </h5>
        <hr className="h-[2px] bg-slate-500" />
        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col gap-3">
            <p className="font-semibold md:text-xl lg:text-lg">Introduction</p>
            <p className="font-semibold md:text-xl lg:text-lg">
              Marketplaces & partners{" "}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold md:text-xl lg:text-lg">
              Platforms & Solutions
            </p>
            <p className="md:text-xl lg:text-lg">Accept Payment</p>
            <p className="md:text-xl lg:text-lg">MAke Payment</p>
            <p className="md:text-xl lg:text-lg">Manage Risk</p>
            <p className="md:text-xl lg:text-lg">Accelerate Growth</p>
            <p className="md:text-xl lg:text-lg">Streamline Operations</p>
          </div>
        </div>
      </div>
      {/* 3rd */}
      <div className="mt-[20px] lg:mt-0">
        <h5 className="text-[#002f87] text-center font-bold md:text-2xl lg:text-start lg:text-lg">
          More
        </h5>
        <hr className="h-[2px] bg-slate-500" />
        <div className="flex flex-col gap-3 mt-5">
          <p className="font-semibold md:text-xl lg:text-lg">Nonprofits</p>
          <p className="font-semibold md:text-xl lg:text-lg">Pricing</p>
          <p className="font-semibold md:text-xl lg:text-lg">Resource Center</p>
        </div>
      </div>
    </div>
  );
}

export default AllLink;
