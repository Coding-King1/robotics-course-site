import http.server
import socketserver
import webbrowser
import os

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching so changes appear immediately
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        super().end_headers()

# Change directory to where the script is located (ensures assets load)
os.chdir(os.path.dirname(os.path.abspath(__file__)))

print(f"🤖 RoboAcademy Template Running...")
print(f"👉 Open your browser to: http://localhost:{PORT}")
print(f"❌ Press Ctrl+C to stop the server")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        # Auto-open browser
        webbrowser.open(f"http://localhost:{PORT}")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")