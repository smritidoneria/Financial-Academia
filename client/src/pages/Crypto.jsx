import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const resources = [
  {
    title: "Intro to Crypto & Blockchain",
    url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4",
    description: "Learn the basics of cryptocurrency and blockchain technology.",
  },
  {
    title: "How Ethereum Works",
    url: "https://www.youtube.com/watch?v=TDGq4aeevgY",
    description: "A deep dive into Ethereum, smart contracts, and dApps.",
  },
  {
    title: "Web3 Explained",
    url: "https://www.youtube.com/watch?v=Qh6VQmR8c70",
    description: "Understand Web3 and its impact on the internet.",
  },
  {
    title: "Solidity Tutorial",
    url: "https://www.youtube.com/watch?v=gSQXq2_j-mw",
    description: "Learn how to write smart contracts using Solidity.",
  },
  {
    title: "DeFi & Its Future",
    url: "https://www.youtube.com/watch?v=3x1b_S6Qp2Q",
    description: "A comprehensive guide to Decentralized Finance (DeFi).",
  },
];

export default function CryptoWeb3Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Crypto & Web3 Learning Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
          <Card key={index} className="bg-gray-800 shadow-lg hover:shadow-2xl transition-all rounded-xl p-4">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-gray-400 mb-4">{resource.description}</p>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                onClick={() => window.open(resource.url, "_blank")}
              >
                <PlayCircle className="w-5 h-5" /> Watch Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
