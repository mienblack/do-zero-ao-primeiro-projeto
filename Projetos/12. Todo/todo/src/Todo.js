import React, { useState, useEffect } from "react";
import List from "./components/List.js";
import TodoForm from "./components/TodoForm.js";
import Item from "./components/Item.js";
import Modal from "./components/Modal.js";
import "./Todo.css"

const SAVED_ITEMS = "savedItems"

function Todo(props) {
    const [items, setItems] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])


    function onAddItem(text) {
        let it = new Item(text);
        setItems([...items, it])
        onHideModal()
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id)
        setItems(filteredItems)
    }

    function onDone(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.done = !it.done
            }
            return it
        })
        setItems(updatedItems)
    }

    function onHideModal() {
        setShow(false)
    }

    return (
        <div className="container">
            <header>
                <h1>Todo</h1>
                <button className="addButton" onClick={() => setShow(true)}>+</button>
            </header>
            <List onItemDeleted={onItemDeleted} onDone={onDone} items={items}></List>
            <Modal show={show} onHideModal={onHideModal}>
                <TodoForm onAddItem={onAddItem}></TodoForm>
            </Modal>
        </div>
    )
}

export default Todo