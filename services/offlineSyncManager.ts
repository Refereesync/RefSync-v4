let localActionsQueue: any[] = [];

export const queueAction = (action: any) => {
  localActionsQueue.push(action);
};

export const flushQueue = async () => {
  while (localActionsQueue.length > 0) {
    const action = localActionsQueue.shift();
    await sendToServer(action);
  }
};

const sendToServer = async (action: any) => {
  console.log("Syncing to server:", action);
};
