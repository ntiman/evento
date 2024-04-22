import { EventoEvent } from "@/lib/types";
import EventCard from "./event-card";

export default async function EventsList({ city }: { city: string }) {
  let events: EventoEvent[] = [];
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  if (response.status === 200) {
    events = await response.json();
  } else {
    events = [];
  }

  return (
    <section className="flex flex-wrap gap-10 max-w-[1100px] justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event}></EventCard>
      ))}
    </section>
  );
}
