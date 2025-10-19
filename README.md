# HNGi13 Backend Stage 0 — Dynamic Profile API

## Overview
This is my **Stage 0 backend project** for the **HNG Internship (13th batch)**.  
The goal of this task was to create a simple **backend API** that returns my profile information along with a **dynamic cat fact** fetched from an external API.

---

## API Endpoint
**GET** `/me`

### Example Response
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
