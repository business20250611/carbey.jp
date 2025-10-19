# Google Apps Script Setup Guide

## ✅ Perfect Choice! Google Apps Script is the Best Solution

Google Apps Script is ideal because:
- **No authentication complexity** - Works directly with your Google Sheet
- **No server required** - Runs on Google's infrastructure
- **Secure** - No API keys exposed in frontend code
- **Simple** - Easy to deploy and maintain

## 🔧 Setup Steps

### 1. Deploy Google Apps Script

1. **Open your Google Sheet**: `https://docs.google.com/spreadsheets/d/1OY_yKFft7CPw0OQ55S9KRqNwXJ_N6n0ksDTc9p4Pagk/edit`

2. **Open Apps Script**:
   - Go to **Extensions** → **Apps Script**
   - Delete any existing code

3. **Paste the Script**:
   - Copy the code from `google-apps-script.js`
   - Paste it into the Apps Script editor
   - Save the project (Ctrl+S)

4. **Deploy as Web App**:
   - Click **Deploy** → **New deployment**
   - Choose **Web app** as the type
   - Set **Execute as**: Me
   - Set **Who has access**: Anyone
   - Click **Deploy**

5. **Copy the Web App URL**:
   - Copy the Web App URL (looks like `https://script.google.com/macros/s/AKfycb.../exec`)
   - This is your Web App URL

### 2. Update Frontend Code

In `src/libs/utils/googleSheets.ts`, replace:
```typescript
const WEB_APP_URL = 'https://script.google.com/macros/s/YOUR_WEB_APP_SCRIPT_ID/exec';
```

With your actual Web App URL:
```typescript
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
```

### 3. Set Up Your Google Sheet

Make sure your Google Sheet has:
- **Sheet tabs**: "資料請求" and "お問い合わせ"
- **Headers in row 1**: 会社名, 氏名, メールアドレス, 携帯番号, お問い合わせ内容, タイムスタンプ

### 4. Test the Integration

1. Submit a test form
2. Check your Google Sheet for new data
3. Verify data appears in the correct columns

## 🎯 How It Works

1. **Form Submission**: User submits contact form
2. **Frontend Call**: Frontend sends data to Google Apps Script Web App
3. **Script Processing**: Apps Script receives data and writes to appropriate sheet
4. **Data Storage**: Data appears in your Google Sheet with correct column order

## 🔒 Security Benefits

- **No API keys** in frontend code
- **No authentication** complexity
- **Google handles** all security
- **Direct access** to your sheet only

## 📊 Data Flow

```
Contact Form → Google Apps Script → Google Sheet
     ↓              ↓                    ↓
  Frontend      Web App URL         Your Data
```

The integration is now ready! Just deploy the script and update the Web App URL.
