/**
 * Google Apps Script Web App for handling form submissions
 * Logs data into Google Sheets and sends notification emails
 */
function doPost(e) {
    try {
      const SPREADSHEET_ID = '1OY_yKFft7CPw0OQ55S9KRqNwXJ_N6n0ksDTc9p4Pagk';
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  
      // --- Extract form parameters ---
      const params = e.parameter;
      const company = params.company || '';
      const name = params.name || '';
      const email = params.email || '';
      const phone = params.phone || '';
      const message = params.message || '';
      const time = params.time || new Date().toLocaleString('ja-JP');
      const type = params.type || 'contact';
  
      // --- Select target sheet based on type ---
      const sheetName = type === 'document' ? '資料請求' : 'お問い合わせ';
      const targetSheet = ss.getSheetByName(sheetName) || ss.getSheets()[0];
      targetSheet.appendRow([company, name, email, phone, message, time]);
  
      // --- Common setup ---
      const senderName = name;
      const noreplyAddress = 'noreply@carbey.jp';
      const adminMail = 'info@carbey.jp';
  
      // --- File attachment ---
      const fileName =
        type === 'document' ? 'HP資料請求・資料.pdf' : '';
      const attachments = [];
      if (fileName) {
        const fileIterator = DriveApp.getFilesByName(fileName);
        if (fileIterator.hasNext()) {
          attachments.push(fileIterator.next().getAs(MimeType.PDF));
        }
      }
  
      // --- Prepare HTML email ---
      let subject = '';
      let htmlBody = '';
  
      if (type === 'document') {
        subject = '【Carbey】資料をお送りします';
        htmlBody = `
          <div style="font-family:'Segoe UI','Hiragino Sans','Meiryo',sans-serif;color:#333;line-height:1.8;font-size:15px;">
            <p style="font-size:16px;">📩 <strong>資料請求ありがとうございます。</strong></p>
            <p>以下の内容を確認させていただきました。<br>
            資料を添付しておりますので、ぜひご確認ください。</p>
  
            <div style="background:#f8f9fa;border-radius:8px;padding:15px;margin:20px 0;">
              <p>🏢 <strong>会社名:</strong> ${company || '-'}<br/>
              👤 <strong>氏名:</strong> ${name || '-'}<br/>
              📱 <strong>携帯番号:</strong> ${phone || '-'}<br/>
              💬 <strong>お問い合わせ内容:</strong><br/>
              <span style="white-space:pre-wrap;">${message || '-'}</span></p>
            </div>
  
            <p style="color:#666;font-size:13px;">⏰ <strong>送信時刻:</strong> ${time}</p>
  
            <hr style="border:none;border-top:1px solid #ddd;margin:25px 0;">
            <p style="font-size:13px;color:#999;">
              ※このメールは送信専用アドレス（${noreplyAddress}）から自動送信されています。<br>
              ご返信いただいても対応できませんのでご了承ください。
            </p>
          </div>`;
        
        // Send document to user
        MailApp.sendEmail({
          to: email,
          subject,
          htmlBody,
          attachments,
          name: senderName,
          replyTo: adminMail
        });
  
      } else {
        subject = '【Carbey】新しいお問い合わせ';
        htmlBody = `
          <div style="font-family:'Segoe UI','Hiragino Sans','Meiryo',sans-serif;color:#333;line-height:1.8;font-size:15px;">
            <p style="font-size:16px;">💬 <strong>新しいお問い合わせが届きました。</strong></p>
            <p>以下の内容をご確認ください。</p>
  
            <div style="background:#f8f9fa;border-radius:8px;padding:15px;margin:20px 0;">
              <p>🏢 <strong>会社名:</strong> ${company || '-'}<br/>
              👤 <strong>氏名:</strong> ${name || '-'}<br/>
              ✉️ <strong>メール:</strong> ${email || '-'}<br/>
              📱 <strong>携帯番号:</strong> ${phone || '-'}<br/>
              💬 <strong>お問い合わせ内容:</strong><br/>
              <span style="white-space:pre-wrap;">${message || '-'}</span></p>
            </div>
  
            <p style="color:#666;font-size:13px;">⏰ <strong>送信時刻:</strong> ${time}</p>
  
            <hr style="border:none;border-top:1px solid #ddd;margin:25px 0;">
            <p style="font-size:13px;color:#999;">
              ※このメールはシステムから自動送信されています。<br>
              内容に心当たりがない場合は、管理者までご連絡ください。
            </p>
          </div>`;
        
        // Notify admin (and optionally CC user)
        MailApp.sendEmail({
          to: adminMail,
          subject,
          htmlBody,
          attachments,
          name: senderName,
          replyTo: email
        });
      }
  
      // --- Return success response ---
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'success', message: 'Data processed successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
  
    } catch (error) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: 'error', message: error.toString() }))
        .setMimeType(ContentService.MimeType.JSON);
    }
  }
  
  /**
   * Test endpoint
   */
  function doGet() {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success', message: 'Google Apps Script is running correctly.' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  