module.exports.function = function (spaceResort, numberOfAstronauts, dateInterval, $vivContext) {
  // Guidelines:
  // highlight.label: Short text label for visual display in layouts. Do not repeat habitat pod name. No closing punctuation.
  // highlight.dialog: Short sentence for speech. Should be a short but fully grammatical sentence with a verb. Refer to the habitat pod as "it" instead of by name. Full sentence with closing punctuation
  switch ($vivContext.locale.split('-')[0]) {
    case "ko" :
      return [{
        name: "실험실",
        highlight: {
          label: "과학자들이 좋아할만한 곳",
          dialog: "It offers the finest scientific equipment." // TODO: translate
        },
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 2000000
        }
      }, {
        name: "허니문",
        highlight: {
          label: "로맨틱",
          dialog: "It is a luxurious romantic suite." // TODO: translate
        },
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 5000000
        }
      }]
    default:
      return [{
        name: "The Lab",
        highlight: {
          label: "Great for scientists",
          dialog: "It offers the finest scientific equipment."
        },
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 2000000
        }
      }, {
        name: "The Honeymoon",
        highlight: {
          label: "Romantic",
          dialog: "It is a luxurious romantic suite."
        },
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 5000000
        }
      }]
  }
}