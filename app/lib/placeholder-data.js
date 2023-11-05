// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
    role: "ADMIN",
  },
  {
    id: "410544b2-4001-4271-9855-fec4b6a6345a",
    name: "User",
    email: "user@testmail.com",
    password: "123456",
    role: "REVIEWER",
  },
];

const participants = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    email: "delba@oliveira.com",
    image_url: "https://picsum.photos/id/0/5000/3333",
    title: "title1",
    score: 3,
    outside_contest: false,
    contest: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
  },
  {
    id: "50ca3e18-62cd-11ee-8c99-0242ac120002",
    name: "Steven Tey",
    email: "steven@tey.com",
    image_url: "https://picsum.photos/id/0/5000/3333",
    title: "title1",
    score: 2,
    outside_contest: false,
    contest: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
  },
  {
    id: "3958dc9e-787f-4377-85e9-fec4b6a6442a",
    name: "Steph Dietz",
    email: "steph@dietz.com",
    image_url: "https://picsum.photos/id/0/5000/3333",
    title: "title1",
    score: 1,
    outside_contest: false,
    contest: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
  },
];

const contests = [
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    title: "test1",
    description: "lorem ipsum",
    start_date: "2023-10-12 18:48:38.192511+00",
    end_date: "2023-10-15 18:48:38.192511+00",
    status: "ACTIVE",
    archived: false,
  },
  {
    id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
    title: "test2",
    description: "lorem ipsum",
    start_date: "2023-10-12 18:48:38.192511+00",
    end_date: "2023-10-13 18:48:38.192511+00",
    status: "CLOSED",
    archived: true,
  },
];

module.exports = {
  users,
  participants,
  contests,
};
