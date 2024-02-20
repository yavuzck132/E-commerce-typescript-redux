import { FunctionComponent, useState } from "react";
import { StoreItem } from "../../models/items.dto";
import styles from "./ListItemCard.module.scss";

interface ListItem{
    storeItem: StoreItem
}

const ListItemCard: FunctionComponent<ListItem> = (props) => {

    if (!props) return <div className="main-loader">Loading...</div>; 
    return <div className={styles.cardBody}>
                <div className={styles.imageArea}>
                    <img src={props.storeItem.image}/>
                </div>
                <div className={styles.cardContent}>
                    <h2>{props.storeItem.name}</h2>
                    <p>Type: {props.storeItem.criteria.charAt(0).toUpperCase() + props.storeItem.criteria.slice(1)}</p>
                    <p>Price: {props.storeItem.price}</p>
                    <p>Rating: {props.storeItem.rating}</p>
                </div>            
            </div>
}

export default ListItemCard;