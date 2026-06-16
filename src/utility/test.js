const getData = () =>{
const storedDataSTR = localStorage.getItem("test");
if(storedDataSTR){
    const StoredData = JSON.parse(storedDataSTR);
    return StoredData;
}
else{
    return [];
}
 }

const addToStoredData = (id) =>{
const StoredData = getData();
if(StoredData.includes(id)){
alert("this id already exist")
}
else{
    StoredData.push(id)
const data = JSON.stringify(StoredData)
localStorage.setItem("test", data)
}
}
export {addToStoredData}