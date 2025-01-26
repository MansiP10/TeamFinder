import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import TestimonialsCarousel from "@/components/testimonials";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Design and customize events that reflect your professional skills. Effortlessly create engaging experiences tailored to your audience. Turn your expertise into memorable moments with ease.",
  },
  {
    icon: Clock,
    title: "Expert Availability and Scheduling",
    description: "Set your availability with ease to stay in control of your schedule. Eliminate conflicts and make booking seamless for your clients. Focus on what you do best while your calendar works for you.",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Effortlessly share your personalized scheduling link with clients and peers. Simplify the booking process by creating a unique URL tailored to your events. Make scheduling seamless and professional in just a few clicks.",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free account on TeamFiner" },
  {
    step: "Set Availability",
    description: "Set your availability to teach and share your expertise with ease",
  },
  {
    step: "Share Your Link",
    description: "Share your scheduling link with active peers and experts to host valuable, skill-focused sessions.",
  },
  {
    step: "Get Booked",
    description: "Get automatic confirmations for new skill-sharing appointments.",
  },
];

const Home = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold gradient-title pb-6">
            Find Your Perfect Team <span className="text-orange">for Success</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
          Join a community of skilled individuals ready to collaborate on hackathons challenges and group projects. Connect with experts in various fields to enhance your team capabilities.
        </p>
          <Link href={"/dashboard"}>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.jpg"
              alt="Scheduling illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-12 h-12 text-orange-500 mb-4 mx-auto" />
                <CardTitle className="text-center text-orange-600">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Testimonials
        </h2>
        <TestimonialsCarousel />
      </div>

      {/* How It Works Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-blue rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue">
          Ready to Find Your Team Members?
        </h2>
        <p className="text-xl mb-6 text-blue">
          Join thousands of professionals who trust TeamFinder for efficient time management. Connect with skilled experts and collaborate on exciting projects. Join our platform today and elevate your productivity!
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="text-blue-600">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
