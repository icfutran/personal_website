import combustion_engine from "../images/projects/internal-combustion-engine/cover-photo.png";
import tank_robot from "../images/projects/tank-inspired-robot/cover-photo.png";
import coffee_dispenser from "../images/projects/nestle-coffee-dispenser/cover-photo.jpeg";
import robotic_arm from "../images/projects/robotic-arm/cover-photo.png";
import electric_go_kart from "../images/projects/electric-go-kart/cover-photo.webp";
import arcturus_drone from "../images/projects/arcturus-drone/cover-photo.png";
import arcturus_boat from "../images/projects/arcturus-boat/cover-photo.jpg";
import drone_wrapper from "../images/projects/dji-drone-wrapper/cover-photo.jpeg";
import combustion_cad from "../images/projects/internal-combustion-engine/cad.png";

const PROJECTS = [
  {
    _id: 1,
    title: "Internal Combustion Engine",
    category: "personal",
    path: "/projects/internal-combustion-engine",
    cover: { src: combustion_engine, orientation: "vertical" },
    photo1: { src: combustion_cad, orientation: "vertical" },
  },
  {
    _id: 2,
    title: "5 DOF Robotic Arm",
    category: "work",
    path: "/projects/robotic-arm",
    cover: { src: robotic_arm, orientation: "vertical" },
  },
  {
    _id: 3,
    title: "Tank-Inspired Robot",
    category: "personal",
    path: "/projects/tank-inspired-robot",
    cover: { src: tank_robot, orientation: "vertical" },
  },
  {
    _id: 4,
    title: "Nestle Coffee Dispenser",
    category: "work",
    path: "/projects/nestle-coffee-dispenser",
    cover: { src: coffee_dispenser, orientation: "vertical" },
  },
  {
    _id: 5,
    title: "DJI Drone Wrapper",
    category: "research",
    path: "/projects/dji-drone-wrapper",
    cover: { src: drone_wrapper, orientation: "vertical" },
  },
  {
    _id: 6,
    title: "Electric Go Kart",
    category: "personal",
    path: "/projects/electric-go-kart",
    cover: { src: electric_go_kart, orientation: "vertical" },
  },
  {
    _id: 7,
    title: "Arcturus Drone",
    category: "personal",
    path: "/projects/arcturus-drone",
    cover: { src: arcturus_drone, orientation: "horizontal" },
  },
  {
    _id: 8,
    title: "Arcturus Boat",
    category: "personal",
    path: "/projects/arcturus-boat",
    cover: { src: arcturus_boat, orientation: "vertical" },
  },
];

export default PROJECTS;
