import { Realtime }  from 'ably'
import { AblyProvider, useChannel } from 'ably/react'

function App() {  
  const client = new Realtime({'authUrl':'[YOUR_ABLY_AUTH_URL]'});
  return (
    <AblyProvider client={client}>
      <Messages />
    </AblyProvider>
  )
}

function Messages() {
  useChannel('inbound-messages', (message) => {
    console.log(message)
  });
  return (<div>Open your browser tools console to view incoming Ably messages</div>)
}

export default App
