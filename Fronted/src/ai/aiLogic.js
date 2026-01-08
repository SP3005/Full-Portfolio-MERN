import { aiReplies } from "./aiReplies";

export function getAIReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("who") || msg.includes("about") || msg.includes("name")) {
    return aiReplies.about;
  }

  if (msg.includes("skill") || msg.includes("react") || msg.includes("tech")) {
    return aiReplies.skills;
  }

  if (msg.includes("project") || msg.includes("work")) {
    return aiReplies.projects;
  }

  if (msg.includes("experience") || msg.includes("intern")) {
    return aiReplies.experience;
  }

  if (msg.includes("hire") || msg.includes("why")) {
    return aiReplies.hire;
  }

  if (
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("github") ||
    msg.includes("linkedin")
  ) {
    return aiReplies.contact;
  }

  return aiReplies.fallback;
}
