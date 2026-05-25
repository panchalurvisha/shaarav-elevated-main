import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

export function TestimonialCarousel({ testimonials }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId;
    let lastTime = performance.now();
    const speed = 0.05; // pixels per millisecond

    const scroll = (time) => {
      if (!isHovered) {
        const delta = time - lastTime;
        el.scrollLeft += speed * delta;

        // If scrolled past the first set of items, reset seamlessly
        // We assume the scrollWidth is at least twice the clientWidth because of duplicated items
        // To be safe, we check if scrollLeft has passed the middle point (assuming we duplicated 2x or more)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      lastTime = time;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered]);

  // Duplicate items to allow seamless infinite scrolling
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsHovered(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto pb-8 pt-4 hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {duplicatedTestimonials.map((t, i) => (
          <article 
            key={i} 
            className="relative w-[260px] md:w-[320px] shrink-0 bg-paper p-5 shadow-soft"
          >
            <Quote className="absolute right-4 top-4 text-primary/10" size={40} />
            <div className="relative z-10 flex h-full flex-col">
              <p className="flex-1 text-sm leading-relaxed text-cocoa/80 italic">"{t.quote}"</p>
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="font-display text-base text-cocoa">{t.author}</h4>
                <p className="text-xs text-cocoa/60">{t.role}{t.company ? ` · ${t.company}` : ""}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
