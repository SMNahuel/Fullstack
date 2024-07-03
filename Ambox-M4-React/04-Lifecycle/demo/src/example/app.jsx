import { useState, useEffect } from 'react';
import { createConnection } from './chat.jsx';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    /* Funcion cuando montamos nuestro componente */
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    /* Funcion cuando desmontamos nuesto componente */
    return () => connection.disconnect();
  }, [roomId]);
  return <h1>¡Bienvenido a la sala {roomId}!</h1>;
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Selecciona la sala de chat:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="viaje">viaje</option>
          <option value="música">música</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Cerrar chat' : 'Abrir chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}