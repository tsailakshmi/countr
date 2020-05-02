import React, { useState, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonModal, IonButton, IonFab, IonFabButton, IonIcon, IonToast } from '@ionic/react';
import './Tab1.css';
import { add, addCircleOutline, removeCircleOutline } from 'ionicons/icons';

const items: any[] = [
  { id: 1, title: 'Water Can', count: 0 },
  { id: 2, title: 'Milk', count: 0 }
];

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false); // [value, function]
  const [showToast1, setShowToast1] = useState(false);
  const [item, setItem] = useState(null as { count: number } | null);
  const handleModalClose = useCallback(() => {
    setShowToast1(true);
    setShowModal(false);
  }, []);
  const addCount = () => {
    if (item == null) return;
    setShowModal(false);
    item.count = item.count + 1;
  }

  const removeCount = () => {
    if (item == null) return;
    setShowModal(false);
    item.count = item.count - 1;
  }
  const showItemModal = (item: any) => {
    setItem(item);
    setShowModal(true);
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle style={{ textAlign: 'center' }}>Countr List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={showModal}>
          <h4 style={{ textAlign: 'center' }}>Add count for today!</h4>
          <IonFab vertical="center" horizontal="start" slot="fixed">
            <IonTitle>Add</IonTitle>
            <IonFabButton onClick={() => item && addCount()}>
              <IonIcon icon={addCircleOutline} />
            </IonFabButton>
          </IonFab>
          <IonFab vertical="center" horizontal="center" slot="fixed">
            <IonTitle>Remove</IonTitle>
            <IonFabButton onClick={() => item && removeCount()}>
              <IonIcon icon={removeCircleOutline} />
            </IonFabButton>
          </IonFab>
          <IonButton onClick={handleModalClose}>Close</IonButton>
          <IonToast
            isOpen={showToast1}
            message="Your modal has been closed"
            duration={20}
          />
        </IonModal>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List Items</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList lines="full">
          {items.map(item =>
            <IonItem key={item.id} onClick={() => showItemModal(item)}>
              <IonLabel>
                <h2>{item.title}</h2>
                <p>{item.count}</p>
              </IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
