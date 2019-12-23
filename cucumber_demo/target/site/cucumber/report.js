$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/dojo/cocktail.feature");
formatter.feature({
  "name": "Cocktail Ordering",
  "description": "      As Romeo, I want to offer a drink to Juliette so that we can discuss together (and maybe more).",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.romeo_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Creating an empty order",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_Juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "there is 10 cocktails in the order",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.there_is_cocktails_in_the_order(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c10\u003e but was:\u003c0\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:645)\r\n\tat org.junit.Assert.assertEquals(Assert.java:631)\r\n\tat dojo.CocktailSteps.there_is_cocktails_in_the_order(CocktailSteps.java:33)\r\n\tat ✽.there is 10 cocktails in the order(src/test/resources/dojo/cocktail.feature:11)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for \u003cto\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "a message saying \"\u003cmessage\u003e\" is added",
  "keyword": "And "
});
formatter.step({
  "name": "the ticket must say \"\u003cexpected\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "to",
        "message",
        "expected"
      ]
    },
    {
      "cells": [
        "Juliette",
        "Wanna chat?",
        "From Romeo to Juliette: Wanna chat?"
      ]
    },
    {
      "cells": [
        "Jerry",
        "Hei!",
        "From Romeo to Jerry: Hei!"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.romeo_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for Juliette",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_Juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Wanna chat?\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Juliette: Wanna chat?\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Romeo who wants to buy a drink",
  "keyword": "Given "
});
formatter.match({
  "location": "CocktailSteps.romeo_who_wants_to_buy_a_drink(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sending a message with an order",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "an order is declared for Jerry",
  "keyword": "When "
});
formatter.match({
  "location": "CocktailSteps.an_order_is_declared_for_Juliette(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a message saying \"Hei!\" is added",
  "keyword": "And "
});
formatter.match({
  "location": "CocktailSteps.a_message_saying_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the ticket must say \"From Romeo to Jerry: Hei!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CocktailSteps.the_ticket_must_say(String)"
});
formatter.result({
  "status": "passed"
});
});