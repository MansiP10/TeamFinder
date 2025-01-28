"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "lucide-react";
import { useState } from "react";

export default function EventCard({ event, username }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${window?.location.origin}/${username}/${event.id}`
      );
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleCardClick = () => {
    window?.open(`${window?.location.origin}/${username}/${event.id}/booking`, "_blank");
  };

  return (
    <Card
      className="flex flex-col justify-between cursor-pointer"
      onClick={handleCardClick}
    >
      <CardHeader>
        <CardTitle className="text-2xl">{event.title}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>
            {event.duration} mins | {event.isPrivate ? "Private" : "Public"}
          </span>
          <span>{event._count.bookings} Bookings</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{event.description.substring(0, event.description.indexOf("."))}.</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className="flex items-center"
        >
          <Link className="mr-2 h-4 w-4" />
          {isCopied ? "Copied!" : "Copy Link"}
        </Button>
      </CardFooter>
    </Card>
  );
}
