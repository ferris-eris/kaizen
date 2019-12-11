import React/*, { FC }*/ from 'react';
import { RouteComponentProps } from 'react-router';
import { /*Redirect,*/ useParams, useHistory, useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import Helmet from 'react-helmet';
import { Button, Divider, Icon } from 'semantic-ui-react';

import { kaizenData } from '../../kaizenData';
import Spinner from '../common/Spinner';
import KaizenItem from './KaizenItem';

import './index.css';

type KaizensProps = {} & RouteComponentProps<{ code: string }>;

//const Kaizens: FC<KaizensProps> = ({ history, location, match }) => {
const Kaizens = () => {
    //const codes = Object.keys(kaizenData);
  //const targetCode = match.params.code;
  const { targetCode } = useParams();
  const history = useHistory();
  const location = useLocation();
  const isLoading = parse(location.search).loading === 'true';
  
  return (
    <>
      <Helmet>
        <title>詳細情報 | Kaizen3</title>
      </Helmet>
      <header>
        <h1>Kaizen3 詳細情報</h1>
      </header>
      {isLoading ? (
        <Spinner />
      ) : (
        <KaizenItem
        item={kaizenData}
//        item={kaizenData.find(e => e.id == Number(targetCode))}
        />
      )}
      <Divider hidden />
      <Button
        basic
        color="grey"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  );
};

//export default withRouter(Kaizens);
export default Kaizens;
