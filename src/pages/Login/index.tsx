import { FC, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { IonContent, IonGrid, IonRow, IonPage } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import CompanyLogo from '../../components/CompanyLogo';
import LoginButton from '../../components/LoginButton';
import './styles.css';

const Login: FC = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (user) return <Redirect to="/profile" />;

  console.log(user);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonGrid id="page-grid">
          <IonRow className="ion-justify-content-center">
            <CompanyLogo />
          </IonRow>
          <IonRow className="ion=justify-content-center">
            <LoginButton />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
