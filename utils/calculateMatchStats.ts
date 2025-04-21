export const calculateMatchStats = (events: any[]) => {
    const stats = {
      goals: 0,
      yellows: 0,
      reds: 0,
      substitutions: 0,
    };
  
    events.forEach(event => {
      if (event.type === 'goal') stats.goals++;
      if (event.type === 'yellow') stats.yellows++;
      if (event.type === 'red') stats.reds++;
      if (event.type === 'sub') stats.substitutions++;
    });
  
    return stats;
  };
  