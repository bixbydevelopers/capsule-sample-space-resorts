var config = require('config')
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
    images: images.Mercurial,
    all: true
  },
  {
    name: loc(names.Icarus),
    planet: planets.Mercury,
    gravity: 0.38,
    description: loc(descriptions.Icarus),
    amenities: [loc(amenities.SpaceshipRentals), loc(amenities.Refueling), loc(amenities.QuantumBungee), loc(amenities.LaserTag), loc(amenities.ExoskeletonDemos), loc(amenities.Cantina), loc(amenities.CraterCanyoneering), loc(amenities.PetFriendly), loc(amenities.RoverRentals)],
    highlight: loc(highlights.Icarus),
    images: images.Icarus,
    all: true
  },
  {
    name: loc(names.VenusSpaceSpa),
    planet: planets.Venus,
    gravity: 0.904,
    description: loc(descriptions.VenusSpaceSpa),
    amenities: [loc(amenities.CryoSpa), loc(amenities.SwimmingPool), loc(amenities.SubAtomicMagic), loc(amenities.OxygenBar), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.VenusSpaceSpa),
    images: images.VenusSpaceSpa,
    all: true
  },
  {
    name: loc(names.HoneyMoon),
    planet: planets.Earth,
    gravity: 0.1654,
    description: loc(descriptions.HoneyMoon),
    amenities: [loc(amenities.ARSafari), loc(amenities.RoverRentals), loc(amenities.CryoSpa), loc(amenities.SwimmingPool), loc(amenities.OxygenBar), loc(amenities.HydroponicGardens), loc(amenities.ContinentalBreakfast)],
    highlight: loc(highlights.HoneyMoon),
    images: images.HoneyMoon,
    all: true
  },
  {
    name: loc(names.MartianOasis),
    planet: planets.Mars,
    gravity: 0.376,
    description: loc(descriptions.MartianOasis),
    amenities: [loc(amenities.ExtracontinentalBreakfast), loc(amenities.HydroponicGardens), loc(amenities.RoverRentals), loc(amenities.TerraformingMuseum), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.Cantina)],
    highlight: loc(highlights.MartianOasis),
    images: images.MartianOasis,
    all: true
  },
  {
    name: loc(names.SpaceY),
    planet: planets.Mars,
    gravity: 0.376,
    description: loc(descriptions.SpaceY),
    amenities: [loc(amenities.TerraformingMuseum), loc(amenities.RoverRentals), loc(amenities.RobotRepairs), loc(amenities.QuantumBungee), loc(amenities.ExoskeletonDemos), loc(amenities.CaveDiving), loc(amenities.BuildABot)],
    highlight: loc(highlights.SpaceY),
    images: images.SpaceY,
    all: true
  },
  {
    name: loc(names.IoTel),
    planet: planets.Jupiter,
    gravity: 0.183,
    description: loc(descriptions.IoTel),
    amenities: [loc(amenities.VolcanicSpelunking), loc(amenities.OrbitalZiplining), loc(amenities.CraterCanyoneering), loc(amenities.ScienceBase), loc(amenities.PrimordialOozeSampling), loc(amenities.RoverRentals), loc(amenities.ExoskeletonDemos), loc(amenities.Refueling)],
    highlight: loc(highlights.IoTel),
    images: images.IoTel,
    all: true
  },
  {
    name: loc(names.EuropaJewel),
    planet: planets.Jupiter,
    gravity: 0.134,
    description: loc(descriptions.EuropaJewel),
    amenities: [loc(amenities.TerraformingMuseum), loc(amenities.ContinentalBreakfast), loc(amenities.SubAtomicMagic), loc(amenities.GrowAClone), loc(amenities.KidFriendly), loc(amenities.OrbitalZiplining), loc(amenities.Cantina)],
    highlight: loc(highlights.EuropaJewel),
    images: images.EuropaJewel,
    all: true
  },
  {
    name: loc(names.GanymedeMoonMotel),
    planet: planets.Jupiter,
    gravity: 0.146,
    description: loc(descriptions.GanymedeMoonMotel),
    amenities: [loc(amenities.OrbitalZiplining), loc(amenities.Refueling), loc(amenities.SpaceshipRentals), loc(amenities.RobotRepairs), loc(amenities.PetFriendly), loc(amenities.Cantina)],
    highlight: loc(highlights.GanymedeMoonMotel),
    images: images.GanymedeMoonMotel,
    all: true
  },
  {
    name: loc(names.CallistoCamping),
    planet: planets.Jupiter,
    gravity: 0.126,
    description: loc(descriptions.CallistoCamping),
    amenities: [loc(amenities.ARSafari), loc(amenities.CraterCanyoneering), loc(amenities.ScienceBase), loc(amenities.OrbitalZiplining), loc(amenities.RoverRentals), loc(amenities.PrimordialOozeSampling), loc(amenities.SwimmingPool), loc(amenities.KidFriendly), loc(amenities.PetFriendly)],
    highlight: loc(highlights.CallistoCamping),
    images: images.CallistoCamping,
    all: true
  },
  {
    name: loc(names.AirBB),
    planet: planets.Jupiter,
    gravity: 0.000001,
    description: loc(descriptions.AirBB),
    amenities: [loc(amenities.ZeroGravity), loc(amenities.VRBattleArena), loc(amenities.SpaceshipRentals), loc(amenities.Refueling), loc(amenities.QuantumBungee), loc(amenities.OrbitalZiplining), loc(amenities.LaserTag), loc(amenities.HologramTeleconferencing), loc(amenities.ExoskeletonDemos), loc(amenities.CentrifugeGym), loc(amenities.BuildABot), loc(amenities.AsteroidTrapeze)],
    highlight: loc(highlights.AirBB),
    images: images.AirBB,
    all: true
  },
  {
    name: loc(names.Babylon),
    planet: planets.Jupiter,
    gravity: 0.000001,
    description: loc(descriptions.Babylon),
    amenities: [loc(amenities.ARSafari), loc(amenities.AsteroidTrapeze), loc(amenities.CentrifugeGym), loc(amenities.ContinentalBreakfast), loc(amenities.DeepSpaceMassage), loc(amenities.ExoskeletonDemos), loc(amenities.GeneTherapy), loc(amenities.HydroponicGardens), loc(amenities.KidFriendly), loc(amenities.OxygenBar), loc(amenities.ScienceBase), loc(amenities.ZeroGravity)],
    highlight: loc(highlights.Babylon),
    images: images.Babylon,
    all: true
  },
  {
    name: loc(names.GrandTitan),
    planet: planets.Saturn,
    gravity: 0.14,
    description: loc(descriptions.GrandTitan),
    amenities: [loc(amenities.Casino), loc(amenities.HologramTeleconferencing), loc(amenities.VRBattleArena), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.BuildABot), loc(amenities.SubAtomicMagic), loc(amenities.Refueling), loc(amenities.ExoskeletonDemos), loc(amenities.SpaceshipRentals), loc(amenities.PetFriendly), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.GrandTitan),
    images: images.GrandTitan,
    all: true
  },
  {
    name: loc(names.HerschelHotel),
    planet: planets.Saturn,
    gravity: 0.00648,
    description: loc(descriptions.HerschelHotel),
    amenities: [loc(amenities.QuantumBungee), loc(amenities.OxygenBar), loc(amenities.HologramTeleconferencing), loc(amenities.AsteroidTrapeze), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.HerschelHotel),
    images: images.HerschelHotel,
    all: true
  },
  {
    name: loc(names.Robotel),
    planet: planets.Saturn,
    gravity: 0.000001,
    description: loc(descriptions.Robotel),
    amenities: [loc(amenities.ExoskeletonDemos), loc(amenities.SpaceshipRentals), loc(amenities.BuildABot), loc(amenities.Cantina), loc(amenities.VRBattleArena), loc(amenities.RobotRepairs), loc(amenities.QuantumBungee), loc(amenities.LaserTag), loc(amenities.ZeroGravity), loc(amenities.CentrifugeGym)],
    highlight: loc(highlights.Robotel),
    images: images.Robotel,
    all: true
  },
  {
    name: loc(names.CassiniCruise),
    planet: planets.Saturn,
    gravity: 0.000001,
    description: loc(descriptions.CassiniCruise),
    amenities: [loc(amenities.CryoSpa), loc(amenities.DeepSpaceMassage), loc(amenities.ZeroGravity), loc(amenities.OxygenBar), loc(amenities.AsteroidTrapeze), loc(amenities.CentrifugeGym), loc(amenities.SubAtomicMagic), loc(amenities.Casino), loc(amenities.HologramTeleconferencing)],
    highlight: loc(highlights.CassiniCruise),
    images: images.CassiniCruise,
    all: true
  },
  {
    name: loc(names.RheaRnDBnB),
    planet: planets.Saturn,
    gravity: 0.02692051,
    description: loc(descriptions.RheaRnDBnB),
    amenities: [loc(amenities.ScienceBase), loc(amenities.HydroponicGardens), loc(amenities.ARSafari), loc(amenities.PrimordialOozeSampling), loc(amenities.RoverRentals), loc(amenities.KidFriendly), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.RheaRnDBnB),
    images: images.RheaRnDBnB,
    all: true
  },
  {
    name: loc(names.SkyResort),
    planet: planets.Saturn,
    gravity: 0.02692051,
    description: loc(descriptions.SkyResort),
    amenities: [loc(amenities.RobotRepairs), loc(amenities.RoverRentals), loc(amenities.QuantumBungee), loc(amenities.ExoskeletonDemos), loc(amenities.CryoSpa), loc(amenities.KidFriendly), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.SkyResort),
    images: images.SkyResort,
    all: true
  },
  {
    name: loc(names.BellaTitania),
    planet: planets.Uranus,
    gravity: 0.03864724,
    description: loc(descriptions.BellaTitania),
    amenities: [loc(amenities.GeneTherapy), loc(amenities.GrowAClone), loc(amenities.ExoskeletonDemos), loc(amenities.Casino), loc(amenities.SwimmingPool), loc(amenities.CryoSpa), loc(amenities.DeepSpaceMassage), loc(amenities.OxygenBar), loc(amenities.CentrifugeGym), loc(amenities.ExtracontinentalBreakfast)],
    highlight: loc(highlights.BellaTitania),
    images: images.BellaTitania,
    all: true
  },
  {
    name: loc(names.UpsideDownSpaceStation),
    planet: planets.Uranus,
    gravity: 0.000001,
    description: loc(descriptions.UpsideDownSpaceStation),
    amenities: [loc(amenities.ScienceBase), loc(amenities.CryoSpa), loc(amenities.DeepSpaceMassage), loc(amenities.ZeroGravity), loc(amenities.OxygenBar), loc(amenities.AsteroidTrapeze), loc(amenities.CentrifugeGym)],
    highlight: loc(highlights.UpsideDownSpaceStation),
    images: images.UpsideDownSpaceStation,
    all: true
  },
  {
    name: loc(names.TritonWaterPark),
    planet: planets.Neptune,
    gravity: 0.0794,
    description: loc(descriptions.TritonWaterPark),
    amenities: [loc(amenities.SwimmingPool), loc(amenities.KidFriendly),loc(amenities.ARSafari), loc(amenities.BuildABot), loc(amenities.PrimordialOozeSampling), loc(amenities.CaveDiving), loc(amenities.DeepSeaExploration)],
    highlight: loc(highlights.TritonWaterPark),
    images: images.TritonWaterPark,
    all: true
  },
  {
    name: loc(names.NeptuneSpaceStation),
    planet: planets.Neptune,
    gravity: 0.000001,
    description: loc(descriptions.NeptuneSpaceStation),
    amenities: [loc(amenities.ZeroGravity), loc(amenities.VRBattleArena), loc(amenities.DeepSpaceMassage), loc(amenities.KidFriendly), loc(amenities.HologramTeleconferencing)],
    highlight: loc(highlights.NeptuneSpaceStation),
    images: images.NeptuneSpaceStation,
    all: true
  },
  {
    name: loc(names.PlutoWinterLodge),
    planet: planets.Pluto,
    gravity: 0.063,
    description: loc(descriptions.PlutoWinterLodge),
    amenities: [loc(amenities.CryoSpa), loc(amenities.Refueling), loc(amenities.PetFriendly), loc(amenities.Cantina)],
    highlight: loc(highlights.PlutoWinterLodge),
    images: images.PlutoWinterLodge,
    all: true
  },
  {
    name: loc(names.CharonsGrotto),
    planet: planets.Pluto,
    gravity: 0.02936783,
    description: loc(descriptions.CharonsGrotto),
    amenities: [loc(amenities.Casino), loc(amenities.GeneTherapy), loc(amenities.GrowAClone), loc(amenities.Cantina)],
    highlight: undefined,
    images: images.CharonsGrotto,
    all: true
  }
]
