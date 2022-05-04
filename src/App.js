import './App.css';

function App() {
  return (
    <div className="App">
      <article className="message">
        <div className="message-header">
          <p>Blazed Space</p>
        </div>
        <div className="message-body">
          <span>
            We turn dreams into reality.
          </span>
          <br />
          <br />
          <div>
              <a href="mailto:hello@blazed.space">hello@blazed.space</a>
              &nbsp; &nbsp; | &nbsp; &nbsp;
              <span className="hide-mobile">
                <a href="tel:+18557882348">(855) 788-2348</a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
                <a href="https://blazed.xyz/">Publishing</a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
                <a href="https://blazed.tel/">Telecom</a>
                &nbsp; &nbsp; | &nbsp; &nbsp;
              </span>
              <a href="https://blazed.systems/">Systems</a>
            </div>
          </div>
        </article>
    </div>
  );
}

export default App;
