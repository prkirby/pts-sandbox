import { rgbaFromHex } from '../rgbaFromHex'

const randomHex = Math.floor(Math.random() * 16777215).toString(16)

describe('rgbaFromHex', () => {
  it('should return a rgba formatted string', () => {
    expect(rgbaFromHex(`#${randomHex}`, 0.5)).toMatch(
      /rgba\(\d{1,3},\d{1,3},\d{1,3},[0,1]\.[0-9]/
    )
  })
})
