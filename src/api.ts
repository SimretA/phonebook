export const fetchData = async () =>{
    try{
    const response = await fetch("http://randomuser.me/api");
    const data = await response.json();
    return data;
    } catch (e) {
        console.log(e);
    }
}