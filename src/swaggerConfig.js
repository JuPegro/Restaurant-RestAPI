import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RestaurantAPI",
      version: "1.0.1",
      description: "RestaurantAPI is a modern API designed to facilitate management and access to information related to restaurants and gastronomic establishments. With this API, developers can access detailed data about menus, reservations, customer reviews, opening hours, locations, and more, all in an efficient and secure manner. This API offers a robust and well-documented set of endpoints that allow applications to handle essential information for restaurant operations, optimizing reservation processes, menu management, data analysis, and customer interaction.",
      contact: {
        name: "JuPegro_",
        url: "jupegro.com",
        email: "JuPegro.contact@gmail.com"
      },
      license: {
        name: "MIT",
        url: "https://github.com/JuPegro/Restaurant-RestAPI?tab=MIT-1-ov-file",
      },
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
  },
  apis: ["src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

export default specs;


