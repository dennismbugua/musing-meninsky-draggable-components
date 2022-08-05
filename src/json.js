const IconBox = require("../public/test.png");

export const TASKS = [
  {
    id: 1,
    status: "new",
    image: IconBox,
    time: "8 hrs",
    days: "5 days left"
  },
  {
    id: 2,
    status: "pending",
    image: IconBox,
    time: "6 hrs",
    days: "6 days left",
    done: false
  },
  {
    id: 3,
    status: "done",
    image: IconBox,
    time: "13 hrs",
    days: "4 days left"
  },
  {
    id: 4,
    status: "new",
    image: IconBox,
    time: "22 hrs",
    days: "2 days left",
    done: true
  },
  {
    id: 5,
    status: "pending",
    image: IconBox,
    time: "2 hrs",
    days: "1 day left",
    newOrder: true,
    done: false
  },
  {
    id: 6,
    status: "done",
    image: IconBox,
    time: "20 hrs",
    days: "11 days left",
    done: true
  }
];
