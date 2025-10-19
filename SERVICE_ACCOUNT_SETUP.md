# Google Sheets Service Account Setup Guide

## 🔧 Service Account Setup (No Server Required)

### 1. Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project or create a new one
3. Enable the Google Sheets API
4. Go to **IAM & Admin** → **Service Accounts**
5. Click **Create Service Account**
6. Fill in details and create

### 2. Generate Service Account Key
1. Click on your service account
2. Go to **Keys** tab
3. Click **Add Key** → **Create new key**
4. Choose **JSON** format
5. Download the JSON file

### 3. Update Code with Your Credentials
Replace the `SERVICE_ACCOUNT_KEY` object in `src/libs/utils/googleSheets.ts` with your actual service account credentials from the downloaded JSON file:

```typescript
const SERVICE_ACCOUNT_KEY = {
  "type": "service_account",
  "project_id": "your-actual-project-id",
  "private_key_id": "your-actual-private-key-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\nyour-actual-private-key\n-----END PRIVATE KEY-----\n",
  "client_email": "your-service-account@your-project.iam.gserviceaccount.com",
  "client_id": "your-actual-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/your-service-account%40your-project.iam.gserviceaccount.com"
};
```

### 4. Share Google Sheet with Service Account
1. Open your Google Sheet: `https://docs.google.com/spreadsheets/d/1OY_yKFft7CPw0OQ55S9KRqNwXJ_N6n0ksDTc9p4Pagk/edit`
2. Click **Share** button
3. Add the service account email (from step 2) as **Editor**
4. Click **Done**

### 5. Test the Integration
1. Submit a test form
2. Check your Google Sheet for new data
3. Data should appear in the correct columns: company, name, email, phone, message, time

## 🔒 Security Notes
- Service account credentials are embedded in the frontend code
- For production, consider using environment variables or a more secure approach
- The service account only has access to the specific Google Sheet you shared with it

## ✅ Benefits of This Approach
- No server required
- Direct authentication with Google Sheets API
- Works entirely in the browser
- Similar to your existing `main.js` pattern
