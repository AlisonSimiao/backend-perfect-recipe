import { AutorizationMiddleware } from './authorization.middleware';

describe('AutorizationMiddleware', () => {
  it('should be defined', () => {
    expect(new AutorizationMiddleware()).toBeDefined();
  });
});
