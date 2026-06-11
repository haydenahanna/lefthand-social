#!/usr/bin/env python3
"""Local preview server with caching disabled, so the browser always loads current files."""
import http.server
import os
import socketserver

PORT = 8000


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def send_head(self):
        # Resolve clean (extensionless) URLs locally, mirroring Vercel's cleanUrls.
        raw = self.path.split('?', 1)[0].split('#', 1)[0]
        if raw != '/' and not os.path.splitext(raw)[1]:
            fs_path = self.translate_path(raw)
            if not os.path.isdir(fs_path) and os.path.isfile(fs_path + '.html'):
                self.path = raw.rstrip('/') + '.html' + self.path[len(raw):]
        return super().send_head()

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()


class Server(socketserver.ThreadingTCPServer):
    allow_reuse_address = True
    daemon_threads = True


with Server(('127.0.0.1', PORT), NoCacheHandler) as httpd:
    print(f"Serving http://127.0.0.1:{PORT} with no-cache headers")
    httpd.serve_forever()
