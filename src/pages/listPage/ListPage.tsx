// import { useRouter } from "next/router";
import styles from "./ListPage.module.scss";
import ListFilter from "../../components/listFilter/ListFilter";
import ListItemArea from "../../components/listItemsArea/ListItemArea";

const ListPage = () => {
    
    return <div className={styles.wrap}>
        <div className={styles.filterWrap}>
            <ListFilter />
        </div>
        <ListItemArea />
    </div>
}

export default ListPage;