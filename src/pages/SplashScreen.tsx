import React, { useEffect } from 'react';
import { IonPage, IonContent, IonSpinner } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const SplashScreen: React.FC = () => {
  const history = useHistory();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated) {
        history.replace('/app/dashboard');
      } else {
        history.replace('/login');
      }
    }, 2500); // Wait for 2.5 seconds
    return () => clearTimeout(timer);
  }, [history, isAuthenticated]);

  return (
    <IonPage>
      <IonContent fullscreen className="splash-content">
        <div className="splash-container">
          <div className="logo-pulse">
            <div className="logo-icon"></div>
          </div>
          <h1 className="splash-title">CLARIFY</h1>
          <p className="splash-subtitle">ERP Supplier Portal</p>
          <IonSpinner name="crescent" color="light" style={{ marginTop: '40px' }} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;
