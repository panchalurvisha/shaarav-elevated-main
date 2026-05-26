import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProductCarousel({ products }) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  // Triple the list of products for perfect infinite seamless scroll padding
  const duplicatedProducts = [...products, ...products, ...products];

  // Marquee auto-scrolling logic using requestAnimationFrame for 60fps GPU acceleration
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationFrameId;
    const speed = 0.8; // Pixels per frame - perfect slow auto movement

    const animate = () => {
      if (!isHovered && !isMouseDown) {
        el.scrollLeft += speed;

        // Reset scroll when reaching the loop boundary
        const cardWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= cardWidth * 2) {
          el.scrollLeft -= cardWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += cardWidth;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isMouseDown]);

  // Center card tracking to determine active scaled item
  const updateActiveCard = () => {
    const el = containerRef.current;
    if (!el) return;

    const containerCenter = el.scrollLeft + el.clientWidth / 2;
    const cards = el.querySelectorAll(".product-card");
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = idx;
      }
    });

    // Match back to original index
    setActiveIndex(closestIndex % products.length);
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setIsDragging(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    updateActiveCard();
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    const el = containerRef.current;
    el.scrollLeft = scrollLeft - walk;

    // Handle wrap boundaries during drag
    const cardWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= cardWidth * 2) {
      el.scrollLeft -= cardWidth;
      setStartX(x);
      setScrollLeft(el.scrollLeft);
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += cardWidth;
      setStartX(x);
      setScrollLeft(el.scrollLeft);
    }
    updateActiveCard();
  };

  // Touch Swipe Events
  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    
    const el = containerRef.current;
    el.scrollLeft = scrollLeft - walk;

    const cardWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= cardWidth * 2) {
      el.scrollLeft -= cardWidth;
      setStartX(x);
      setScrollLeft(el.scrollLeft);
    } else if (el.scrollLeft <= 0) {
      el.scrollLeft += cardWidth;
      setStartX(x);
      setScrollLeft(el.scrollLeft);
    }
    updateActiveCard();
  };

  // Navigation click helpers
  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    const offsetWidth = el.clientWidth * 0.4;
    el.scrollTo({
      left: el.scrollLeft + (direction === "left" ? -offsetWidth : offsetWidth),
      behavior: "smooth",
    });
    setTimeout(updateActiveCard, 300);
  };

  // Initial scroll position to start in the middle duplicated section
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 3;
    }
  }, [products]);

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Side Fade Gradients for continuous look */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />

      {/* Main Track Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          handleMouseUp();
          setIsHovered(false);
          setIsMouseDown(false);
        }}
        onScroll={updateActiveCard}
        className="flex items-center gap-6 overflow-x-auto select-none cursor-grab active:cursor-grabbing scroll-smooth py-6 px-16"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {duplicatedProducts.map((product, idx) => {
          const originalIdx = idx % products.length;
          const isActive = activeIndex === originalIdx;

          return (
            <div
              key={`${product.id}-${idx}`}
              onClick={() => {
                if (!isDragging) {
                  navigate(`/products/${product.id}`);
                }
              }}
              className="product-card shrink-0 transition-all duration-500 ease-out transform cursor-pointer"
              style={{
                width: "calc(100vw - 32px)", // Mobile: 1 visible
                maxWidth: "280px", // Baseline max width
                // Make active card slightly larger with premium depth scale
                scale: isActive ? "1.05" : "0.95",
                opacity: isActive ? "1" : "0.75",
              }}
            >
              {/* Glassmorphism Card */}
              <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-soft hover:shadow-deep transition-all duration-300 flex flex-col p-4 group h-full">
                {/* Image Container with rustic closeups */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-background mb-4 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                  />
                  {/* Subtle soft gradient over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow text-left">
                  <h3 className="font-display text-lg text-cocoa leading-tight tracking-wide font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm text-cocoa/70 leading-relaxed font-sans line-clamp-2">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>


      {/* Styled width overrides for responsive card viewport layouts */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 640px) {
          .product-card {
            width: 30vw !important;
          }
        }
        @media (min-width: 768px) {
          .product-card {
            width: 25vw !important;
          }
        }
        @media (min-width: 1024px) {
          .product-card {
            width: 18vw !important;
          }
        }
      `}} />
    </div>
  );
}
