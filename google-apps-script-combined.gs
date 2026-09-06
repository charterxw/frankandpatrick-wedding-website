/**
 * Frank & Patrick — 婚礼网站表单接收（RSVP + 音乐游戏，共用一个脚本）
 *
 * 部署后 RSVP 和 /game-music 都走这一个 /exec URL，
 * Cloudflare 那边不用新增环境变量，沿用现有的 GOOGLE_SCRIPT_URL 即可。
 *
 * 改完代码后必须：部署 → 管理部署 → 铅笔 → 版本「新版本」→ 部署
 */

const GAME_SHEET_NAME = 'Game Music';

const GAME_HEADERS = [
  'Timestamp', 'Name',
  'Singer 1', 'Singer 2', 'Singer 3',
  'Has Plus One', 'Plus One Name',
  'Plus One Singer 1', 'Plus One Singer 2', 'Plus One Singer 3'
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const data = JSON.parse(e.postData.contents);
    if (data.formType === 'game-music') {
      handleGameMusic_(data);
    } else {
      handleRsvp_(data);
    }
    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ── RSVP：逻辑和你原来的一样，只是把 getActiveSheet() 换成固定的第一个工作表 ── */
function handleRsvp_(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  sheet.appendRow([
    new Date(),
    data.guestName || '',
    data.attending || '',
    data.accommodation || '',
    data.transportation || '',
    data.dietary || '',
    data.brunch || '',
    data.song || ''
  ]);
}

/* ── 音乐游戏：写到独立的 Game Music 标签页，表头自动创建 ── */
function handleGameMusic_(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(GAME_SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(GAME_SHEET_NAME, ss.getNumSheets());
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(GAME_HEADERS);
    sheet.getRange(1, 1, 1, GAME_HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    data.submittedAt ? new Date(data.submittedAt) : new Date(),
    data.guestName || '',
    data.singer1 || '',
    data.singer2 || '',
    data.singer3 || '',
    data.hasPlusOne || 'No',
    data.plusOneName || '',
    data.plusOneSinger1 || '',
    data.plusOneSinger2 || '',
    data.plusOneSinger3 || ''
  ]);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** 在编辑器里直接运行，验证两条路都写对了地方。跑完记得删掉这两行测试数据。 */
function testBoth() {
  handleGameMusic_({
    guestName: 'Test Guest',
    singer1: '周杰伦', singer2: 'Taylor Swift', singer3: '',
    hasPlusOne: 'Yes', plusOneName: 'Test Plus One',
    plusOneSinger1: '五月天',
    submittedAt: new Date().toISOString()
  });
  handleRsvp_({ guestName: 'Test RSVP', attending: 'Joyfully Accept' });
}
