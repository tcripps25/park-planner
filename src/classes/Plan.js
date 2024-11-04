// src/models/Plan.js
import { v4 as uuidv4 } from 'uuid'
import Day from './Day'

export default class Plan {
  constructor(name = '', startDate = null, endDate = null) {
    this.id = uuidv4() // Unique identifier for each plan
    this.name = name
    this.startDate = new Date(startDate)
    this.endDate = new Date(endDate)
    this.days = this.generateDays() // Generate Day instances for each day in the date span
  }

  // Method to generate Day instances for each day within the startDate and endDate
  generateDays() {
    const daysArray = []
    let currentDate = new Date(this.startDate)

    while (currentDate <= this.endDate) {
      daysArray.push(new Day(currentDate))
      currentDate.setDate(currentDate.getDate() + 1) // Move to the next day
    }

    return daysArray
  }

  // Method to get the date span as a formatted string (for display purposes)
  getDateSpan() {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    const start = this.startDate.toLocaleDateString(undefined, options)
    const end = this.endDate.toLocaleDateString(undefined, options)
    return `${start} - ${end}`
  }
}
