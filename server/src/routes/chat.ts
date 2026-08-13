import { randomUUID } from 'node:crypto';
import type { Request, Response } from 'express';
import type { ChatRequest, ChatResponse, SuggestionChip } from '../types/chat.js';
import { openai } from '../lib/openai.js';
import { buildPortfolioPrompt } from '../lib/prompt.js';

function buildSuggestionChips(message: string): SuggestionChip[] | undefined {
  const normalized = message.toLowerCase();

  if (normalized.includes('project')) {
    return [
      { label: 'View Projects', action: 'scroll', target: 'projects' },
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
    ];
  }

  if (normalized.includes('skill') || normalized.includes('stack') || normalized.includes('technology')) {
    return [
      { label: 'See Skills', action: 'scroll', target: 'skills' },
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
    ];
  }

  if (normalized.includes('contact') || normalized.includes('hire') || normalized.includes('work')) {
    return [
      { label: 'Contact Me', action: 'scroll', target: 'contact' },
      { label: 'View Projects', action: 'scroll', target: 'projects' },
    ];
  }

  return undefined;
}

export async function handleChatRequest(req: Request, res: Response) {
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

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.5,
      messages: [buildPortfolioPrompt(message)],
    });

    const reply = completion.choices[0]?.message?.content?.trim();

    const response: ChatResponse = {
      conversationId,
      reply: reply || 'I can help with portfolio details, skills, projects, and contact information.',
      suggestionChips: buildSuggestionChips(message),
    };

    return res.status(200).json(response);
  } catch (error) {
    console.error('OpenAI chat error:', error);

    const response: ChatResponse = {
      conversationId,
      reply: 'I am unable to answer at the moment, but you can reach out through the contact section for project inquiries.',
      suggestionChips: [
        { label: 'Contact Me', action: 'scroll', target: 'contact' },
      ],
    };

    return res.status(200).json(response);
  }
}
