const events = [];

export function logEvent(event) {
  events.push(event);
}

export function undoLastEvent() {
  events.pop();
}

export function getTimeline() {
  return events;
}