const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const DATA_FILE = path.join(__dirname, 'data', 'data.json');
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');

// Helper to get MIME type
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html': return 'text/html; charset=utf-8';
    case '.css': return 'text/css; charset=utf-8';
    case '.js': return 'application/javascript; charset=utf-8';
    case '.json': return 'application/json; charset=utf-8';
    case '.png': return 'image/png';
    case '.jpg':
    case '.jpeg': return 'image/jpeg';
    case '.svg': return 'image/svg+xml';
    default: return 'text/plain; charset=utf-8';
  }
}

// Helper to read data
function getPortfolioData() {
  try {
    const rawData = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading data:', error);
    return null;
  }
}

// Helper to save data
function savePortfolioData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
}

// Server handler
const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;

  // API ROUTING
  if (pathname.startsWith('/api/')) {
    // 1. GET /api/portfolio
    if (pathname === '/api/portfolio' && req.method === 'GET') {
      const data = getPortfolioData();
      if (!data) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: false, message: 'Lỗi nạp dữ liệu' }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, data }));
    }

    // 2. GET /api/projects
    if (pathname === '/api/projects' && req.method === 'GET') {
      const data = getPortfolioData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, data: data.projects }));
    }

    // 3. GET /api/services
    if (pathname === '/api/services' && req.method === 'GET') {
      const data = getPortfolioData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, data: data.services }));
    }

    // 4. POST /api/contact
    if (pathname === '/api/contact' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          const payload = JSON.parse(body);
          if (!payload.name || !payload.email) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify({ success: false, message: 'Vui lòng cung cấp Họ tên và Email' }));
          }

          const data = getPortfolioData();
          const newMessage = {
            id: Date.now(),
            name: payload.name,
            email: payload.email,
            phone: payload.phone || '',
            message: payload.message || '',
            createdAt: new Date().toISOString()
          };

          if (!data.contactMessages) data.contactMessages = [];
          data.contactMessages.unshift(newMessage);
          savePortfolioData(data);

          res.writeHead(201, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({
            success: true,
            message: 'Cảm ơn bạn đã gửi lời nhắn! Hà Giang sẽ liên hệ lại sớm nhất.',
            data: newMessage
          }));
        } catch (err) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: false, message: 'Dữ liệu không hợp lệ' }));
        }
      });
      return;
    }

    // 5. GET /api/messages (admin view)
    if (pathname === '/api/messages' && req.method === 'GET') {
      const data = getPortfolioData();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ success: true, data: data.contactMessages || [] }));
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ success: false, message: 'Endpoint không tồn tại' }));
  }

  // STATIC FILE SERVING FOR FRONTEND
  let filePath = path.join(FRONTEND_DIR, pathname === '/' ? 'index.html' : pathname);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const contentType = getContentType(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  } else {
    // SPA Fallback to index.html
    const fallbackPath = path.join(FRONTEND_DIR, 'index.html');
    if (fs.existsSync(fallbackPath)) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(fallbackPath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Backend server đang hoạt động tại http://localhost:${PORT}`);
});
