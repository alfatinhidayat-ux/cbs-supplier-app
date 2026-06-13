import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonBadge } from '@ionic/react';
import { dummyDeliveries } from '../utils/dummyData';

const Pengiriman: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Pengiriman</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {dummyDeliveries.map((delivery) => (
            <IonItem key={delivery.id} button>
              <IonLabel>
                <h2>{delivery.sjNumber}</h2>
                <p>{delivery.customer} - {delivery.date}</p>
              </IonLabel>
              <IonBadge color={delivery.status === 'Dikirim' ? 'warning' : 'success'}>
                {delivery.status}
              </IonBadge>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Pengiriman;
