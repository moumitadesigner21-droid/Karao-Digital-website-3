/**
 * KARAO.DIGITAL — Google Apps Script
 * ─────────────────────────────────────────────────────────────────
 * SETUP INSTRUCTIONS (one-time, ~5 minutes):
 *
 * 1. Create a new Google Sheet at sheets.google.com
 *    → Name it "Karao Website Leads"
 *    → Copy the Sheet ID from the URL:
 *      https://docs.google.com/spreadsheets/d/ *** SHEET_ID *** /edit
 *
 * 2. Go to script.google.com → New Project → paste this entire file
 *
 * 3. Replace SHEET_ID below with your actual Sheet ID
 *
 * 4. Click Deploy → New Deployment
 *    → Type: Web App
 *    → Execute as: Me
 *    → Who has access: Anyone
 *    → Click Deploy → copy the Web App URL
 *
 * 5. Open /components/EnquiryModal.tsx and replace APPS_SCRIPT_URL
 *    with the URL you just copied.
 *
 * 6. Also update WHATSAPP_NUMBER in EnquiryModal.tsx
 *    (format: country code + number, no + sign, e.g. 919876543210)
 * ─────────────────────────────────────────────────────────────────
 */

const SHEET_ID     = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const NOTIFY_EMAIL = 'Karao.digital@gmail.com';

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Auto-create header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Phone Number', 'Email', 'Enquiry Type']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#0f172a').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    const timestamp = e.parameter.timestamp || new Date().toLocaleString('en-IN');
    const name      = e.parameter.name     || '';
    const phone     = e.parameter.phone    || '';
    const email     = e.parameter.email    || '';
    const enquiry   = e.parameter.enquiry  || '';

    // Write row
    sheet.appendRow([timestamp, name, phone, email, enquiry]);

    // Email notification to Karao.digital@gmail.com
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: `New Enquiry: ${enquiry} — ${name}`,
      htmlBody: `
        <div style="font-family:sans-serif;max-width:520px;background:#0f172a;color:#e2e8f0;padding:24px;border-radius:12px;">
          <h2 style="color:#00BFCB;margin-top:0;">New Enquiry from Karao Website</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#94a3b8;width:130px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Email</td><td style="padding:8px 0;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Enquiry</td><td style="padding:8px 0;">${enquiry}</td></tr>
            <tr><td style="padding:8px 0;color:#94a3b8;">Time</td><td style="padding:8px 0;">${timestamp}</td></tr>
          </table>
          <p style="margin-top:20px;color:#64748b;font-size:12px;">Sent automatically by karao.digital website</p>
        </div>
      `,
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for Google Apps Script to accept POST requests
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'Karao lead capture active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
