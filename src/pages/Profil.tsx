import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonAvatar } from '@ionic/react';
import { person, business, notifications, logOut } from 'ionicons/icons';

const Profil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-padding ion-text-center">
          <IonAvatar style={{ margin: '0 auto', width: '80px', height: '80px' }}>
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="Avatar" />
          </IonAvatar>
          <h2 style={{ marginTop: '16px' }}>Budi Santoso</h2>
          <p className="ion-color-medium">PT Semen Nusantara</p>
        </div>
        
        <IonList>
          <IonItem button>
            <IonIcon icon={business} slot="start" />
            <IonLabel>Data Perusahaan</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon icon={person} slot="start" />
            <IonLabel>PIC & Password</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon icon={notifications} slot="start" />
            <IonLabel>Pengaturan Notifikasi</IonLabel>
          </IonItem>
          <IonItem button lines="none" style={{ marginTop: '20px' }}>
            <IonIcon icon={logOut} slot="start" color="danger" />
            <IonLabel color="danger">Logout</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profil;
