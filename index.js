async function handleformSubmit(event){
    event.preventDefault();
    let siteDetails={
        title:event.target.title.value,
        webUrl:event.target.webUrl.value
    }
    try{
        const response=await axios.post("https://crudcrud.com/api/e4538f5f9367408bb6a8e8b414746463/appointmentData",siteDetails)
        console.log(response)
       // siteDetails._id=response.data._id;
      // showSitesonScreen(siteDetails)
        showSitesonScreen(response.data)
        document.getElementById("title").value=""
        document.getElementById("webUrl").value=""
    
    
    }catch(error){
        console.log(error)
    }
    
}
function showSitesonScreen(obj){
    let siteList=document.querySelector("ul")
    let siteItem=document.createElement("li")
    siteItem.appendChild(document.createTextNode(`
    ${obj.title} > ${obj.webUrl} `))
    const delBtn=document.createElement("button")
    delBtn.appendChild(document.createTextNode("Delete"))
    siteItem.appendChild(delBtn)
    const editBtn=document.createElement("button")
    editBtn.appendChild(document.createTextNode("Edit"))
    siteItem.appendChild(editBtn)
    siteList.appendChild(siteItem);
    delBtn.addEventListener("click",async function(){
        siteList.removeChild(siteItem);
        try {
            const response = await axios.delete(`https://crudcrud.com/api/e4538f5f9367408bb6a8e8b414746463/appointmentData/${obj._id}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    })
    editBtn.addEventListener("click",async function(){
        siteList.removeChild(siteItem);
        try {
            const response = await axios.delete(`https://crudcrud.com/api/e4538f5f9367408bb6a8e8b414746463/appointmentData/${obj._id}`);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
        document.getElementById("title").value = obj.title;
        document.getElementById("webUrl").value = obj.webUrl;

    })
}

window.addEventListener("DOMContentLoaded",async ()=>{
    try {
        const response = await axios.get("https://crudcrud.com/api/e4538f5f9367408bb6a8e8b414746463/appointmentData");
        console.log(response);
        for(let i=0;i<response.data.length;i++){
            showSitesonScreen(response.data[i]);
        }
    } catch (error) {
        console.log(error);
    }
})



