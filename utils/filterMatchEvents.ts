export const filterMatchEvents = (events: any[]) => {
    return events.filter(event => event.type && event.time);
  };
  