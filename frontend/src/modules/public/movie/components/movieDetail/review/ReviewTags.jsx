const ReviewTags = ({ tags }) => {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">

      {
        tags.map((item, index) => (
          <div
            key={index}
            className="
              whitespace-nowrap
              border
              rounded-full
              px-4
              py-2
              text-sm
              bg-white
            "
          >

            <span className="text-[#F84464] font-medium">
              {item.tag}
            </span>

            <span className="ml-2 text-gray-500">
              {item.count}
            </span>

          </div>
        ))
      }

    </div>
  );
};

export default ReviewTags;