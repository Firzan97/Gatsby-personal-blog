import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-grey">
    <Title title="My Services" />
    <div className="section-center services-center">
      {services.map(service => {
        console.log(service)

        return "alat"
      })}
    </div>
  </section>
}

export default Services
