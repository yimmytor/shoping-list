import { query, orderBy, collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';

const useGetCollection = (collectionName,order="") => {
    const [dataCollecion, setDataCollecion] = useState([]);
    const firestore = useFirestore();
    const itemsCollection = collection(firestore,collectionName);

    const itemsQuery = order ? query(itemsCollection, orderBy(order, "asc")) : query(itemsCollection);
    const { status, data: items } = useFirestoreCollectionData(itemsQuery, {idField: 'id'});

    useEffect(()=>{
        if(status!=='loading'){
            setDataCollecion([...items]);            
        }
    },[items]);

    return(dataCollecion);
}

export default useGetCollection;