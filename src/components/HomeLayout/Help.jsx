import { Button } from "keep-react";
import { FaQuestionCircle } from "react-icons/fa";
const Help = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="500"
      className="bg-white px-[4%] lg:px-[7%] py-12"
    >
      <h3 className="text-center text-2xl lg:text-4xl font-semibold text-black ">
        Need help? Let's get in touch
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center gap-6 py-7">
        <div className="border border-metal-300 shadow-xl rounded-xl p-8 text-center space-y-3">
          <div className="text-4xl flex justify-center">
            <FaQuestionCircle />
          </div>
          <h4>Frequently Asked Questions</h4>
          <p>
            You can post your queries on our item detail page in comments
            section
          </p>
          <Button color="warning" className="rounded-none bg-[#f39c12] w-28">
            Go to FAQs
          </Button>
        </div>
        <div className="border border-metal-300 shadow-xl rounded-xl p-8  text-center space-y-3">
          <div className="text-4xl flex justify-center">
            <FaQuestionCircle />
          </div>
          <h4>Frequently Asked Questions</h4>
          <p>
            You can post your queries on our item detail page in comments
            section
          </p>
          <Button color="error" className="rounded-none w-28">
            Go to FAQs
          </Button>
        </div>
        <div className="border border-metal-300 shadow-xl rounded-xl p-8  text-center space-y-3">
          <div className="text-4xl flex justify-center">
            <FaQuestionCircle />
          </div>
          <h4>Frequently Asked Questions</h4>
          <p>
            You can post your queries on our item detail page in comments
            section
          </p>
          <Button className="rounded-none bg-[#00a8ff] w-28">Go to FAQs</Button>
        </div>
      </div>
    </div>
  );
};

export default Help;
