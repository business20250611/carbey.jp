# Google Sheets Integration Setup Guide

## ✅ What's Been Implemented

Your Contact form now sends data directly to your Google Sheet using the Google Sheets API with the following features:

- **Direct API Integration**: Uses `fetch()` to call Google Sheets API (browser-compatible)
- **Dynamic Sheet Selection**: 
  - Document requests → "資料請求" sheet
  - Contact inquiries → "お問い合わせ" sheet
- **Correct Column Order**: company, name, email, phone, message, time
- **Error Handling**: Proper error messages and user feedback

## 🔧 Required Setup

### 1. Google Sheets API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Sheets API
4. Create credentials → API Key
5. Copy your API key

### 2. Update API Key
In `src/libs/utils/googleSheets.ts`, replace:
```typescript
const API_KEY = 'AIzaSyDu3ePqIu6R0rnuGx4aqbTtsWFjDwBWrNY';
```
with your actual API key.

### 3. Sheet Configuration
Make sure your Google Sheet has:
- Sheet tabs named "資料請求" and "お問い合わせ"
- Headers in row 1: 会社名, 氏名, メールアドレス, 携帯番号, お問い合わせ内容, タイムスタンプ

### 4. API Key Restrictions (Recommended)
For security, restrict your API key to:
- Only Google Sheets API
- Your domain (if deploying to production)

## 📊 Data Flow

When a user submits the form:
1. Form data is collected
2. Data is sent to Google Sheets API
3. Row is appended to the appropriate sheet
4. Email notification is sent via EmailJS
5. User sees success message
6. Form is reset

## 🧪 Testing

1. Fill out the contact form
2. Submit it
3. Check your Google Sheet for the new row
4. Verify data appears in the correct columns

The integration is now ready to use!
