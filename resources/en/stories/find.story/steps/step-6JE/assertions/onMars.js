/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('onMars', () => {
  it('results', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
  })
})
