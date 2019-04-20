import Mock from "mockjs";

Mock.setup({
  timeout: "200-600"
});

import "./home.js";

Mock.mock("/api/getName", { name: "Jack", "age|10-20": 10 });
