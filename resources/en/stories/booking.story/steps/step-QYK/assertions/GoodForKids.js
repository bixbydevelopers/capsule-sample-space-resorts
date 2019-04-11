/**
 * Step assertions documentation
 * https://qa.bixbydevelopers.com/dev/docs/reference/assertions_api/step
 *
 * TODO: Replace `__TEXT__` with step dialog output
 */

describe('GoodForKids', () => {
  const dialogText = 'Here are seven space resorts with that option.'

  it(`matches "${dialogText}"`, () => {
    // get the dialog from the `step` global
    // this gets all dialogs from execution
    // not just for the `currentNode`
    const { dialogs } = step
    expect(dialogs.length).toBeGreaterThan(0)
    const [ { text } ] = step.dialogs.slice(-1)
    expect(text).toBe(dialogText)
  })
})
