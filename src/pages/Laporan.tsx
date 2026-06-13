import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { barChart, pieChart, documentText } from 'ionicons/icons';

const Laporan: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Laporan</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem button>
            <IonIcon icon={barChart} slot="start" color="primary" />
            <IonLabel>Laporan Penjualan</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon icon={pieChart} slot="start" color="success" />
            <IonLabel>Laporan Inventory</IonLabel>
          </IonItem>
          <IonItem button>
            <IonIcon icon={documentText} slot="start" color="warning" />
            <IonLabel>Laporan Finance</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Laporan;
