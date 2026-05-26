import http.server
import socketserver
import webbrowser
from threading import Timer

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

def abrir_navegador():
    """Abre o site automaticamente no navegador padrão."""
    webbrowser.open(f"http://localhost:{PORT}")

if __name__ == "__main__":
    # Aguarda 1 segundo antes de abrir o navegador para dar tempo do servidor iniciar
    Timer(1.0, abrir_navegador).start()
    
    # Inicia o servidor local
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Servidor rodando em: http://localhost:{PORT}")
        print("Para fechar o servidor, feche esta janela ou aperte Ctrl+C no terminal.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor finalizado.")