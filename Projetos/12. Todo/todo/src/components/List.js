import React from "react";
import ListItem from "./ListItem";

function List(props) {

    return (
        <ul>
            {props.items.map(item => <ListItem key={item.id} item={item} onItemDeleted={props.onItemDeleted} onDone={props.onDone} />)}
        </ul>
    )
}

export default List;