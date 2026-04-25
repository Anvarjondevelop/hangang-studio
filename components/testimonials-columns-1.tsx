"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type TestimonialsColumnProps = {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
};

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 bg-background pb-6"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, itemIndex) => (
              <article
                className="w-full max-w-xs rounded-3xl border border-border/70 bg-card p-10 shadow-lg shadow-primary/10"
                key={`${name}-${itemIndex}`}
              >
                <p className="text-sm leading-7 text-foreground/90">{text}</p>

                <div className="mt-5 flex items-center gap-3">
                  <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <div className="flex flex-col">
                    <div className="font-medium leading-5 tracking-tight text-foreground">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight text-muted-foreground">
                      {role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
