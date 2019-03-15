module.exports.function = function (spaceResort, numberOfAstronauts, dateInterval, $vivContext) {
  switch ($vivContext.locale.split('-')[0]) {
    case "ko" :
      return [{
        name: "허니문",
        highlight: "로맨틱",
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 5000000
        }
      }, {
        name: "실험실",
        highlight: "과학자들이 좋아할만한 곳",
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 200000
        }
      }]
    default:
      return [{
        name: "Honeymoon",
        highlight: "Romantic",
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 5000000
        }
      }, {
        name: "The Lab",
        highlight: "Great for scientists",
        price: {
          currencyType: {
            currencyCode: "USD"
          },
          value: 200000
        }
      }]
  }
}