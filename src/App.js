import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
