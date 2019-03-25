/**
 * Step assertions documentation
 * https://bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('simple', () => {
  it('findResorts', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBeGreaterThan(3)
  })
})
