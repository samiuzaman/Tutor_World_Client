const Stats = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto grid grid-cols-2 lg:grid-cols-4 my-16 text-center gap-5 border border-metal-500 rounded-xl py-3">
      <div>
        <h4 className="text-xl lg:text-2xl font-bold text-metal-900">100+</h4>
        <p className="text-base lg:text-lg font-meduum text-metal-600">
          Total Tutors
        </p>
      </div>
      <div>
        <h4 className="text-xl lg:text-2xl font-bold text-metal-900">150+</h4>
        <p className="text-base lg:text-lg font-meduum text-metal-600">
          Total Reviews
        </p>
      </div>
      <div>
        <h4 className="text-xl lg:text-2xl font-bold text-metal-900">15+</h4>
        <p className="text-base lg:text-lg font-meduum text-metal-600">
          Total Language
        </p>
      </div>
      <div>
        <h4 className="text-xl lg:text-2xl font-bold text-metal-900">150+</h4>
        <p className="text-base lg:text-lg font-meduum text-metal-600">
          Total User
        </p>
      </div>
    </div>
  );
};

export default Stats;
