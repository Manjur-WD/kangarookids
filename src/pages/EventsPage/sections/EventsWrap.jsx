import React from 'react'
import EventsFilter from './EventsFilter'
import EventsGalleryContainer from './EventsGalleryContainer'

function EventsWrap() {
  return (
    <>
      <section className="events-gallery-wrapper">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <EventsFilter />
                </div>
                <div className="col-md-12">
                    <EventsGalleryContainer />
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default EventsWrap
