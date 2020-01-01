export const fetchData = async () =>{
    try{
        const response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        const data = await response.json();


        return data;
    } catch (e) {
        console.log(e);
    }
};
export const deleteData = async (id:number) =>{
    try{
        const response = await fetch("http://dummy.restapiexample.com/api/v1/delete/"+id,{
            method: 'DELETE',

                headers: {
                'Content-Type': 'application/json'
            }});
        const data = await response.json();

        return data;
    } catch (e) {
        console.log(e);
    }
};

export const postData= async ( data={}) =>{
   try{
       console.log(data);
        const response = await fetch("http://dummy.restapiexample.com/api/v1/create", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        });

       const responseData = await response.json();
       console.log(responseData);

       return responseData;
   }catch (e) {
       console.log(e);
   }
};
export const editData= async ( data={}) =>{
   try{
       console.log(data);
        const response = await fetch("http://dummy.restapiexample.com/api/v1//update/"+data.id, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        });

       const responseData = await response.json();
       console.log(responseData);

       return responseData;
   }catch (e) {
       console.log(e);
   }
};