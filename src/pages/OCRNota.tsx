import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSpinner, IonButtons, IonBackButton } from '@ionic/react';
import { camera, cloudUpload, checkmarkCircle, scanCircle } from 'ionicons/icons';

const OCRNota: React.FC = () => {
  const [step, setStep] = useState<number>(1); // 1: Upload, 2: Scanning, 3: Review

  const handleUpload = () => {
    setStep(2);
    // Simulate OCR delay
    setTimeout(() => {
      setStep(3);
    }, 2500);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/app/dashboard" />
          </IonButtons>
          <IonTitle>Scan Nota (OCR)</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">

        {step === 1 && (
          <div className="ion-text-center" style={{ marginTop: '40px' }}>
            <IonIcon icon={document} style={{ fontSize: '80px', color: 'var(--ion-color-medium)' }} />
            <h2 style={{ marginBottom: '20px' }}>Upload Nota Anda</h2>
            <p className="ion-color-medium" style={{ marginBottom: '30px' }}>Silakan ambil foto nota atau upload dari galeri untuk membaca SKU dan kuantitas secara otomatis.</p>
            
            <IonButton expand="block" onClick={handleUpload} style={{ marginBottom: '10px' }}>
              <IonIcon icon={camera} slot="start" />
              Ambil Foto Nota
            </IonButton>
            <IonButton expand="block" fill="outline" onClick={handleUpload}>
              <IonIcon icon={cloudUpload} slot="start" />
              Upload dari Galeri
            </IonButton>
          </div>
        )}

        {step === 2 && (
          <div className="ion-text-center" style={{ marginTop: '80px' }}>
            <IonSpinner name="crescent" color="primary" style={{ transform: 'scale(2)' }} />
            <h2 style={{ marginTop: '30px' }}>Memproses Nota...</h2>
            <p className="ion-color-medium">AI sedang membaca data SKU, Nama Barang, dan Qty.</p>
            
            <IonCard style={{ marginTop: '30px' }}>
              <div style={{ padding: '20px', background: '#f4f5f8', border: '2px dashed var(--ion-color-primary)', borderRadius: '8px' }}>
                <IonIcon icon={scanCircle} style={{ fontSize: '40px', color: 'var(--ion-color-primary)' }} />
                <p>Scanning Text...</p>
              </div>
            </IonCard>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="ion-text-center">
              <IonIcon icon={checkmarkCircle} color="success" style={{ fontSize: '60px' }} />
              <h2>Ekstraksi Berhasil</h2>
              <p>Mohon review data berikut sebelum disimpan.</p>
            </div>

            <IonCard style={{ marginTop: '20px' }}>
              <IonCardContent>
                <IonItem>
                  <IonLabel position="stacked">Nomor Nota</IonLabel>
                  <IonInput value="NOTA-00981" />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Nama Supplier</IonLabel>
                  <IonInput value="PT Semen Nusantara" />
                </IonItem>
                
                <h3 style={{ marginTop: '20px', paddingLeft: '16px' }}>Detail Barang</h3>
                <IonItem>
                  <IonLabel position="stacked">SKU / Nama Barang (Baris 1)</IonLabel>
                  <IonInput value="S001 - Semen Tiga Roda 50kg" />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Qty / Harga</IonLabel>
                  <IonInput value="100 Sak x Rp 65.000" />
                </IonItem>

                <IonItem style={{ marginTop: '10px' }}>
                  <IonLabel position="stacked">SKU / Nama Barang (Baris 2)</IonLabel>
                  <IonInput value="B001 - Besi Beton 10mm" />
                </IonItem>
                <IonItem>
                  <IonLabel position="stacked">Qty / Harga</IonLabel>
                  <IonInput value="500 Batang x Rp 85.000" />
                </IonItem>
              </IonCardContent>
            </IonCard>

            <IonButton expand="block" color="success" style={{ marginTop: '20px' }} onClick={() => alert('Data disimpan!')}>
              Simpan Data
            </IonButton>
            <IonButton expand="block" fill="clear" color="medium" onClick={() => setStep(1)}>
              Ulangi Scan
            </IonButton>
          </div>
        )}

      </IonContent>
    </IonPage>
  );
};

export default OCRNota;
