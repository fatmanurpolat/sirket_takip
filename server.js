document.querySelector('#getProject').addEventListener('click', loadProject)
document.querySelector('#getAgreement').addEventListener('click', loadAgreement)

function loadProject(){

    var loadImage = document.querySelector('#loading')
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'data.json',true) // true ile asenkron oldu işlem
    
    xhr.onload= function(){
        loadImage.style.display = 'none';

        if(this.status=== 200){
            
            let project = JSON.parse(this.responseText)   
            let html = ""; 
             
            project.forEach(project => {
                html += `<tr>
                <td> ${project.project_name}</td>
                <td> ${project.delivery_date}</td>
            </tr>`;

            });
           document.querySelector('#projects').innerHTML =html;

        }
    }
    xhr.send();
}
function loadAgreement (){
 
    var loadImage = document.querySelector('#loading')
    loadImage.style.display = 'block';

    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'agreement.json',true) // true ile asenkron oldu işlem
    
    xhr.onload= function(){
        loadImage.style.display = 'none';

        if(this.status=== 200){
            
            let agreement = JSON.parse(this.responseText)   
            let html = ""; 
             
            agreement.forEach(agreement => {
                html += `<tr>
                <td> ${agreement.agreement_name}</td>
                <td> ${agreement.contracted_company}</td>
            </tr>`;

            });
           document.querySelector('#agreement').innerHTML =html;

        }
    }
    xhr.send();
}













