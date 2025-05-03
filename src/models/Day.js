export class Day {
  constructor(date) {
    const d = new Date(date)

    this.fullDate = d
    this.weekday = d.toLocaleDateString('en-US', { weekday: 'long' })
    this.month = d.toLocaleDateString('en-US', { month: 'long' })
    this.day = d.getDate()
  }
}
