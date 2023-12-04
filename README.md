GPT Weather App - Live Weather Reporting Experience
Project DEMO: https://lnkd.in/dXQqB8Xq

Technologies Used:
Frontend: Next.js 13.4, TypeScript, Tremor UI, Tailwind CSS
Backend: GraphQL, Apollo Client, StepZen
APIs: WeatherAPI, OpenAI (ChatGPT)
Deployment: Vercel (Hobby Plan)
Others: Dynamic Routing, Server-Side Rendering, API Routes

Project Description:
This project, built with Next.js 13.4, is a modern web app. It gets weather data from WeatherAPI and sends it to ChatGPT for a weather reporter-like summary.

Dynamic Routing: Custom weather pages for different cities using Next.js’s dynamic routing.
GraphQL and Apollo Client: Used for data querying and management, with GraphQL endpoints via StepZen.
UI/UX: Designed with Tremor and Tailwind CSS for a user-friendly, responsive interface.
ChatGPT Integration: Weather data sent to ChatGPT for live presentation-like summaries.
Revalidate Feature: Data updates every 60 seconds on the server-side for fresh info.
Deployment: Hosted on Vercel under the hobby plan, facing some limitations.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
