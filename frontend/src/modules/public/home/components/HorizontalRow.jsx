import ContentCard from "./ContentCard";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HorizontalRow = ({ items = [] ,city }) => {

  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const isScrollable = items.length > 2;

  const smoothScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const distance = container.clientWidth * 0.8;
    const start = container.scrollLeft;
    const target =
      start + (direction === "left" ? -distance : distance);

    const duration = 800;
    const startTime = performance.now();

    const easeOutQuint = (t) => 0.8 - Math.pow(1 - t, 5);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      container.scrollLeft =
        start + (target - start) * easeOutQuint(progress);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);

    // small buffer to avoid precision issues
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    checkScroll();
  }, [items]);
  
  return (



    <div className="relative">
      {/* LEFT BUTTON */}
      {canScrollLeft && isScrollable && <button
        onClick={() => smoothScroll("left")}
        className="hidden md:block absolute -left-8 top-[45%] -translate-y-1/2 z-10 
        bg-black/60 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FiChevronLeft className="text-white/90 text-2xl" />
      </button>}



      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className={`
  gap-4 md:gap-6 pb-4

  ${isScrollable
            ? "flex overflow-x-auto no-scrollbar"
            : "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 "
          }
`}>
        {items.map((item) => (
          <ContentCard key={item.id} item={item} isScrollable={isScrollable} city={city} />
        ))}


      </div>

      {canScrollRight && isScrollable && <button
        onClick={() => smoothScroll("right")}
        className="hidden md:block  absolute -right-3 top-[45%] -translate-y-1/2 z-10 
        bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        <FiChevronRight className="text-white/90 text-2xl" />
      </button>}
    </div>

  );
};

export default HorizontalRow;
