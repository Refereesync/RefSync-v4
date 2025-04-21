let localActionsQueue: any[] = [];

export const queueAction = (action: any) => {
  localActionsQueue.push(action);
};

export const flushQueue = async () => {
  const actions = [...localActionsQueue];
  localActionsQueue = [];

  for (const action of actions) {
    try {
      await sendToServer(action);
    } catch (err) {
      console.error("Sync error:", err);
      queueAction(action); // Requeue if failed
    }
  }
};

const sendToServer = async (action: any) => {
  // Simulated network send
  return new Promise(resolve => setTimeout(resolve, 100));
};