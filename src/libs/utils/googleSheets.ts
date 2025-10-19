// Google Apps Script integration utility
export interface FormData {
  type: 'document' | 'contact';
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  time: string;
}

// Method using Google Apps Script Web App
export const sendToGoogleSheetsWithFetch = async (data: FormData): Promise<void> => {
  // Replace with your actual Google Apps Script Web App URL
  // You'll get this URL after deploying the Google Apps Script as a Web App
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyckbzgUrpz2J5MUk311_zQ-nxG5NxT7Z1MewMcvsvw3LtTMBRSf84dnjcRBQxndH75/exec';
  
  try {
    const formData = new FormData();
    formData.append('company', data.company);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('message', data.message);
    formData.append('time', data.time);
    formData.append('type', data.type);

    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      body: formData,
      mode: 'cors',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Data sent to Google Sheets successfully:', result);
  } catch (error) {
    console.error('Error sending data to Google Sheets:', error);
    throw error;
  }
};