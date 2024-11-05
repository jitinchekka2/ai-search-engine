# Mini Perplexity Q&A System
This is an AI-powered search engine that combines traditional search capabilities with advanced language models to provide users with precise answers to their queries, accompanied by source citations inspired by [Perplexity](https://www.perplexity.ai/).

## Features
- Follow up questions
- Source citations
- Image results
- Youtube Video results
- Shopping results
- Maps results using react-leaflet with details of each location
- Dark mode based on browser preferences

The shopping results and map results are dynamicaaly rendered based on the user query.

## Setup and Installation
### Prerequisites
Obtain the following API keys:
- Open AI API key
- Brave Search API key
- Serper API key
- Google Custom Search API key
- Google Custom Search Engine ID
- Groq API key
### Installation

1. Clone the repository:
    ```
    git clone https://github.com/jitinchekka/llm-search-engine.git
    ```
2. Move in the directory
    ```
    cd llm-search-engine
    ```
3. Install the dependencies
    ```
    npm install --force
    ```
4. Create a `.env` file in the root directory and add the environment variables similar to the `.env.example` file
5. Start the development server
    ```
    npm run dev
    ```
6. Open the browser and navigate to `http://localhost:3000`

In case of a rate limit error, please change the `searchProvider` and `inferenceModel` to other providers in the `app/config.tsx` file

## Deployment steps
1. Build the project
    ```
    npm run build
    ```
2. Start the server
    ```
    npm start
    ```
3. Open the browser and navigate to `http://localhost:3000`

Deploy the project to a cloud provider like Vercel, Netlify, or Heroku


## Usage guidelines and examples
1. Enter a query in the search bar and click the post icon
2. The search results will be displayed on the screen
3. Click on the source link to view the source
4. Click on the image, video, shopping, or map tab to view the respective results
5. Click on the follow-up questions to get more information

Some example queries to try:
- Travel from Bangalore to Hyderabad
- How to make a chocolate cake
- Best running shoes in 2024
- Purchase iPhone 15

Sometimes the loading of the results, especially the text response, might take some time due to the API rate limits

Example usage screenshots:
![Alt text](static/image.png)
![Alt text](static/image2.png)
![Alt text](static/image3.png)
## Design decisions and Technologies used
### Technologies used
- Next.js
- Tailwind CSS
- Groq
- Langchain JavaScript Library
- Hugging Face Embeddings
- Brave Search API
- Open AI API
- Serper API (For image and video results)
- Google Custom Search API (For shopping results)
### challenges

## Future improvements and Roadmap
- Error handling and logging
- Add an option to switch between different language models in the frontend
- Add a feature to allow users to provide feedback on the answers
- Add a rate limiter to prevent abuse
- Add a caching layer to improve performance