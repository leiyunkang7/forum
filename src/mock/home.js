import Mock from "mockjs";

Mock.mock(
  "/questions",
  () =>
    Mock.mock({
      "list|20": [
        {
          question_id: "@increment",
          question_user_id: "@question_id",
          question_content: "@ctitle(5, 20)?",
          create_date: "@datetime",
          voteup_count: "@natural(0, 1000000)",
          pre_content: "@cparagraph",
          "preview|0-1": "@image('400x224', @hex, img)",
          comments_count: "@natural(0, 10000)"
        }
      ]
    }).list
);
