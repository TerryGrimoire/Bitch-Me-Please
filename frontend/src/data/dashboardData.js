import company from "../assets/company.png";
import computer from "../assets/computer.png";
import rh from "../assets/rh.png";
import pq from "../assets/pq.png";

const dashboardData = [
  {
    id: 0,
    title: "We are frequently late in delivering projets to our clients, Why?",
    date: "25/06/2022 8h36",
    Poster: "RandomUser235",
    reactions: 632,
    color: "bg-red-500",
    colorForC: "#ef4444",
    category: "Human Ressources",
    completed: 80,
    numberForC: 28.3,
    check: false,
    comments:
      "We are frequently late in delivering projets to our clients, Why do you think that is ? Please bitch about it!",
    img: company,
    feedback: [
      {
        name: "Abracaca55586",
        date: "01/08/2022 22h46",
        text: "We have communication problems between department (dev and Sales)",
        plus: 255,
        minus: 32,
        color: "bg-red-500",
        completed: 90,
      },
      {
        name: "SpaceEvenly1114",
        date: "01/09/2022 14h02",
        text: "The whole process is not agile at all and needs to be reworked",
        plus: 150,
        minus: 2,
        color: "bg-red-500",
        completed: 94,
      },
      {
        name: "Lopoliii88",
        date: "01/01/2021 11h55",
        text: "The tools estimating the project necessary time to be finished is not working properly",
        plus: 85,
        minus: 12,
        color: "bg-red-500",
        completed: 65,
      },
      {
        name: "Lopoliii88",
        date: "01/01/2021 11h55",
        text: "The tools estimating the project necessary time to be finished is not working properly",
        plus: 45,
        minus: 2,
        color: "bg-red-500",
        completed: 16,
      },
    ],
  },
  {
    id: 1,
    title: "What's wrong with this new product feature? ",
    date: "01/07/2022 8h36",
    Poster: "ArkaneDev",
    reactions: 505,
    color: "bg-blue-500",
    colorForC: "#3b82f6",
    category: "Product Owner",
    numberForC: 6.8,
    completed: 43,
    check: false,
    comments: "What's wrong with this new product feature? ",
    img: computer,
    feedback: [
      {
        name: "Periculum214152",
        date: "01/08/2022 22h46",
        text: "It is not user friendly and not accessible for dyslexic persons",
        plus: 203,
        minus: 22,
        color: "bg-red-500",
        completed: 90,
      },
      {
        name: "Wollukia882265",
        date: "01/09/2022 14h02",
        text: "There is to much steps in the registration process",
        plus: 111,
        minus: 6,
        color: "bg-blue-500",
        completed: 95,
      },
      {
        name: "Zahelu8524d",
        date: "01/01/2021 11h55",
        text: "The design is very old school and needs refreshment",
        plus: 15,
        minus: 8,
        color: "bg-orange-500",
        completed: 65,
      },
      {
        name: "Ru45233P@ul",
        date: "01/01/2021 11h55",
        text: "It does not fit with our actual needs",
        plus: 5,
        minus: 25,
        color: "bg-green-500",
        completed: 17,
      },
      {
        name: "Bibojjjd5522",
        date: "01/01/2021 11h55",
        text: "It was usefull 6months ago, now it's too late",
        plus: 10,
        minus: 109,
        color: "bg-yellow-500",
        completed: 6,
      },
    ],
  },
  {
    id: 2,
    title:
      "How bad is the access of our building for people with disabilities?",
    date: "01/07/2022 12h16",
    Poster: "3vilAngel",
    reactions: 891,
    color: "bg-orange-500",
    colorForC: "#f97316",
    numberForC: 28.7,
    category: "Accessibility",
    completed: 28,
    check: false,
    comments:
      "How bad is the access of our building for people with disabilities?",
    img: rh,
    feedback: [
      {
        name: "Notd452487",
        date: "01/08/2022 22h46",
        text: "People with weelchair cannot access the second floor",
        plus: 125,
        minus: 2,
      },
      {
        name: "Ygassu0123",
        date: "01/09/2022 14h02",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 75,
        minus: 2,
      },
      {
        name: "Erfoliu55",
        date: "01/01/2021 11h55",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
    ],
  },
  {
    id: 3,
    title: "Burnout is coming, please complain",
    date: "27/06/2022 8h36",
    Poster: "Jeanjean56",
    reactions: 2447,
    color: "bg-green-500",
    colorForC: "#22c55e",
    category: "Human Ressources",
    numberForC: 36.3,
    completed: 57,
    check: false,
    comments: "Burnout is coming, please complain",
    img: pq,
    feedback: [
      {
        name: "SkySkill",
        date: "01/08/2022 22h46",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
      {
        name: "PaperRider",
        date: "01/09/2022 14h02",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
      {
        name: "GhostMoon",
        date: "01/01/2021 11h55",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Bitch about sexual arrasment in the company",
    date: "30/06/2022 18h51",
    Poster: "Anonymous85694",
    reactions: 344,
    color: "bg-green-500",
    colorForC: "#22c55e",
    category: "Human Ressources",
    numberForC: 36.3,
    completed: 57,
    check: false,
    comments: "Bitch about sexual arrasment in the company",
    img: pq,
    feedback: [
      {
        name: "SelMarin7fgr4552",
        date: "01/08/2022 22h46",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
      {
        name: "Atchoum0236",
        date: "01/09/2022 14h02",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
      {
        name: "WerevArt85236",
        date: "01/01/2021 11h55",
        text: "Lorem ipsum dolor sit amet, consectetur adip ipsum dolor sit amet, consectetur adip korem ipsum dolor sit amet, consectetur adip",
        plus: 12,
        minus: 2,
      },
    ],
  },
  {
    id: 5,
    title:
      "You decided not to collaborate with us, please bitch us so that we can improve in the future",
    date: "25/06/1990 16h08",
    Poster: "Bitcher78521",
    reactions: 277,
    color: "bg-green-500",
    colorForC: "#22c55e",
    category: "Human Ressources",
    numberForC: 36.3,
    completed: 57,
    check: false,
    comments:
      "You decided not to collaborate with us, please bitch us so that we can improve in the future",
    img: pq,
    feedback: [
      {
        name: "noPseudo82146",
        date: "01/08/2022 22h46",
        text: "Too insisting",
        plus: 12,
        minus: 2,
      },
      {
        name: "Boomer1122546",
        date: "01/09/2022 14h02",
        text: "Too expensive",
        plus: 12,
        minus: 2,
      },
      {
        name: "Revosg4265",
        date: "01/01/2021 11h55",
        text: "Not professional at all",
        plus: 12,
        minus: 2,
      },
    ],
  },
];

export default dashboardData;
