import OpenAI from "openai";
import { openAiKey } from "./constants";
export const client = new OpenAI({
  apiKey: openAiKey,
  dangerouslyAllowBrowser: true,
  //   apiKey: process.env["OPENAI_API_KEY"],
});
