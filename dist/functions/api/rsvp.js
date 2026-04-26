/**
 * Cloudflare Pages Function – RSVP proxy to Google Sheets
 *
 * Environment variable (set in Cloudflare dashboard → Pages → Settings → Environment variables):
 *   GOOGLE_SCRIPT_URL  – The deployment URL of your Google Apps Script web app
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    if (!body.guestName || !body.attending) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const scriptUrl = env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return jsonResponse({ error: "Server misconfigured" }, 500);
    }

    const gsResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    const gsResult = await gsResponse.text();

    return jsonResponse({ success: true, message: gsResult }, 200);
  } catch (err) {
    return jsonResponse({ error: "Internal error" }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
