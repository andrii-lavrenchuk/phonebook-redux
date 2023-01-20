import { createSlice } from "@reduxjs/toolkit";

const contacts = [
  {
    name: "Erica Powlowski",
    number: "(744) 894-1942 x27932",
    id: "8",
  },
  {
    name: "Paulette Casper",
    number: "640-668-8078",
    id: "9",
  },
  {
    name: "Lee Kunze",
    number: "1-558-295-8791",
    id: "11",
  },
  {
    name: "Sophia Botsford",
    number: "(719) 481-0642 x38850",
    id: "12",
  },
  {
    name: "Yvette Johns DDS",
    number: "1-944-367-5972 x657",
    id: "13",
  },
  {
    name: "Dr. Hattie Jacobi",
    number: "(422) 285-5209 x341",
    id: "14",
  },
  {
    name: "Wilson McCullough",
    number: "696.288.4250 x8637",
    id: "15",
  },
  {
    name: "Gilbert Feest",
    number: "1-256-696-0573 x35284",
    id: "16",
  },
  {
    name: "Marty Jast",
    number: "(664) 533-1707",
    id: "17",
  },
  {
    name: "Jacqueline Cassin",
    number: "(910) 868-6513 x5656",
    id: "18",
  },
  {
    name: "Chris Bechtelar",
    number: "638-680-4864 x3396",
    id: "19",
  },
  {
    name: "Lula Fahey",
    number: "1-809-517-6075 x2147",
    id: "20",
  },
  {
    name: "Angel Mosciski",
    number: "(419) 766-3906 x7317",
    id: "21",
  },
  {
    name: "Maggie Koss",
    number: "(534) 614-8315 x020",
    id: "22",
  },
  {
    name: "Gwen Weber",
    number: "(796) 818-5666 x973",
    id: "23",
  },
  {
    name: "Andy Bogan",
    number: "246.443.3259",
    id: "24",
  },
  {
    name: "Kelly Kuhn",
    number: "(452) 348-8514 x2666",
    id: "25",
  },
  {
    name: "Ms. Wade Cormier II",
    number: "(583) 396-7309 x1263",
    id: "26",
  },
  {
    name: "Kelly Lehner",
    number: "(658) 405-0183 x967",
    id: "27",
  },
];

const contactSlice = createSlice({
  name: "contacts",
  initialState: contacts,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: Date.now(),
            name,
            number,
          },
        };
      },
    },
    deleteConact: {
      reducer(state, action) {
        return state.filter((contact) => contact.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteConact } = contactSlice.actions;

export const contactsReeducer = contactSlice.reducer;
