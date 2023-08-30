
async function fetchBreedList({ queryKey }) {
     const animal = queryKey[1];
   
     if (!animal) return [];
   
     const res = await fetch(
       `http://localhost:3008/api/item/${animal}`
     );
   
     if (!res.ok) {
       throw new Error(`breeds ${animal} fetch not ok`);
     }
   
     return res.json();
   }
   
   export default fetchBreedList;