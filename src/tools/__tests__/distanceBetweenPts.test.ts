import { distanceBetweenPts } from '../distanceBetweenPts'

describe('distanceBetweenPts', () => {
  it('should calculate distance between [0,0] and [3,4] to equal 5 (Pythagorean triple)', () => {
    expect(distanceBetweenPts([0, 0], [3, 4])).toBe(5)
  })
})
