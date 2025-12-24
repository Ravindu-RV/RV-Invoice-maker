function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.invoiceNo,
    data.date,
    data.customerName,
    data.address,
    data.phone,
    data.item,
    data.qty,
    data.unitPrice,
    data.total
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({status: "success"}))
    .setMimeType(ContentService.MimeType.JSON);
}

