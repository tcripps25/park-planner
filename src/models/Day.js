export class Day {
  constructor(date) {
    const d = new Date(date)

    this.fullDate = d
    // Changed 'long' to 'short' for the weekday format
    this.weekday = d.toLocaleDateString('en-US', { weekday: 'short' })
    this.month = d.toLocaleDateString('en-US', { month: 'long' })
    this.day = d.getDate()
  }
}
