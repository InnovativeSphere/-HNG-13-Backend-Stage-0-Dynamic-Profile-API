# HNGi13 Backend Stage 0 — Dynamic Profile API

## Overview
This is my Stage 0 backend project for the HNG Internship (13th batch).  
The project is a simple **Node.js/Express RESTful API** that returns my profile information along with a **dynamic cat fact** fetched from an external API.  

The `/me` endpoint returns a JSON object in the required format:

```json
{
  "status": "success",
  "user": {
    "email": "your-email@example.com",
    "name": "Salim Sambo",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T11:55:24.608Z",
  "fact": "Random cat fact from Cat Facts API"
}


Server Setup:
1.Initialized an Express server in server.js and configured it to parse JSON.

2.Model Creation:
Created userModel.js in /models to store my email, name, and stack. This ensures consistency across all responses.

3.Controller:
Created userController.js to handle the /me endpoint logic.

4.Fetches a dynamic cat fact using the Cat Facts API (https://catfact.ninja/fact) via axios.

5.Returns JSON response with user info, timestamp, and the cat fact.

6.Includes error handling in case the external API fails.

7.Route: Created userRoutes.js in /routes to define the /me GET route and link it to the controller.

8.Integration: Mounted the route in server.js and started the server on a single port.