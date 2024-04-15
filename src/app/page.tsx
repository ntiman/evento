import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="">Find events around you</h1>
      <p>Browse more than 10,000 events around you</p>

      <form>
        <input placeholder="Search events in your city..." spellCheck={false}/>
      </form>

      <section>
        <p>Popular: </p>
        <div>
          <Link href="events/toronto">Toronto</Link>
          <Link href="events/oakville">Oakville</Link>
        </div>
      </section>
    </main>
  )
}
