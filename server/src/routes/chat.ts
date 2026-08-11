import { randomUUID } from 'node:crypto';
import type { Request, Response } from 'express';
import type { ChatRequest, ChatResponse, SuggestionChip } from '../types/chat.js';

function buildSuggestionChips(message: string): SuggestionChip[] | undefined {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes('project')) {
    return [
      { label: 'View Projects', action: 'scroll', target: 'projects' },
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
    ];
  }

  if (normalizedMessage.includes('skill') || normalizedMessage.includes('stack')) {
    return [
      { label: 'See Skills', action: 'scroll', target: 'skills' },
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
    ];
  }

  if (normalizedMessage.includes('contact') || normalizedMessage.includes('hire')) {
    return [
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
      { label: 'View Projects', action: 'scroll', target: 'projects' },
    ];
  }

  return undefined;
}

function buildReply(message: string): string {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes('project')) {
    return 'I can help with that. My portfolio highlights a few featured projects, and I can guide you to the projects section for the details.';
  }

  if (normalizedMessage.includes('skill') || normalizedMessage.includes('stack')) {
    return 'I work with modern frontend and backend web technologies. Check the skills section for the full stack breakdown.';
  }

  if (normalizedMessage.includes('contact') || normalizedMessage.includes('hire')) {
    return 'You can reach me through the contact section. If you want, I can point you there directly.';
  }

  return 'I can answer questions about my portfolio, skills, projects, and contact details. Ask me about any of those topics.';
}

export function handleChatRequest(req: Request, res: Response) {
  const body = req.body as Partial<ChatRequest>;
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!message) {
    return res.status(400).json({
      error: 'message is required',
    });
  }

  const conversationId =
    typeof body.conversationId === 'string' && body.conversationId.trim().length > 0
      ? body.conversationId.trim()
      : randomUUID();

  const response: ChatResponse = {
    conversationId,
    reply: buildReply(message),
    suggestionChips: buildSuggestionChips(message),
  };

  return res.status(200).json(response);
}
