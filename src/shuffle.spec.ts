import { expect } from 'chai';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  const items = ['random', 'values', 'in', 'a', 'list'];

  it('contains all of the items from the original list', () => {
    expect(shuffle(items)).to.include.members(items);
  });

  it('does not add any new members', () => {
    expect(shuffle(items).length).to.equal(items.length);
  });
});
