import Hapi from "@hapi/hapi";
import { LinkedinHandler } from "./handlers/LinkedinHandler";
import FirebaseController from "../../database/firebase/FirebaseController";

export const routes: Hapi.ServerRoute[] = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    },
  },
  {
    method: "GET", //TODO: We might not be able to scrape these webistes
    path: "/get-linkedin-offers",
    handler: (request, h) => {
      return LinkedinHandler.getAllListings();
    },
  },
  {
    method: "GET", //TODO: We might not be able to scrape these webistes
    path: "/get-indeed-offers",
    handler: (request, h) => {
      return "Hello test 2!";
    },
  },
  {
    method: "GET", //TODO: We might not be able to scrape these webistes
    path: "/get-glassdoor-offers",
    handler: (request, h) => {
      return "Hello test 2!";
    },
  },
  {
    method: "GET",
    path: "/test-database",
    handler: async (request, h) => {
      console.log("I am here");
      const collectionName = "job_offerings";
      const databaseController = new FirebaseController();
      const data = await databaseController.getCollectionData(collectionName);
      console.log(data);
      return data;
    },
  },
];
