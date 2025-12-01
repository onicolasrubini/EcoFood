from http.server import SimpleHTTPRequestHandler, HTTPServer

host = "localhost"
port = 8080

print(f"Servidor rodando em http://{host}:{port}")

server = HTTPServer((host, port), SimpleHTTPRequestHandler)
server.serve_forever()
