import { useState } from 'react'

function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList)

  const fetchSportsEvents = async () => {
    const response = await fetch('http://localhost:4000/events?category=sports')
    const data = await response.json()
    setEvents(data)
  }
  return (
    <>
      <button onClick={fetchSportsEvents}>Fetch Sports Events</button>
      <h1>List of events</h1>
      {events.map(event => {
        return (
            <div key={event.id}>
              <h2>
              {event.id} {event.title} | {event.category}
              </h2>
              <p>{event.description}</p>
              <hr />
            </div>
        )
      })}
    </>
  )
}

export default EventList

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/events')
  const data = await response.json()

  return {
    props: {
      eventList: data,
    }
  }
} 
