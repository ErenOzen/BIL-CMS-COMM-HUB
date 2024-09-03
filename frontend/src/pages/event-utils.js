/**
 * event-utils.js
 *
 * This module provides utility functions and constants for managing events.
 *
 * Constants:
 * - `INITIAL_EVENTS`: An array of initial event objects. Each event object contains an id, title, and start time.
 *
 * Functions:
 * - `createEventId()`: Generates a unique id for an event. It does this by incrementing a global counter (`eventGuid`).
 *
 * Variables:
 * - `eventGuid`: A counter for generating unique event ids. It starts at 0 and is incremented each time `createEventId()` is called.
 * - `todayStr`: A string representing today's date in the format 'YYYY-MM-DD'.
 *
 *
 * Created on: 12-May-24
 *
 * @author Eren Ozen
 * @version 1.0
 * @studentId 21803591
 * @team Code Benders
 */

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

// An array of initial event objects
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
];

// Generates a unique id for an event
export function createEventId() {
  return String(eventGuid++);
}
