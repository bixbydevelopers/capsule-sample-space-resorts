const attributes = require("./attributes.js")
const descriptions = require("./descriptions.js")
const highlights = require("./highlights.js")
const images = require("./images.js")
const names = require("./names.js")
const planets = require("./planets.js")

module.exports = [
  {
    name: names.Mercurial,
    planet: planets.Mercury,
    gravity: 0.38,
    description: descriptions.Mercurial,
    attributes: [attributes.PetFriendly],
    highlight: highlights.Mercurial,
    imageSet: {
      images: images.Mercurial
    }
  },
  {
    name: names.VenusSpaceSpa,
    planet: planets.Venus,
    gravity: 0.904,
    description: descriptions.VenusSpaceSpa,
    attributes: [attributes.SwimmingPool, attributes.Spa],
    highlight: highlights.VenusSpaceSpa,
    imageSet: {
      images: images.VenusSpaceSpa
    }
  },
  {
    name: names.HoneyMoon,
    planet: planets.Earth,
    gravity: 0.1654,
    description: descriptions.HoneyMoon,
    attributes: [attributes.SwimmingPool, attributes.Spa],
    highlight: highlights.HoneyMoon,
    imageSet: {
      images: images.HoneyMoon
    }
  },
  {
    name: names.MartianOasis,
    planet: planets.Mars,
    gravity: 0.376,
    description: descriptions.MartianOasis,
    attributes: [attributes.SwimmingPool, attributes.Spa, attributes.KidFriendly, attributes.PetFriendly],
    highlight: highlights.MartianOasis,
    imageSet: {
      images: images.MartianOasis
    }
  },
  {
    name: names.IoTel,
    planet: planets.Jupiter,
    gravity: 0.183,
    description: descriptions.IoTel,
    attributes: [attributes.ScienceBase, attributes.Refueling],
    highlight: highlights.IoTel,
    imageSet: {
      images: images.IoTel
    }
  },
  {
    name: names.EuropaJewel,
    planet: planets.Jupiter,
    gravity: 0.134,
    description: descriptions.EuropaJewel,
    attributes: [attributes.KidFriendly],
    highlight: highlights.EuropaJewel,
    imageSet: {
      images: images.EuropaJewel
    }
  },
  {
    name: names.GanymedeMoonMotel,
    planet: planets.Jupiter,
    gravity: 0.146,
    description: descriptions.GanymedeMoonMotel,
    attributes: [attributes.Refueling, attributes.PetFriendly],
    highlight: highlights.GanymedeMoonMotel,
    imageSet: {
      images: images.GanymedeMoonMotel
    }
  },
  {
    name: names.CallistoCamping,
    planet: planets.Jupiter,
    gravity: 0.126,
    description: descriptions.CallistoCamping,
    attributes: [attributes.ScienceBase, attributes.SwimmingPool, attributes.KidFriendly, attributes.PetFriendly],
    highlight: highlights.CallistoCamping,
    imageSet: {
      images: images.CallistoCamping
    }
  },
  {
    name: names.GrandTitan,
    planet: planets.Saturn,
    gravity: 0.14,
    description: descriptions.GrandTitan,
    attributes: [attributes.Casino, attributes.SwimmingPool, attributes.Spa, attributes.Refueling, attributes.PetFriendly],
    highlight: highlights.GrandTitan,
    imageSet: {
      images: images.GrandTitan
    }
  },
  {
    name: names.RheaRnDBnB,
    planet: planets.Saturn,
    gravity: 0.02692051,
    description: descriptions.RheaRnDBnB,
    attributes: [attributes.ScienceBase, attributes.KidFriendly],
    highlight: highlights.RheaRnDBnB,
    imageSet: {
      images: images.RheaRnDBnB
    }
  },
  {
    name: names.BellaTitania,
    planet: planets.Uranus,
    gravity: 0.03864724,
    description: descriptions.BellaTitania,
    attributes: [attributes.Casino, attributes.SwimmingPool, attributes.Spa],
    highlight: highlights.BellaTitania,
    imageSet: {
      images: images.BellaTitania
    }
  },
  {
    name: names.UpsideDownSpaceStation,
    planet: planets.Uranus,
    gravity: 0.000001,
    description: descriptions.UpsideDownSpaceStation,
    attributes: [attributes.ScienceBase, attributes.ZeroGravity],
    highlight: highlights.UpsideDownSpaceStation,
    imageSet: {
      images: images.UpsideDownSpaceStation
    }
  },
  {
    name: names.TritonWaterPark,
    planet: planets.Neptune,
    gravity: 0.0794,
    description: descriptions.TritonWaterPark,
    attributes: [attributes.SwimmingPool, attributes.KidFriendly],
    highlight: highlights.TritonWaterPark,
    imageSet: {
      images: images.TritonWaterPark
    }
  },
  {
    name: names.NeptuneSpaceStation,
    planet: planets.Neptune,
    gravity: 0.000001,
    description: descriptions.NeptuneSpaceStation,
    attributes: [attributes.ZeroGravity, attributes.KidFriendly],
    highlight: highlights.NeptuneSpaceStation,
    imageSet: {
      images: images.NeptuneSpaceStation
    }
  },
  {
    name: names.PlutoWinterLodge,
    planet: planets.Pluto,
    gravity: 0.063,
    description: descriptions.PlutoWinterLodge,
    attributes: [attributes.Refueling, attributes.PetFriendly],
    highlight: highlights.PlutoWinterLodge,
    imageSet: {
      images: images.PlutoWinterLodge
    }
  },
  {
    name: names.CharonsGrotto,
    planet: planets.Pluto,
    gravity: 0.02936783,
    description: descriptions.CharonsGrotto,
    attributes: [attributes.Casino],
    highlight: undefined,
    imageSet: {
      images: images.CharonsGrotto
    }
  }
]
