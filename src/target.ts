
}

public send(message: WebSocket.RawData): void {
  this.ws.send(message);
  this.ws.send(message.toString());
}

public async dispose() {