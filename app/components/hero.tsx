import { Button } from "../../components/ui/button";
import { MoveRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";

function Hero(){
  return (
    <>
      <div className="lg:px-16 px-4 font-[Inter_Tight] flex flex-col lg:flex-row pe-20px">
        <div className="mt-32 lg:mt-52 ">
          <h1 className="text-4xl lg:text-6xl font-bold">The Reading application for professionals and programmers </h1>
          <p className="mt-2 text-gray-500 font-[Geist] lg:mt-6">Stay ahead of the curve, one page at a time. </p>
          <div className="mt-4 flex flex-row gap-2">
            <Button variant="outline" className="font-[Geist] hover:cursor-pointer text-sm">Try as a guest <MoveRight /></Button>
            <Button className="font-[Geist] text-sm hover:cursor-pointer">Sign up</Button>
          </div>
        </div>
        <video src="/landingpagevideo.mp4" className="lg:w-100 lg:mt-28" loop autoPlay />
      </div>
      <div className="lg:px-16 px-4 ">
        <p className="font-[Space_Grotesk] text-gray-600 word-spacing-[0.4em] text-xs mt-8">TURN READING TO AN UNFAIR ADVANTAGE</p>
        <div className="mb-16">
          <p className="font-[Inter_Tight] mt-12 lg:mt-24 lg:text-[48px] text-2xl font-bold">A new way to read what matters. <br className="lg:hidden"/><span className="text-gray-400">Purpose-built for curious professionals and builders, your intelligent space for discovering, understanding, and retaining the ideas that move your work forward.</span></p>
        </div>
      </div>
      <Carousel className="w-full sm:max-w-xs">
        <CarouselContent>
          <CarouselItem className="">
            <div className="p-1">
              <Card className="">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-8">
                    <div>
                      <img src="/saveanything.png" />
                    </div>
                    <div>
                      <h1 className="font-[Geist] font-semibold">Save anything</h1>
                      <p className="font-[Geist] text-gray-500">Save all of the interesting articles, videos, cooking recipes, song lyrics, or whatever else you come across while browsing. With one click, Instapaper lets you save, read, and manage the things you find on the Internet.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-8">
                    <div>
                      <img src="/readanywhere.png" />
                    </div>
                    <div>
                      <h1 className="font-[Geist] font-semibold">Read anywhere</h1>
                      <p className="font-[Geist] text-gray-500">Instapaper syncs the articles and videos you save so that they're waiting for you on all your devices - iPhone, iPad, Android, Kindle, Kobo, or Boox eReaders. You can read anything you save, anywhere and anytime you want, even offline!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col gap-8">
                    <div>
                      <img src="/createnotes.png" />
                    </div>
                    <div>
                      <h1 className="font-[Geist] font-semibold">Create Notes</h1>
                      <p className="font-[Geist] text-gray-500">Find that great quote you want to remember and share? Instapaper makes it easy to highlight and comment on text in any article so you can easily store it, retrieve it, quote it and share it.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default Hero;
