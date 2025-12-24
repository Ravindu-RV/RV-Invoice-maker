function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  data.items.forEach(function(item) {
    sheet.appendRow([
      data.invoiceNo,
      data.date,
      data.customerName,
      data.address,
      data.phone,
      item.name,
      item.qty,
      item.price,
      item.total
    ]);
  });

  return ContentService
    .createTextOutput(JSON.stringify({status:"success"}))
    .setMimeType(ContentService.MimeType.JSON);
}
