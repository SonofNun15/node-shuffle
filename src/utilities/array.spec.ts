import { expect } from 'chai';
import { skip } from './array';

describe('array utilities', () => {
  describe('skip', () => {
    it('skips 2 items and returns the rest', () => {
      expect(skip([1, 2, 3, 4, 5], 2)).to.deep.equal([3, 4, 5]);
    });

    it('returns an empty array if skipping more than array length', () => {
      expect(skip([1, 2], 5)).to.deep.equal([]);
    });

    it('returns entire array if skipping 0', () => {
      expect(skip([1, 2], 0)).to.deep.equal([1, 2]);
    });

    it('A negative number of skips takes numbers from the end', () => {
      expect(skip([1, 2, 3, 4, 5, 6], -2)).to.deep.equal([5, 6]);
    });
  });
});
