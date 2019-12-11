import React, {FC} from 'react';
import { /*Header,*/ Item/*, Icon*/ } from 'semantic-ui-react';
import { Kaizen } from '../../kaizenData'

interface KaizenItemProps {
    item: Kaizen[];
}

const KaizenItem: FC<KaizenItemProps> = ({
    item,
}) => (
    <>
        <Item.Group>
            {item.map(i => (
            <Item key={i.id}>
            <Item.Content>
                <Item.Header>{i.title}</Item.Header>
                <Item.Meta>{i.author}</Item.Meta>
                <Item.Meta>{i.added}</Item.Meta>
                <Item.Meta>{i.updator}</Item.Meta>
                <Item.Meta>{i.updated}</Item.Meta>
            </Item.Content>
            </Item>
            ))}
        </Item.Group>
    </>
);

export default KaizenItem;