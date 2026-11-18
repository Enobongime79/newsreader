import { Button } from "../../components/ui/button";
import { MoveRight } from "lucide-react";

interface highlight {
  key: string;
  header: string;
  content: string;
}

function Hero() {
  const highlights: highlight[] = [
    {
      key: crypto.randomUUID(),
      header: "DISTRACTION-FREE READING",
      content:
        " Escape the clutter of modern social media algorithms, pop-up banners, and endless sidebars. An RSS reader delivers a clean, focused, chronological stream of only the blogs, news sites, and creators you actually care about.",
    },
    {
      key: crypto.randomUUID(),
      header: "RECLAIM YOUR TIME",
      content:
        "Stop manually jumping across dozens of different websites to see if anything is new. Bring all your favorite sources into one centralized hub so you can catch up on everything in one place, on your own schedule.",
    },
    {
      key: crypto.randomUUID(),
      header: "POWER-USER CURATION",
      content:
        "Go beyond basic reading by organizing content into custom folders, starring key articles, setting up rules, or connecting your feeds to external tools and newsletters to supercharge your workflow.",
    },
  ];

  return (
    <main className="pb-16 dark:bg-[#0D1117]">
      <div className="lg:px-16 md:px-32 px-4 font-[Inter_Tight] flex flex-col lg:flex-row pe-20px">
        <div className="mt-32 blur-reveal lg:mt-52 ">
          <h1 className="text-4xl lg:text-6xl font-[Manrope] text-[#1A1D21] dark:text-[#E6EDF3]">
            The Reading application for professionals and programmers{" "}
          </h1>
          <p className="mt-2 font-[Geist] dark:text-[#8B949E] text-[#57606A] lg:mt-6">
            Stay ahead of the curve, one page at a time.{" "}
          </p>
          <div className="mt-4 flex flex-row gap-2">
            <Button
              variant="outline"
              className="font-[Geist] hover:cursor-pointer text-sm"
            >
              Try as a guest <MoveRight />
            </Button>
            <Button className="font-[Geist] text-sm hover:cursor-pointer">
              Sign up
            </Button>
          </div>
        </div>
        <video
          src="/landingpagevideo.mp4"
          className="lg:w-100 lg:mt-28 mt-8 rounded-2xl"
          loop
          playsInline
          muted
          autoPlay
        />
      </div>
      <div className="lg:px-16 px-4 md:px-32 ">
        <p className="font-[Space_Grotesk] text-gray-600 blur-reveal word-spacing-[0.4em] text-sm mt-8">
          TURN READING TO AN UNFAIR ADVANTAGE
        </p>
        <div className="mb-16">
          <p className="font-[Manrope] mt-12 lg:mt-24 lg:text-[48px] text-2xl font-">
            A new way to read what matters. <br className="lg:hidden" />
            <span className="dark:text-[#8B949E] text-[#57606A]">
              Purpose-built for curious professionals and builders, your
              intelligent space for discovering, understanding, and retaining
              the ideas that move your work forward.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:px-16 md:px-32 px-4 gap-8">
        {highlights.map((highlight) => (
          <div key={highlight.key} className="font-[Inter] border-s dark:border-[#21262D] px-6 py-8 md:py-8">
            <h1 className="text-3xl font-[Manrope] text-[#1A1D21] dark:text-[#E6EDF3] font-medium mb-16">{highlight.header}</h1>
            <p className="text-md font-[Manrope] dark:text-[#8B949E] text-[#57606A] font-light">{highlight.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hero;
