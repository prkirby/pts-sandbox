import { BackgroundParticles } from '../BackgroundParticles'
import { Bound, Pt } from 'pts'

describe('BackgroundParticles', () => {
  let BgParticles: BackgroundParticles
  let bound: Bound

  beforeAll(() => {
    bound = new Bound(new Pt(0, 0), new Pt(5, 5))
    BgParticles = new BackgroundParticles(bound, '#000000', undefined, 10, 10)
  })

  it('Should create BackgroundParticles with expected properties', () => {
    expect(BgParticles).toHaveProperty('_points')
    expect(BgParticles).toHaveProperty('_pointDescriptions')
    expect(BgParticles).toHaveProperty('color')
  })

  it('Should move all points when updating', () => {
    // Using JSON.stringify and parse to create a 'deep copy' of the points array
    const oldPoints = JSON.stringify(BgParticles.points)
    BgParticles.updatePoints(bound)
    const newPoints = JSON.stringify(BgParticles.points)
    expect(oldPoints).not.toEqual(newPoints)
  })
})
