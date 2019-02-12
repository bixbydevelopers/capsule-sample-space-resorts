/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 */

describe('click2', () => {
  it('results', () => {
    const { results } = step.currentNode
    expect(results).toBeTruthy()
    expect(results.length).toBe(1)
       expect(results[0].name).toEqual("Europa's Jewel") 
  })
})