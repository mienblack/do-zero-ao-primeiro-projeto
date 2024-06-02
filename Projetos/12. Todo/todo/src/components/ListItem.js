import React from "react";
import Card from "./Card";
import { ImBin } from "react-icons/im";
import { IoCheckmarkDoneCircleOutline, IoCheckmarkDoneCircle } from "react-icons/io5";

function DoneImg(props) {

    if (props.done) {
        return (<IoCheckmarkDoneCircle />)
    } else {
        return (<IoCheckmarkDoneCircleOutline />)
    }
}

function ListItem(props) {

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><DoneImg done={props.item.done} /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><ImBin /></button>
                </div>
            </Card>
        </li>)
}

export default ListItem;