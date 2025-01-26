"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Jake Robinson",
    role: "Full Stack Developer",
    content:
      "Finding the right team for a hackathon has never been easier. This platform helped me connect with experts and form a winning team in no time!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Maya Patel",
    role: "Computer Science Student",
    content:
      "I was struggling to find teammates for my group project, but this platform brought together like-minded students who shared my passion for coding.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Oliver Turner",
    role: "AI Researcher",
    content:
      "As an AI researcher, I needed a team that understood complex algorithms. This platform helped me connect with talented individuals who enhanced the project in ways I didn’t expect.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Lily Anderson",
    role: "Software Engineering Intern",
    content:
      "I was able to join a high-performing team for a coding challenge. The platform made it so easy to find experts and collaborate on real-world solutions.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];


const TestimonialsCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <p className="text-gray-600 mb-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center mt-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TestimonialsCarousel;
