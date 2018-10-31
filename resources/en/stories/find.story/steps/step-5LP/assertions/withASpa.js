/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('simple', () => {
  it('withASpa', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBe(5)
    expect(results[0].name).toEqual("Venus Space Spa")
  })
})