/**
 * Cloudflare Pages Function – Music Game Night proxy to Google Sheets
 *
 * Environment variables (Cloudflare dashboard → Pages → Settings → Environment variables):
 *   GOOGLE_SCRIPT_URL_GAME_MUSIC – deployment URL of the Apps Script web app for this form.
 *   GOOGLE_SCRIPT_URL            – fallback, if you reuse the same Apps Script as the RSVP form.
 *                                  Every payload carries formType: "game-music" so one script
 *                                  can route rows to a separate sheet tab.
 *
 * Apps Script side (Extensions → Apps Script → deploy as Web app, "Anyone" access):
 *
 *   function doPost(e) {
 *     var body  = JSON.parse(e.postData.contents);
 *     var ss    = SpreadsheetApp.getActiveSpreadsheet();
 *     var name  = body.formType === 'game-music' ? 'Game Music' : 'RSVP';
 *     var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
 *     if (sheet.getLastRow() === 0) {
 *       sheet.appendRow(['Timestamp','Name','Singer 1','Singer 2','Singer 3',
 *                        'Has Plus One','Plus One Name',
 *                        'Plus One Singer 1','Plus One Singer 2','Plus One Singer 3']);
 *     }
 *     sheet.appendRow([new Date(), body.guestName, body.singer1, body.singer2, body.singer3,
 *                      body.hasPlusOne, body.plusOneName,
 *                      body.plusOneSinger1, body.plusOneSinger2, body.plusOneSinger3]);
 *     return ContentService.createTextOutput('OK');
 *   }
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();

    if (!body.guestName || !body.singer1) {
      return jsonResponse({ error: "Missing required fields" }, 400);
    }

    const scriptUrl = env.GOOGLE_SCRIPT_URL_GAME_MUSIC || env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return jsonResponse({ error: "Server misconfigured" }, 500);
    }

    const gsResponse = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, formType: "game-music" }),
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
