export type GoogleSheetFormType = 'rsvp' | 'wish';

interface SubmitPayload {
  formType: GoogleSheetFormType;
  name: string;
  guests?: string;
  dietary?: string;
  message?: string;
}

export async function submitToGoogleSheets(payload: SubmitPayload): Promise<void> {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxQFJnBFvRXHB20pd7sRd5muWEvlhf-DFGcKe-DhqQ-Ugq_40TN2mI7KRoO3HLLMj3h2A/exec';

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: 'wedding-site',
    }),
  });
}
