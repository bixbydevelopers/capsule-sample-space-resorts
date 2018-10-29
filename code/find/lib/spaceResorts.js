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
    attributes: [attributes.CraterCanyoneering, attributes.PetFriendly, attributes.RoverRentals],
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
    attributes: [attributes.CryoSpa, attributes.SwimmingPool, attributes.SubAtomicMagic, attributes.OxygenBar, attributes.ExtracontinentalBreakfast],
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
    attributes: [attributes.ARSafari, attributes.RoverRentals, attributes.CryoSpa, attributes.SwimmingPool, attributes.OxygenBar, attributes.HydroponicGardens, attributes.ContinentalBreakfast],
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
    attributes: [attributes.ExtracontinentalBreakfast, attributes.HydroponicGardens, attributes.RoverRentals, attributes.TerraformingMuseum, attributes.SwimmingPool, attributes.CryoSpa, attributes.Cantina],
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
    attributes: [attributes.VolcanicSpelunking, attributes.OrbitalZiplining, attributes.CraterCanyoneering, attributes.ScienceBase, attributes.PrimordialOozeSampling, attributes.Rovers, attributes.ExoskeletonDemos, attributes.Refueling],
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
    attributes: [attributes.TerraformingMuseum, attributes.ContinentalBreakfast, attributes.SubAtomicMagic, attributes.GrowAClone, attributes.KidFriendly, attributes.OrbitalZiplining, attributes.Cantina],
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
    attributes: [attributes.OrbitalZiplining, attributes.Refueling, attributes.SpaceshipRentals, attributes.RobotRepairs, attributes.PetFriendly, attributes.Cantina],
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
    attributes: [attributes.ARSafari, attributes.CraterCanyoneering, attributes.ScienceBase, attributes.OrbitalZiplining, attributes.RoverRentals, attributes.PrimordialOozeSampling, attributes.SwimmingPool, attributes.KidFriendly, attributes.PetFriendly],
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
    attributes: [attributes.Casino, attributes.HologramTeleconferencing, attributes.VRBattleArena, attributes.SwimmingPool, attributes.CryoSpa, attributes.BuildABot, attributes.SubAtomicMagic, attributes.Refueling, attributes.ExoskeletonDemos, attributes.SpaceshipRentals, attributes.PetFriendly, attributes.ExtracontinentalBreakfast],
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
    attributes: [attributes.ScienceBase, attributes.HydroponicGardens, attributes.ARSafari, attributes.PrimordialOozeSampling, attributes.RoverRentals, attributes.KidFriendly, attributes.ExtracontinentalBreakfast],
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
    attributes: [attributes.GeneTherapy, attributes.GrowAClone, attributes.ExoskeletonDemos, attributes.Casino, attributes.SwimmingPool, attributes.CryoSpa, attributes.DeepSpaceMassage, attributes.OxygenBar, attributes.CentrifugeGym, attributes.ExtracontinentalBreakfast],
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
    attributes: [attributes.ScienceBase, attributes.CryoSpa, attributes.DeepSpaceMassage, attributes.ZeroGravity, attributes.OxygenBar, attributes.AsteroidTrapeze, attributes.CentrifugeGym, ],
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
    attributes: [attributes.SwimmingPool, attributes.KidFriendly,attributes.ARSafari, attributes.BuildABot, attributes.PrimordialOozeSampling, attributes.CaveDiving, attributes.DeepSeaExploration],
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
    attributes: [attributes.ZeroGravity, attributes.VRBattleArena, attributes.DeepSpaceMassage, attributes.KidFriendly, attributes.HologramTeleconferencing],
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
    attributes: [attributes.CryoSpa, attributes.Refueling, attributes.PetFriendly, attributes.Cantina],
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
    attributes: [attributes.Casino, attributes.GeneTherapy, attributes.GrowAClone, attributes.Cantina],
    highlight: undefined,
    imageSet: {
      images: images.CharonsGrotto
    }
  }
]
