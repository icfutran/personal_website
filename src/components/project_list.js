import combustion_engine from "../images/projects/internal-combustion-engine/cover-photo.png";
import tank_robot from "../images/projects/tank-inspired-robot/cover-photo.png";
import tank1 from "../images/projects/tank-inspired-robot/image1.png";
import tank2 from "../images/projects/tank-inspired-robot/image2.png";
import tank_video from "../images/projects/tank-inspired-robot/video.mp4";
import robotic_arm from "../images/projects/robotic-arm/cover-photo.png";
import electric_go_kart from "../images/projects/electric-go-kart/cover-photo.webp";
import arcturus_drone from "../images/projects/arcturus-drone/cover-photo.png";
import combustion_cad from "../images/projects/internal-combustion-engine/cad.png";
import shoelace from "../images/projects/shoelace-tightener/cover-photo.jpg";
import shoelace1 from "../images/projects/shoelace-tightener/photo1.jpg";
import jewelry_case from "../images/projects/jewelry-case/cover-photo.png";
import yoyo from "../images/projects/yoyo-manufacturing/cover-photo.png";
import yoyo1 from "../images/projects/yoyo-manufacturing/yoyo1.png";
import yoyo2 from "../images/projects/yoyo-manufacturing/yoyo2.png";

const PROJECTS = [
  {
    _id: 1,
    title: "Internal Combustion Engine",
    category: "personal",
    path: "/projects/internal-combustion-engine",
    cover: { src: combustion_cad, orientation: "vertical", fitting: "shrink" },
    photo1: { src: combustion_engine, orientation: "vertical" },
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
    photo1: { src: tank1, orientation: "horizontal" },
    photo2: { src: tank2, orientation: "horizontal" },
    video: { src: tank_video, orientation: "horizontal" },
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
  {
    _id: 4,
    title: "Jewelry Case",
    category: "personal",
    path: "/projects/jewelry-case",
    cover: { src: jewelry_case, orientation: "horizontal" },
  },
  {
    _id: 5,
    title: "Yo-yo Manufacturing",
    category: "personal",
    path: "/projects/yoyo-manufacturing",
    cover: { src: yoyo, orientation: "horizontal" },
    photo1: { src: yoyo1, orientation: "horizontal" },
    photo2: { src: yoyo2, orientation: "horizontal" },
  },
];

export default PROJECTS;
