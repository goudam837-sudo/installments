const { app, BrowserWindow, Menu } = require('electron');
function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1280, height: 850, autoHideMenuBar: true, title: 'سجل المبيعات والأقساط' });
  w.loadFile('www/index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
