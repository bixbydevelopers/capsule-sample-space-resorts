const amenities = require("./amenities.js")
const descriptions = require("./descriptions.js")
const highlights = require("./highlights.js")
const images = require("./images.js")
const names = require("./names.js")
const planets = require("./planets.js")

// Extract the right locale translation
function loc (data) {
  if (data) {
    return data[config.get("locale")]
  }
}

module.exports = [
  {
    name: loc(names.Mercurial),
    planet: planets.Mercury,
    gravity: 0.38,
    description: loc(descriptions.Mercurial),
    amenities: [loc(amenities.CraterCanyoneering), loc(amenities.PetFriendly), loc(amenities.RoverRentals)],
    highlight: loc(highlights.Mercurial),
    imageSet: {
      images: images.Mercurial
    }
  },
  {
    name: loc(names.VenusSpaceSpa),
    planet: planets.Venus,
    gravity: 0.904,
    description: loc(descriptions.VenusSpaceSpa),
    amenities: [loc(amenities.CryoSpa), loc(amenities.SwimmingPool), loc(amenities.SubAtomicMagic), loc(amenities.OxygenBar), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.VenusSpaceSpa),
    imageSet: {
      images: images.VenusSpaceSpa
    }
  },
  {
    name: loc(names.HoneyMoon),
    planet: planets.Earth,
    gravity: 0.1654,
    description: loc(descriptions.HoneyMoon),
    amenities: [loc(amenities.ARSafari), loc(amenities.RoverRentals), loc(amenities.CryoSpa), loc(amenities.SwimmingPool), loc(amenities.OxygenBar), loc(amenities.HydroponicGardens), loc(amenities.ContinentalBreakfast)],
    highlight: loc(highlights.HoneyMoon),
    imageSet: {
      images: images.HoneyMoon
    }
  },
  {
    name: loc(names.MartianOasis),
    planet: planets.Mars,
    gravity: 0.376,
    description: loc(descriptions.MartianOasis),
    amenities: [loc(amenities.ExtracontinentalBreakfast), loc(amenities.HydroponicGardens), loc(amenities.RoverRentals), loc(amenities.TerraformingMuseum), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.Cantina)],
    highlight: loc(highlights.MartianOasis),
    imageSet: {
      images: images.MartianOasis
    }
  },
  {
    name: loc(names.IoTel),
    planet: planets.Jupiter,
    gravity: 0.183,
    description: loc(descriptions.IoTel),
    amenities: [loc(amenities.VolcanicSpelunking), loc(amenities.OrbitalZiplining), loc(amenities.CraterCanyoneering), loc(amenities.ScienceBase), loc(amenities.PrimordialOozeSampling), loc(amenities.RoverRentals), loc(amenities.ExoskeletonDemos), loc(amenities.Refueling)],
    highlight: loc(highlights.IoTel),
    imageSet: {
      images: images.IoTel
    }
  },
  {
    name: loc(names.EuropaJewel),
    planet: planets.Jupiter,
    gravity: 0.134,
    description: loc(descriptions.EuropaJewel),
    amenities: [loc(amenities.TerraformingMuseum), loc(amenities.ContinentalBreakfast), loc(amenities.SubAtomicMagic), loc(amenities.GrowAClone), loc(amenities.KidFriendly), loc(amenities.OrbitalZiplining), loc(amenities.Cantina)],
    highlight: loc(highlights.EuropaJewel),
    imageSet: {
      images: images.EuropaJewel
    }
  },
  {
    name: loc(names.GanymedeMoonMotel),
    planet: planets.Jupiter,
    gravity: 0.146,
    description: loc(descriptions.GanymedeMoonMotel),
    amenities: [loc(amenities.OrbitalZiplining), loc(amenities.Refueling), loc(amenities.SpaceshipRentals), loc(amenities.RobotRepairs), loc(amenities.PetFriendly), loc(amenities.Cantina)],
    highlight: loc(highlights.GanymedeMoonMotel),
    imageSet: {
      images: images.GanymedeMoonMotel
    }
  },
  {
    name: loc(names.CallistoCamping),
    planet: planets.Jupiter,
    gravity: 0.126,
    description: loc(descriptions.CallistoCamping),
    amenities: [loc(amenities.ARSafari), loc(amenities.CraterCanyoneering), loc(amenities.ScienceBase), loc(amenities.OrbitalZiplining), loc(amenities.RoverRentals), loc(amenities.PrimordialOozeSampling), loc(amenities.SwimmingPool), loc(amenities.KidFriendly), loc(amenities.PetFriendly)],
    highlight: loc(highlights.CallistoCamping),
    imageSet: {
      images: images.CallistoCamping
    }
  },
  {
    name: loc(names.GrandTitan),
    planet: planets.Saturn,
    gravity: 0.14,
    description: loc(descriptions.GrandTitan),
    amenities: [loc(amenities.Casino), loc(amenities.HologramTeleconferencing), loc(amenities.VRBattleArena), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.BuildABot), loc(amenities.SubAtomicMagic), loc(amenities.Refueling), loc(amenities.ExoskeletonDemos), loc(amenities.SpaceshipRentals), loc(amenities.PetFriendly), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.GrandTitan),
    imageSet: {
      images: images.GrandTitan
    }
  },
  {
    name: loc(names.RheaRnDBnB),
    planet: planets.Saturn,
    gravity: 0.02692051,
    description: loc(descriptions.RheaRnDBnB),
    amenities: [loc(amenities.ScienceBase), loc(amenities.HydroponicGardens), loc(amenities.ARSafari), loc(amenities.PrimordialOozeSampling), loc(amenities.RoverRentals), loc(amenities.KidFriendly), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.RheaRnDBnB),
    imageSet: {
      images: images.RheaRnDBnB
    }
  },
  {
    name: loc(names.BellaTitania),
    planet: planets.Uranus,
    gravity: 0.03864724,
    description: loc(descriptions.BellaTitania),
    amenities: [loc(amenities.GeneTherapy), loc(amenities.GrowAClone), loc(amenities.ExoskeletonDemos), loc(amenities.Casino), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.DeepSpaceMassage), loc(amenities.OxygenBar), loc(amenities.CentrifugeGym), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.BellaTitania),
    imageSet: {
      images: images.BellaTitania
    }
  },
  {
    name: loc(names.UpsideDownSpaceStation),
    planet: planets.Uranus,
    gravity: 0.000001,
    description: loc(descriptions.UpsideDownSpaceStation),
    amenities: [loc(amenities.ScienceBase), loc(amenities.CryoSpa), loc(amenities.DeepSpaceMassage), loc(amenities.ZeroGravity), loc(amenities.OxygenBar), loc(amenities.AsteroidTrapeze), loc(amenities.CentrifugeGym), ],
    highlight: loc(highlights.UpsideDownSpaceStation),
    imageSet: {
      images: images.UpsideDownSpaceStation
    }
  },
  {
    name: loc(names.TritonWaterPark),
    planet: planets.Neptune,
    gravity: 0.0794,
    description: loc(descriptions.TritonWaterPark),
    amenities: [loc(amenities.SwimmingPool), loc(amenities.KidFriendly),loc(amenities.ARSafari), loc(amenities.BuildABot), loc(amenities.PrimordialOozeSampling), loc(amenities.CaveDiving), loc(amenities.DeepSeaExploration)],
    highlight: loc(highlights.TritonWaterPark),
    imageSet: {
      images: images.TritonWaterPark
    }
  },
  {
    name: loc(names.NeptuneSpaceStation),
    planet: planets.Neptune,
    gravity: 0.000001,
    description: loc(descriptions.NeptuneSpaceStation),
    amenities: [loc(amenities.ZeroGravity), loc(amenities.VRBattleArena), loc(amenities.DeepSpaceMassage), loc(amenities.KidFriendly), loc(amenities.HologramTeleconferencing)],
    highlight: loc(highlights.NeptuneSpaceStation),
    imageSet: {
      images: images.NeptuneSpaceStation
    }
  },
  {
    name: loc(names.PlutoWinterLodge),
    planet: planets.Pluto,
    gravity: 0.063,
    description: loc(descriptions.PlutoWinterLodge),
    amenities: [loc(amenities.CryoSpa), loc(amenities.Refueling), loc(amenities.PetFriendly), loc(amenities.Cantina)],
    highlight: loc(highlights.PlutoWinterLodge),
    imageSet: {
      images: images.PlutoWinterLodge
    }
  },
  {
    name: loc(names.CharonsGrotto),
    planet: planets.Pluto,
    gravity: 0.02936783,
    description: loc(descriptions.CharonsGrotto),
    amenities: [loc(amenities.Casino), loc(amenities.GeneTherapy), loc(amenities.GrowAClone), loc(amenities.Cantina)],
    highlight: undefined,
    imageSet: {
      images: images.CharonsGrotto
    }
  }
]
