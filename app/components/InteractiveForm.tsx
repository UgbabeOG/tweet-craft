'use client';

import { useState } from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

export default function InteractiveForm() {
  const [tweet, setTweet] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const description = e.target.description.value;
    setLoading(true);  // Set loading to true while the request is being processed

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ description }),
    });

    const result = await response.json();
    setLoading(false);  // Set loading to false after the response is received

    if (result.tweet) {
      setTweet(result.tweet);  // Set the generated tweet
    } else {
      console.error('Error:', result.error);  // Handle the error response
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
      // Regenerate the tweet by re-triggering the API call
      setLoading(true);
      const description = tweet;  // Optionally, use the previous description or update as needed

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
        setTweet(result.tweet);  // Set the new generated tweet
      }
    }
  };

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative">
          <textarea
            id="description"
            name="description"
            rows={10}
            placeholder="Write your thoughts here..."
            className="
              block 
              w-full
              px-4 
              py-3 
              mt-4
              bg-[#1a1a1a]
              text-lg
              border 
              border-gray-300 
              text-white
              rounded-md 
              focus:outline-none 
              focus:ring-2 
              focus:ring-gray-300 
              focus:border-transparent
            "
          />
          <button
            type="submit"
            className="
              absolute 
              bottom-2 
              right-2 
              p-2 
              rounded-full 
              text-white 
              bg-transparent 
              hover:bg-gray-700
            "
            disabled={loading}
          >
            <BsArrowRightCircle size={30} />
          </button>
        </div>
      </form>

      {tweet && (
        <div className="mt-6 text-white">
          <p className="text-lg">{tweet}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleCopy}
              className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-400"
            >
              Copy
            </button>
            <button
              onClick={handleRegenerate}
              className="px-4 py-2 bg-green-500 rounded-full text-white hover:bg-green-400"
            >
              Regenerate
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50">
          <span className="text-white">Generating tweet...</span>
        </div>
      )}
    </div>
  );
}
