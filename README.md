# MEDICAL REPORT ANALYZER 
## Team Members: 
### Anirban Ghosh (Heritage Institute of Technology, Btech in Computer Science and Engineering)
### Atisha Bhattacharyya (Heritage Institute of Technology, Btech in Computer Science and Engineering)
### Shovini Guha (Institute of Engineering and Management, Btech in Computer Science and Engineering) 

# Overview
Report Analyzer is an interactive web application designed to offer insightful analysis and diagnosis of medical reports provided by our users. Designed to revolutionize the process of disease identification, our system efficiently processes medical reports in PDF format, allowing the user to rapidly pinpoint potential health concerns.

Additionally, it also serves as an intelligent companion – a cutting-edge conversational agent (Chat-Bot), responding to patient queries about their reports and diagnosed condition. This technology aims to enhance the diagnostic experience, fostering efficiency and clarity in medical interactions. Welcome to the future of healthcare diagnosis and patient engagement.

# Tech Stack
## Front end:
### Next.js 14: Employed for building a dynamic and interactive user interface.
### TypeScript: Utilized to enhance code quality and maintainability in the frontend
## Backend Authentication:
### MongoDB: Chosen as the backend database for efficient storage and retrieval of medical PDF documents.
### Clerk: Integrated to manage user authentication seamlessly, supporting Google and email-based authentication methods.

## Model: 
### The project utilizes LLAMA Index to create an LLM (Large Language Model) that fetches the Mistral-7B-Instruct-v0.1 model from the Hugging Face Hub. 
### Additionally, it incorporates an embedded model, all-mpnet-base-v2 from sentence-transformers, using Langchain embeddings on Hugging Face embeddings. The pretrained model is finetuned to analyze medical data from the fetched reports and provide a thorough evaluation through the interactive Chat Bot on our user friendly UI.
## Integration:
### Django 1.11: Used to integrate chatbot model with the frontend.

```bash
git clone https://github.com/shoviniguha/medanalysis
cd medanalysis
pip install -r requirements.txt

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
