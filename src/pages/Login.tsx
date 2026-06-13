import React, { useState } from 'react';
import { IonPage, IonContent, IonInput, IonButton, IonIcon } from '@ionic/react';
import { eyeOffOutline, eyeOutline, lockClosedOutline, personOutline, logInOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const history = useHistory();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      login();
      setIsLoading(false);
      history.replace('/app/dashboard');
    }, 1500); // Simulate network request
  };

  return (
    <IonPage>
      <IonContent fullscreen className="login-content">
        <div className="login-overlay">
          <div className="glass-panel">
            <div className="login-header">
              <h2>Welcome Back</h2>
              <p>Please enter your details to sign in.</p>
            </div>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="input-group">
                <IonIcon icon={personOutline} className="input-icon" />
                <IonInput placeholder="Username or Email" type="email" required className="glass-input" />
              </div>
              
              <div className="input-group">
                <IonIcon icon={lockClosedOutline} className="input-icon" />
                <IonInput placeholder="Password" type={showPassword ? 'text' : 'password'} required className="glass-input" />
                <IonIcon 
                  icon={showPassword ? eyeOutline : eyeOffOutline} 
                  className="input-icon toggle-password" 
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>

              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>

              <IonButton expand="block" type="submit" className="login-button" disabled={isLoading}>
                {isLoading ? 'Signing in...' : (
                  <>
                    <IonIcon icon={logInOutline} slot="start" />
                    Sign In
                  </>
                )}
              </IonButton>
            </form>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
