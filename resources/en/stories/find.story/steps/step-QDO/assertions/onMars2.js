/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('onMars2', () => {
  it('results', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
  })
})
