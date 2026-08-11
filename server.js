let express;
try {
  express = require('express');
} catch (e) {
  express = null;
}

const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

if (express) {
  const app = express();
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));
  app.use(express.static(__dirname));

  app.get('/api/db', (req, res) => {
    if (fs.existsSync(DB_FILE)) {
      try {
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return res.type('application/json').send(data);
      } catch (e) {
        return res.status(500).json({ error: 'Failed to read database' });
      }
    }
    return res.type('application/json').send('null');
  });

  app.post('/api/db', (req, res) => {
    try {
      const data = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      fs.writeFileSync(DB_FILE, data, 'utf8');
      res.json({ success: true, timestamp: Date.now() });
    } catch (e) {
      res.status(500).json({ error: 'Failed to save database' });
    }
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
} else {
  const http = require('http');

  const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  const server = http.createServer((req, res) => {
    const url = req.url.split('?')[0];

    if (url === '/api/db' && req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      if (fs.existsSync(DB_FILE)) {
        try {
          const data = fs.readFileSync(DB_FILE, 'utf8');
          return res.end(data);
        } catch (e) {
          res.statusCode = 500;
          return res.end(JSON.stringify({ error: 'Failed to read database' }));
        }
      }
      return res.end('null');
    }

    if (url === '/api/db' && req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', () => {
        try {
          fs.writeFileSync(DB_FILE, body, 'utf8');
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, timestamp: Date.now() }));
        } catch (e) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Failed to save database' }));
        }
      });
      return;
    }

    let filePath = path.join(__dirname, url === '/' ? 'index.html' : url);

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        fs.createReadStream(filePath).pipe(res);
      } else {
        const indexPath = path.join(__dirname, 'index.html');
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        fs.createReadStream(indexPath).pipe(res);
      }
    });
  });

  server.listen(PORT, () => {
    console.log(`Native HTTP server running on port ${PORT}`);
  });
}

