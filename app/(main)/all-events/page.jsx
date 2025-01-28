import { Suspense } from "react";
import { getAllOtherUserEvents } from "@/actions/all_events";
import EventCard from "@/components/event-card";

export default function EventsPage() {
  return (
    <Suspense fallback={<div>Loading all events...</div>}>
      <Events />
    </Suspense>
  );
}

async function Events() {
  const events = await getAllOtherUserEvents();

  if (events.length === 0) {
    return <p>No events available.</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
      {events?.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
