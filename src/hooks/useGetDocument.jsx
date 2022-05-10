import { doc } from 'firebase/firestore';
import { useFirestore, useFirestoreDocData } from 'reactfire';
import { useEffect, useState } from 'react';

const useGetDocument = (id,collection) => {
    const [document, setDocument] = useState([]);
    const firestore = useFirestore();
    const ref = doc(firestore,collection,id);

    const { status, data: item } = useFirestoreDocData(ref);

    useEffect(()=>{
        if(status!=='loading'){
            setDocument(item);            
        }
    },[item]);

    return(document);
}

export default useGetDocument;