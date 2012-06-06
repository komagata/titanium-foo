var window = Ti.UI.createWindow({
  backgroundColor:'#ffffff',
  navBarHidden:true,
  exitOnClose:true
});
  
var label = Ti.UI.createLabel({
  color:'#000000',
  text:'foo',
  height:'auto',
  width:'auto'
});
window.add(label);
window.open()