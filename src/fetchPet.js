const fetchPet = async ({ queryKey }) => {
     const id = queryKey[1];
     const apiRes = await fetch(`http://localhost:3008/api/item/${id}`);
   
     if (!apiRes.ok) {
       throw new Error(`details/${id} fetch not ok`);
     }
   
     return apiRes.json();
   };
   
   export default fetchPet;