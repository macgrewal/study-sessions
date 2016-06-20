(function (seedData) {

  'use strict';

  seedData.material = [{
    name: "The Neophyte's Guide to Scala Part 1: Extractors",
    description: "Explanation of how objects are deconstructed so that they can be used in pattern matching.",
    type: "blog",
    url: "http://danielwestheide.com/blog/2012/11/21/the-neophytes-guide-to-scala-part-1-extractors.html",
    tags: ["Scala", "Extractors", "Pattern Matching"]
  }, {
    name: "The Neophyte's Guide to Scala Part 2: Extracting Sequences",
    description: "Explanation of how sequences are deconstructed so that they can be used in pattern matching.",
    type: "blog",
    url: "http://danielwestheide.com/blog/2012/11/28/the-neophytes-guide-to-scala-part-2-extracting-sequences.html",
    tags: ["Scala", "Extractors", "Pattern Matching", "Sequences"]
  }, {
    name: "The Neophyte's Guide to Scala Part 3: Patterns Everywhere",
    description: "",
    type: "blog",
    url: "http://danielwestheide.com/blog/2012/11/21/the-neophytes-guide-to-scala-part-1-extractors.html",
    tags: ["Scala", "Extractors", "Pattern Matching", "Anonymous Functions", "Partial Functions"]
  }, {
    name: "What is Scala?",
    description: "article explaining what Scala is and some of the main features.",
    type: "article",
    url: "hhttp://www.scala-lang.org/what-is-scala.html",
    tags: ["Scala"]
  }, {
    name: "Play! framework for Scala",
    description: "walkthrough of creating a Scala, Play! web application.",
    type: "video",
    url: "https://www.youtube.com/watch?v=eNCerkVyQdc",
    tags: ["Play", "Play!", "Framework", "Scala"]
  }, {
    name: "Introduction to Microservices",
    description: "article on the Microservices pattern.",
    type: "blog",
    url: "https://www.nginx.com/blog/introduction-to-microservices/",
    tags: ["Microservices", "NGINX"]
  }, {
    name: "GitHub tutorial",
    description: "interactive online tutorial on using GitHub.",
    type: "tutorial",
    url: "https://try.github.io/levels/1/challenges/1",
    tags: ["GitHub"]
  }];

  seedData.plan = [{
    name: "DDCT onboarding - developer",
    goal: "To learn DDCT developer essentials.",
    material: ["Play", "Scala", "DDCT"],
    tags: ["Play", "Scala", "DDCT"]
  }];

}(module.exports));
