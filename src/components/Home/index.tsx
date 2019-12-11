import React/*, { FC }*/ from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, List/*, ItemDescription*/ } from 'semantic-ui-react';

import { kaizenData } from '../../kaizenData';
import './index.css';

//const codes = Object.keys(kaizenData.items);

//const Home: FC<{}> = () => (
const Home = () => (
    <>
    <Helmet>
        <title>Kaizen3</title>
    </Helmet>
    <header>
        <h1>Kaizen3</h1>
    </header>
    <Container className="ichiran"> </Container>
    <List as="ul">
        {kaizenData.map(code => (
            <List.Item as="li" key={code.id}>
                <Link to={`/kaizens/${code.id}`}>{code.title}</Link>
            </List.Item>
        ))}
    </List>
    </>
);

export default Home;
