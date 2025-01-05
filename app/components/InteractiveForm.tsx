'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, Send, Copy, RefreshCw } from "lucide-react";

export default function InteractiveForm() {
  const [tweet, setTweet] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const description = e.target.description.value;
    setLoading(true);

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.tweet) {
      setTweet(result.tweet);
    } else {
      console.error('Error:', result.error);
    }
  };

  const handleCopy = () => {
    if (tweet) {
      navigator.clipboard.writeText(tweet);
      alert('Tweet copied to clipboard!');
    }
  };

  const handleRegenerate = async () => {
    if (tweet) {
      setLoading(true);
      const description = tweet;
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description }),
      });

      const result = await response.json();
      setLoading(false);

      if (result.tweet) {
        setTweet(result.tweet);
      }
    }
  };

  return (
    <Card className="w-full bg-transparent border-gray-800">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="relative">
            <Textarea
              id="description"
              name="description"
              placeholder="Write your thoughts here..."
              className="min-h-[200px] bg-transparent text-lg resize-none text-white 2xl:text-xl"
              disabled={loading}
            />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute bottom-2 right-2 text-white bg-primary/80 hover:bg-primary/90"
              disabled={loading}
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>

        {tweet && (
          <Card className="mt-6 bg-transparent border-gray-800">
            <CardContent className="pt-6 pb-4 space-y-4 text-center bg-gray-800">
              <p className="text-lg text-white">{tweet}</p>
              <div className="flex gap-4 mt-4">
                <Button
                  onClick={handleCopy}
                  variant="secondary"
                  className="gap-2 flex items-center justify-center gap-1 h-10 px-4 text-sm font-medium rounded-md"
                >
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button
                  onClick={handleRegenerate}
                  variant="secondary"
                  className="gap-2 flex items-center justify-center gap-1 h-10 px-4 text-sm font-medium rounded-md"
                  disabled={loading}
                >
                  <RefreshCw className="h-4 w-4" />
                  Regenerate
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {loading && (
          <div className="absolute inset-0">
            <div className="flex items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <span className="text-sm">Generating tweet...</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
