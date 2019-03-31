import Mock from "mockjs";

import "./home.js";

Mock.mock("/api/getName", { name: "Jack", "age|10-20": 10 });
