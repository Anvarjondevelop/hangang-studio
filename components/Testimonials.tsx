"use client";

import { motion } from "motion/react";

import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { TESTIMONIAL_COLUMNS } from "@/lib/constants";

const [firstColumn, secondColumn, thirdColumn] = TESTIMONIAL_COLUMNS;

export function Testimonials() {
  return (
    <section className="section-shell relative mt-6 overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center text-center"
        >
          <div className="hero-pill caps-md inline-flex items-center rounded-full px-4 py-2 text-xs font-medium uppercase text-primary">
            Testimonials
          </div>

          <h2 className="mt-6 font-sans text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            What our users say
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            See what our customers have to say about the experience, support,
            and workflow improvements they gained.
          </p>
        </motion.div>

        <div className="mt-12 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
