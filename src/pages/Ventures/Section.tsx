function Section() {
  return (
    <div className="py-8">
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center shadow-sm shadow-gray-200 bg-gray-100 py-8 md:py-16">
          <h3 className="font-bold text-xl">50+</h3>
          <p className="text-gray-500">Projects Completed</p>
        </div>
        <div className="text-center shadow-sm shadow-gray-200 bg-gray-100 py-8 md:py-16">
          <h3 className="font-bold text-xl">15+</h3>
          <p className="text-gray-500">Team Members</p>
        </div>
        <div className="text-center shadow-sm shadow-gray-200 bg-gray-100 py-8 md:py-16">
          <h3 className="font-bold text-xl">98%</h3>
          <p className="text-gray-500">Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
}

export default Section;
