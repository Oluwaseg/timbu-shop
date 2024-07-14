import Loading from "../components/Loading";
import Copy from "../components/Copy";

export default function PaymentLoadModal() {
  return (
    <div className="py-12 md:py-8 px-4 md:px-16 bg-[#FBF4F5] w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-xl">
        <Loading />

        <div className="text-center">
          <p className="font-bold text-lg md:text-xl">
            Kindly make payment for your goods
          </p>
          <p className="text-sm md:text-base text-gray-700 mt-2">
            Please follow the instructions below and do not refresh or leave the
            page after making payment. Payment confirmation may take up to 2
            minutes.
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 md:p-8 w-full">
          <p className="font-bold text-lg md:text-xl mb-4">
            Transfer to the account details below
          </p>

          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex justify-between">
              <p className="text-sm md:text-base text-gray-600">Bank Name</p>
              <p className="font-semibold">Sterling Bank</p>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm md:text-base text-gray-600">
                  Account Number
                </p>
                <p className="font-semibold">0123456789</p>
              </div>
              <Copy />
            </div>

            <div className="flex justify-between">
              <p className="text-sm md:text-base text-gray-600">Account Name</p>
              <p className="font-semibold">SkinHub</p>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="text-sm md:text-base text-gray-600">
                  Amount to Pay
                </p>
                <p className="font-semibold">#18,000</p>
              </div>
              <Copy />
            </div>

            <hr className="my-4" />

            <p className="font-semibold text-center">
              This screen will update automatically after payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
