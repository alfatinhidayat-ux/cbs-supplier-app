import React from 'react';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, send, documentText, person } from 'ionicons/icons';
import { Route, Redirect } from 'react-router-dom';
import { useAuthStore } from './store/authStore';

import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Pengiriman from './pages/Pengiriman';
import Laporan from './pages/Laporan';
import Profil from './pages/Profil';
import OCRNota from './pages/OCRNota';

const PrivateRoute: React.FC<{ component: React.FC; path: string; exact?: boolean }> = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const MainTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <PrivateRoute exact path="/app/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/app/pengiriman" component={Pengiriman} />
        <PrivateRoute exact path="/app/laporan" component={Laporan} />
        <PrivateRoute exact path="/app/profil" component={Profil} />
        <PrivateRoute exact path="/app/ocr-nota" component={OCRNota} />
        <Route exact path="/app">
          <Redirect to="/app/dashboard" />
        </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom" style={{ borderTop: '1px solid rgba(0,0,0,0.05)' }}>
        <IonTabButton tab="dashboard" href="/app/dashboard">
          <IonIcon icon={home} />
          <IonLabel>Dashboard</IonLabel>
        </IonTabButton>
        <IonTabButton tab="pengiriman" href="/app/pengiriman">
          <IonIcon icon={send} />
          <IonLabel>Pengiriman</IonLabel>
        </IonTabButton>
        <IonTabButton tab="laporan" href="/app/laporan">
          <IonIcon icon={documentText} />
          <IonLabel>Laporan</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profil" href="/app/profil">
          <IonIcon icon={person} />
          <IonLabel>Profil</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/splash" component={SplashScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/">
            <Redirect to="/splash" />
          </Route>
          <Route path="/app" component={MainTabs} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
