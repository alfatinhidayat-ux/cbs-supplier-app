import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonFabButton, IonButtons, IonButton } from '@ionic/react';
import { add, documentText, send, cash, receipt, notificationsOutline, trendingUp, trendingDown, timeOutline } from 'ionicons/icons';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { dummyProducts, dummyDeliveries, chartDataSales, recentActivities } from '../utils/dummyData';
import { useAuthStore } from '../store/authStore';

const Dashboard: React.FC = () => {
  const user = useAuthStore(state => state.user);

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar color="transparent" style={{ '--background': 'var(--ion-background-color)' }}>
          <IonTitle style={{ fontWeight: 'bold' }}>Dashboard</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={notificationsOutline} color="dark" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen className="ion-padding">
        
        {/* Welcome Section */}
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>Welcome, {user?.name || 'Budi'}</h2>
          <p style={{ color: 'var(--ion-color-medium)', margin: '4px 0 0' }}>{user?.company || 'PT Semen Nusantara'}</p>
        </div>

        {/* Quick Actions */}
        <div className="card-glass" style={{ padding: '16px' }}>
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol size="3" className="ion-text-center">
                <IonFabButton color="light" size="small" style={{ margin: '0 auto' }}>
                  <IonIcon icon={send} color="primary" />
                </IonFabButton>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: '500' }}>Kirim</p>
              </IonCol>
              <IonCol size="3" className="ion-text-center">
                <IonFabButton color="light" size="small" style={{ margin: '0 auto' }} routerLink="/app/ocr-nota">
                  <IonIcon icon={receipt} color="success" />
                </IonFabButton>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: '500' }}>Nota</p>
              </IonCol>
              <IonCol size="3" className="ion-text-center">
                <IonFabButton color="light" size="small" style={{ margin: '0 auto' }}>
                  <IonIcon icon={documentText} color="warning" />
                </IonFabButton>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: '500' }}>S.Jalan</p>
              </IonCol>
              <IonCol size="3" className="ion-text-center">
                <IonFabButton color="light" size="small" style={{ margin: '0 auto' }}>
                  <IonIcon icon={cash} color="danger" />
                </IonFabButton>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: '500' }}>Tawar</p>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* KPI Section */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Overview</h3>
        <IonGrid className="ion-no-padding" style={{ marginBottom: '16px' }}>
          <IonRow>
            <IonCol size="6" style={{ paddingRight: '8px' }}>
              <div className="card-glass" style={{ padding: '16px' }}>
                <p style={{ fontSize: '12px', color: 'var(--ion-color-medium)', margin: 0 }}>Total Piutang</p>
                <h3 style={{ margin: '8px 0', fontWeight: 'bold', fontSize: '20px' }}>Rp 150M</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--ion-color-success)', fontSize: '12px' }}>
                  <IonIcon icon={trendingUp} style={{ marginRight: '4px' }} />
                  <span>+12.5%</span>
                </div>
              </div>
            </IonCol>
            <IonCol size="6" style={{ paddingLeft: '8px' }}>
              <div className="card-glass" style={{ padding: '16px' }}>
                <p style={{ fontSize: '12px', color: 'var(--ion-color-medium)', margin: 0 }}>Pengiriman</p>
                <h3 style={{ margin: '8px 0', fontWeight: 'bold', fontSize: '20px' }}>{dummyDeliveries.length}</h3>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--ion-color-danger)', fontSize: '12px' }}>
                  <IonIcon icon={trendingDown} style={{ marginRight: '4px' }} />
                  <span>-2.1%</span>
                </div>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {/* Charts */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px' }}>Sales Analytics</h3>
        <div className="card-glass" style={{ padding: '16px', height: '240px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartDataSales} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--ion-color-primary)" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="var(--ion-color-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--ion-color-medium)' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: 'var(--ion-color-medium)' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="sales" stroke="var(--ion-color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activities */}
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', marginTop: '24px' }}>Recent Activities</h3>
        <div className="card-glass" style={{ padding: '0 16px' }}>
          {recentActivities.map((activity, index) => (
            <div key={activity.id} style={{ 
              display: 'flex', 
              padding: '16px 0',
              borderBottom: index !== recentActivities.length - 1 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{ marginRight: '16px', marginTop: '4px' }}>
                <div style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  backgroundColor: `var(--ion-color-${activity.color})`
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: 'bold' }}>{activity.title}</h4>
                  <span style={{ fontSize: '11px', color: 'var(--ion-color-medium)', display: 'flex', alignItems: 'center' }}>
                    <IonIcon icon={timeOutline} style={{ marginRight: '4px' }} />
                    {activity.time}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: 'var(--ion-color-medium)', lineHeight: '1.4' }}>
                  {activity.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
