import { useEffect, useState } from "react";
import { StoreItem } from "../../models/items.dto";
import data from "../../data/ListItemData.json";
import ListItemCard from "../listItemCard/ListItemCard";
import styles from "./ListItemArea.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ListItemArea = () => {
    const filterValues = useSelector((state: RootState) => state.filter)
    const [items, setItems] = useState<StoreItem[]>(data.items);

    useEffect(() => {
        const identifier = setTimeout(() => {
            let newItems = [...data.items].filter((item) => {
                if(+filterValues.minPrice !== 0 && +filterValues.minPrice > item.price){
                    return false;
                }
                if(+filterValues.maxPrice !== 0 && +filterValues.maxPrice < item.price){
                    return false;
                }
                if(+filterValues.ratingFilter > item.rating){
                    return false;
                }
                if(filterValues.criteriaFilter.length && !filterValues.criteriaFilter.includes(item.criteria)){
                    return false;
                }
                return true;
            })
            //Type assertion
            setItems(
                newItems.sort((a, b) => (a[filterValues.sorting as keyof typeof a] < b[filterValues.sorting as keyof typeof b])
                ? 1 : -1)
            );
          }, 500);

          return () => {
            clearTimeout(identifier);
          };
    },[filterValues]);

    if (!items) return <div className="main-loader">Loading...</div>; 
    return <div className={styles.itemsWrap}>
        {items.map((storeItem) => {
            return <ListItemCard storeItem={storeItem}/>
        })}
    </div>
}

export default ListItemArea;