// src/models/Day.js
import { v4 as uuidv4 } from 'uuid'

export default class Day {
  constructor(date = new Date()) {
    this.id = uuidv4() // Unique identifier for each day
    this.date = new Date(date) // The date this instance represents
    this.locations = [] // Placeholder for an array of Location objects
    this.notes = '' // Notes for the day
  }

  // Method to format the date for display (optional)
  getFormattedDate() {
    return this.date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }
}
