"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Copy, RefreshCw } from "lucide-react";
import * as HoverCard from "@radix-ui/react-hover-card";

const commonWords = [
  "apple",
  "banana",
  "orange",
  "grape",
  "lemon",
  "coffee",
  "water",
  "pizza",
  "pasta",
  "bread",
  "cheese",
  "butter",
  "sugar",
  "honey",
  "music",
  "video",
  "photo",
  "camera",
  "phone",
  "laptop",
  "window",
  "garden",
  "flower",
  "river",
  "ocean",
  "mountain",
  "forest",
  "summer",
  "winter",
  "spring",
  "autumn",
  "happy",
  "smile",
  "laugh",
  "friend",
  "family",
  "house",
  "office",
  "school",
  "market",
  "street",
  "bridge",
  "castle",
  "planet",
  "rocket",
  "guitar",
  "piano",
  "violin",
];

const generateMemorableToken = (complexity: number) => {
  const numWords = Math.max(1, Math.min(3, Math.ceil(complexity)));
  const selectedWords = [];

  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * commonWords.length);
    selectedWords.push(commonWords[randomIndex]);
  }

  let result = selectedWords
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (complexity >= 1) {
    result = result.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1");
  }

  if (complexity >= 2) {
    result = result.replace(/o/gi, "0").replace(/s/gi, "5").replace(/t/gi, "7");
  }

  if (complexity >= 3) {
    result = result.replace(/b/gi, "8").replace(/l/gi, "!").replace(/z/gi, "2");
    const specialChars = "!@#$%^&*";
    const randomSpecial = specialChars.charAt(
      Math.floor(Math.random() * specialChars.length)
    );
    const randomNum = Math.floor(Math.random() * 100);
    result += randomSpecial + randomNum;
  }

  return result;
};

export default function TokenGenerator() {
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    complexity: 2,
  });

  const generateToken = () => {
    let chars = "";
    if (options.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (options.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (options.numbers) chars += "0123456789";
    if (options.symbols) {
      if (options.complexity === 1) chars += "!@#$%^&*";
      else if (options.complexity === 2) chars += "!@#$%^&*()_+-=";
      else if (options.complexity === 3)
        chars += "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    }

    if (chars.length === 0) {
      setToken("Please select at least one character type");
      return;
    }

    let result = "";
    if (options.uppercase) result += "A";
    if (options.lowercase) result += "a";
    if (options.numbers) result += "1";
    if (options.symbols) {
      if (options.complexity === 1) result += "!";
      else if (options.complexity === 2) result += "@";
      else if (options.complexity === 3) result += "#";
    }

    const remainingLength = options.length - result.length;
    for (let i = 0; i < remainingLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    result = result
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    setToken(result);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!token || token === "Please select at least one character type") return;
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    generateToken();
  }, [options]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">Generate Your Token</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          <Input
            value={token}
            readOnly
            className="pr-20 font-mono text-sm h-12"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-20 flex items-center justify-center"
            onClick={copyToClipboard}
            disabled={
              !token || token === "Please select at least one character type"
            }
          >
            {copied ? (
              <span className="text-sm text-green-600">Copied!</span>
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label htmlFor="length">Length: {options.length}</Label>
            <Slider
              id="length"
              min={4}
              max={64}
              step={1}
              value={[options.length]}
              onValueChange={(value) =>
                setOptions({ ...options, length: value[0] })
              }
              className="w-2/3"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="uppercase"
                checked={options.uppercase}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, uppercase: checked })
                }
              />
              <Label htmlFor="uppercase">Uppercase (A-Z)</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="lowercase"
                checked={options.lowercase}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, lowercase: checked })
                }
              />
              <Label htmlFor="lowercase">Lowercase (a-z)</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="numbers"
                checked={options.numbers}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, numbers: checked })
                }
              />
              <Label htmlFor="numbers">Numbers (0-9)</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="symbols"
                checked={options.symbols}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, symbols: checked })
                }
              />
              <Label htmlFor="symbols">Symbols (!@#$)</Label>
            </div>
          </div>

          <div className="space-y-2">
            <Label>
              Complexity:{" "}
              {options.complexity === 1
                ? "Low"
                : options.complexity === 2
                ? "Medium"
                : "High"}
            </Label>
            <div className="flex gap-2">
              <Button
                variant={options.complexity === 1 ? "default" : "outline"}
                className="flex-1"
                onClick={() => setOptions({ ...options, complexity: 1 })}
              >
                Low
              </Button>
              <Button
                variant={options.complexity === 2 ? "default" : "outline"}
                className="flex-1"
                onClick={() => setOptions({ ...options, complexity: 2 })}
              >
                Medium
              </Button>
              <Button
                variant={options.complexity === 3 ? "default" : "outline"}
                className="flex-1"
                onClick={() => setOptions({ ...options, complexity: 3 })}
              >
                High
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="w-full" onClick={generateToken}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Generate Token
            </Button>

            <HoverCard.Root>
              <HoverCard.Trigger asChild>
                <Button
                  className="w-full"
                  variant="secondary"
                  onClick={() => {
                    const memorableToken = generateMemorableToken(
                      options.complexity
                    );
                    setToken(memorableToken);
                    setCopied(false);
                  }}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Generate Memorable Token
                </Button>
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content
                  className="w-80 bg-white p-4 rounded-xl shadow-lg border text-sm z-50"
                  side="top"
                  sideOffset={10}
                >
                  <p className="font-medium mb-1 text-black">
                    What is a Memorable Token?
                  </p>
                  <p className="text-gray-700">
                    A memorable token is a password-like string made from real
                    words you can remember more easily. Based on the selected
                    complexity, it may include leetspeak (like "a" → "4"),
                    special characters, and numbers to balance security and
                    memorability.
                  </p>
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


