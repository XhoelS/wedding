import SplitText from "@/components/SplitText";

export default function About() {
  return (
    <section className="py-16 px-4 max-w-md sm:max-w-2xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-pretty mb-6 text-brandGold">
        <SplitText
          text="About us"
          className=" font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          //   onLetterAnimationComplete={handleAnimationComplete}
        />
      </h2>
      <p className="text-gray-700 text-sm sm:text-base">
        <SplitText
          text=" Klajd-Fer is dedicated to creating unforgettable weddings. We handle
        every detail, from planning to styling, to make your special day elegant
        and magical."
          className=" font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="lines"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          //   onLetterAnimationComplete={handleAnimationComplete}
        />
      </p>
    </section>
  );
}
