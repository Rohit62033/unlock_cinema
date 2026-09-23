import OfferCard from "./OfferCard";

const offers = [
  {
    title: "YES Private Debit Card Offer",
    subtitle: "Tap to view details",
  },
  {
    title: "Buy 1 get 1 movie ticket free",
    subtitle: "Tap to view details",
  },
];

const OffersSection = () => {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold mb-6">
        Top offers for you
      </h2>

      <div className="flex gap-4 overflow-x-auto no-scrollbar">

        {
          offers.map((offer, index) => (
            <OfferCard
              key={index}
              offer={offer}
            />
          ))
        }

      </div>

    </section>
  );
};

export default OffersSection;