document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault()

    var name=document.getElementById("first-name").value
    var lastname=document.getElementById("last-name").value
    var Email=document.getElementById("email").value
    var address=document.getElementById("address").value
    var pincode=document.getElementById("pincode").value
    var gender=document.querySelector("input[name='gender']:checked").value
    var food=document.querySelectorAll("input[name='food']:checked")
    var state=document.getElementById("state").value
    var country=document.getElementById("country").value

    var checkedfood=[]

    food.forEach(function(checkbox) {
        checkedfood.push(checkbox.value)});
    
    if(checkedfood.length<2){
        alert("please select two option")
        return }

    var table=document.querySelector(".table tbody")
    var newrow=table.insertRow()
    var namecell=newrow.insertCell(0)
    var lastnamecell=newrow.insertCell(1)
    var emailcell=newrow.insertCell(2)
    var addresscell=newrow.insertCell(3)
    var pincodecell=newrow.insertCell(4)
    var gendercell=newrow.insertCell(5)
    var foodcell=newrow.insertCell(6)
    var statecell=newrow.insertCell(7)
    var countrycell=newrow.insertCell(8)

    namecell.textContent=name
    lastnamecell.textContent=lastname
    emailcell.textContent=Email
    addresscell.textContent=address
    pincodecell.textContent=pincode
    gendercell.textContent=gender
    foodcell.textContent=checkedfood.join(',')
    statecell.textContent=state
    countrycell.textContent=country

    document.getElementById('form').reset();
})
