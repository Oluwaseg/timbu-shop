import Loading from "../components/Loading";
import Copy from "../components/Copy";

export default function PaymetLoadModal() {
  return (
    <div className="py-2 md:py-8 md:px-16 bg-[#FBF4F5] w-full h-full justify-center flex items-center">
      <div className="flex flex-col items-center md:gap-8 md:w-3/4 ">
        <Loading />
        <div className="flex flex-col text-center md:gap-5">
          <p className="font-bold">Kindly make payment for your goods</p>
          <p>
            Please follow the instructions below and do not refresh or leave the
            page after making payment. Payment confirmation may take up to 2
            minutes
          </p>
        </div>
        <div className="bg-white flex flex-col md:w-4/5 md:gap-8 rounded-xl md:px-8 md:pt-8 md:pb-4">
          <p className="font-bold">Transfer to the account details below </p>
          <div className="flex flex-col md:gap-4">
            <p className="text-[#332427B2]">Bank Name</p>
            <p className="font-bold">Sterling Bank</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col md:gap-4">
              <p className="text-[#332427B2]">Bank Name</p>
              <p className="font-bold">Sterling Bank</p>
            </div>
            <Copy />
          </div>
          <div className="flex flex-col md:gap-4">
            <p className="text-[#332427B2]">Account Name</p>
            <p className="font-bold">SkinHub</p>
          </div>
          <hr />
          <div>
            <p className="font-bold">
              Transfer exact amount to avoid transaction failure
            </p>
            <div className="flex justify-between items-center">
              <div className="flex flex-col md:gap-4">
                <p className="text-[#332427B2]">Amount to Pay</p>
                <p className="font-bold">#18,000</p>
              </div>
              <Copy />
            </div>
          </div>
          <hr />
          <p className="font-bold text-center">
            This screen will be updated after payment
          </p>
        </div>
      </div>
    </div>
  );
}
