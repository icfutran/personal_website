import combustion_engine from "../images/projects/internal-combustion-engine/cover-photo.png";
import tank_robot from "../images/projects/tank-inspired-robot/cover-photo.png";
import robotic_arm from "../images/projects/robotic-arm/cover-photo.png";
import electric_go_kart from "../images/projects/electric-go-kart/cover-photo.webp";
import arcturus_drone from "../images/projects/arcturus-drone/cover-photo.png";
import combustion_cad from "../images/projects/internal-combustion-engine/cad.png";
import shoelace from "../images/projects/shoelace-tightener/cover-photo.jpg";
import shoelace1 from "../images/projects/shoelace-tightener/photo1.jpg";

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
    cover: { src: tank_robot, orientation: "horizontal" },
  },
  {
    _id: 6,
    title: "Electric Go Cart",
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
    _id: 0,
    title: "Shoelace Tightener",
    category: "personal",
    path: "/projects/shoelace-tightener",
    cover: { src: shoelace, orientation: "vertical" },
    photo1: { src: shoelace1, orientation: "horizontal" },
  },
];

export default PROJECTS;
