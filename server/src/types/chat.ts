export interface ChatRequest {
  message: string;
  conversationId?: string;
}

export type SuggestionAction = 'scroll' | 'link' | 'prompt';

export interface SuggestionChip {
  label: string;
  action: SuggestionAction;
  target?: string;
  value?: string;
}

export interface ChatResponse {
  conversationId: string;
  reply: string;
  suggestionChips?: SuggestionChip[];
}
