function doPost(e) {
  try {
    var spreadsheetId = '1vtk3hmbb0MbUA0cPZsOPQb2A1bAouqT2QfEiPVPybeM';
    var ss = SpreadsheetApp.openById(spreadsheetId);

    var body = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(body);

    var formType = String(payload.formType || '').toLowerCase();
    var submittedAt = payload.submittedAt || new Date().toISOString();

    if (formType === 'rsvp') {
      var rsvpSheet = ss.getSheetByName('rsvp');
      if (!rsvpSheet) {
        rsvpSheet = ss.insertSheet('rsvp');
      }

      if (rsvpSheet.getLastRow() === 0) {
        rsvpSheet.appendRow(['submittedAt', 'name', 'guests', 'dietary', 'source']);
      }

      rsvpSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.guests || '',
        payload.dietary || '',
        payload.source || 'website',
      ]);
    } else if (formType === 'wish') {
      var wishSheet = ss.getSheetByName('wish');
      if (!wishSheet) {
        wishSheet = ss.insertSheet('wish');
      }

      if (wishSheet.getLastRow() === 0) {
        wishSheet.appendRow(['submittedAt', 'name', 'message', 'source']);
      }

      wishSheet.appendRow([
        submittedAt,
        payload.name || '',
        payload.message || '',
        payload.source || 'website',
      ]);
    } else {
      throw new Error('Invalid formType. Expected rsvp or wish.');
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "running", 
      message: "Wedding RSVP & Wishes API is online. Please send a POST request with payload to submit RSVP or wishes." 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
