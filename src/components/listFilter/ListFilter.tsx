import { useState, useEffect } from "react";
import styles from "./ListFilter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { filterSlice } from "../../store/slices/filterSlice";

const ListFilter = () => {
    const filterValues = useSelector((state: RootState) => state.filter)
    const [loading, setLoading] = useState<boolean>(true); //If loading is true, page will render loading text only
    const dispatch = useDispatch();

    useEffect(() => {        
        if(filterValues){
            setLoading(false);
        }
    }, []);

    //Check if the page is not loading and characterDetails has data. If not, display loading.
    if (loading) return <div className="main-loader">Loading...</div>; 
    return <>
        <div className={styles.wrap}>
            <h3>Sort by</h3>
            <select defaultValue={filterValues.sorting} onChange={(e:any) => {dispatch(filterSlice.actions.updateSorting(e.target.value))}}>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
            </select>
            <h3>Criteria</h3>
            <label>
                <input type="checkbox" 
                onChange={() => {dispatch(filterSlice.actions.updateCriteria("shoes"))}}
                defaultChecked={filterValues.criteriaFilter.includes("shoe")}/>
                Shoes
            </label>
            <label>
                <input type="checkbox" 
                onChange={() => {dispatch(filterSlice.actions.updateCriteria("t-shirt"))}}
                defaultChecked={filterValues.criteriaFilter.includes("t-shirt")}/>
                T-Shirts
            </label>
            <label>
                <input type="checkbox" 
                onChange={() => {dispatch(filterSlice.actions.updateCriteria("shirt"))}}
                defaultChecked={filterValues.criteriaFilter.includes("shirt")}/>
                Shirts
            </label>
            <label>
                <input type="checkbox" 
                onChange={() => {dispatch(filterSlice.actions.updateCriteria("jeans"))}}
                defaultChecked={filterValues.criteriaFilter.includes("jeans")}/>
                Jeans
            </label>
            <label>Min Price</label>
            <input type="number" 
            onChange={(e: any) => {dispatch(filterSlice.actions.updateMinPrice(e.target.value))}}
            value={filterValues.minPrice}/>
            <label>Max Price</label>
            <input type="number" 
            onChange={(e: any) => {dispatch(filterSlice.actions.updateMaxPrice(e.target.value))}}
            value={filterValues.maxPrice}/>
            <label>Rating</label>
            <input type="number" 
            onChange={(e: any) => {dispatch(filterSlice.actions.updateRatingFilter(e.target.value))}}
            value={filterValues.ratingFilter}/>
        </div>
    </>
}

export default ListFilter;