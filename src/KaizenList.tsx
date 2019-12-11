import React, {FC} from 'react';
import { Header, Item, Icon } from 'semantic-ui-react';

export interface Kaizen {
    id: number;
    title: string;
    target: string;
    content: string;
    result: string;
    added: string;  // date
    updated: string; // date
    author: string;
    updator: string;
}

interface KaizenListProps {
    kaizens: Kaizen[];
}

const KaizenList: FC<KaizenListProps> = ({
    kaizens,
}) => (
    <>
        <Item.Group>
            {kaizens.map(k => (
                <Item>
                    <Item.Content>
                        <Item.Header>{k.title}</Item.Header>
                        <Item.Meta>{k.author}</Item.Meta>
                        <Item.Meta>{k.added}</Item.Meta>
                        <Item.Meta>{k.updator}</Item.Meta>
                        <Item.Meta>{k.updated}</Item.Meta>
                    </Item.Content>
                </Item>
            ))}
        </Item.Group>
    </>
);

export default KaizenList;