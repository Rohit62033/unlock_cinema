import { BadgeCheck } from "lucide-react";

const OfferCard = ({ offer }) => {
  return (
    <div
      className="
        min-w-[320px]
        border
        border-yellow-300
        bg-yellow-50
        rounded-xl
        p-4
        flex
        items-start
        gap-3
      "
    >

      <BadgeCheck
        className="text-pink-500 mt-1"
      />

      <div>
        <h3 className="font-semibold">
          {offer.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {offer.subtitle}
        </p>
      </div>

    </div>
  );
};

export default OfferCard;