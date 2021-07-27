import React from 'react';
import Sidebar from '../AppLayout/Layout';
import Wrapper from '../General/Wrapper';
import Container from '../General/Container';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Sidebar />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
