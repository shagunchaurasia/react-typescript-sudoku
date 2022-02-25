import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles, theme } from "styles";
import { reportWebVitals, configureStore, register } from "core";
import { ThemeProvider } from "styled-components";
import { Content, Title, Card, Grid, Numbers, NewButton } from "components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku App</Title>
            <Card data-cy="card">
              <NewButton></NewButton>
              <Grid></Grid>
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register();
