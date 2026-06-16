const getStoredWishBook = () =>{
const storedWishBookSTR = localStorage.getItem("wishList");
if(storedWishBookSTR){
    const storedWishData = JSON.parse(storedWishBookSTR);
    return storedWishData;
}
else{
    return [];
}
}
const AddToStoredWishDB = (id) =>{
const storedWishData = getStoredWishBook();
if(storedWishData.includes(id)){
alert("this wish list id is exist")
}
else{
    storedWishData.push(id);
    const data = JSON.stringify(storedWishData);
    localStorage.setItem('wishList', data);
}
}
export {AddToStoredWishDB, getStoredWishBook}