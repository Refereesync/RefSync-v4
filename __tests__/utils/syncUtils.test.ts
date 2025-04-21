import { queueAction, flushQueue } from '../../services/offlineSyncManager';

describe('OfflineSyncManager', () => {
  it('should queue and flush actions', async () => {
    const testAction = { type: 'ADD_SCORE', payload: { player: 'p1' } };
    await queueAction(testAction);
    const syncFn = jest.fn().mockResolvedValue(undefined);
    await flushQueue(syncFn);
    expect(syncFn).toHaveBeenCalledWith(testAction);
  });
});