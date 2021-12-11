import { FC, useEffect } from 'react';
import { IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { page } from './styles';

import NetworkContext from '../../contextStore/NetworkContext';
import WifiList from './WifiList';
import { crashlytics } from '../../api/Firebase/firebaseCrashlytics';

const Network: FC = () => {
  useEffect(() => {
    crashlytics.logException("Test Log Exception Crashlytics")
  }, [])

  return (
    <IonPage
      style={page}
    >
      <NetworkContext>
        <IonContent className="ion-padding" fullscreen>
          <IonGrid>

            <IonRow className="ion-justify-content-center">
              <WifiList />
            </IonRow>

          </IonGrid>
        </IonContent>
      </NetworkContext>
    </IonPage>
  );
};

export default Network;