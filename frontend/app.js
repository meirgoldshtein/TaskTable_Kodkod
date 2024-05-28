// import createBtn from "./statusBtn"



// const btn = require(statusBtn)
const containerHolder = document.querySelector(".container")

function getSelectedStatus(taskOb) {
    console.log("מחפש")
    const id = taskOb.id
    let checkedRadios = document.querySelectorAll('input[type="radio"]:checked');
    checkedRadios = Array.from(checkedRadios).filter(radio => radio.dataset.taskId === id);
    console.log(checkedRadios)
    if (checkedRadios.length === 1) {return checkedRadios}
}

function handleButtonClick(taskOb) {
    console.log("מחפש")
    const selectedStatus = getSelectedStatus(taskOb)
    console.log(selectedStatus)
    if(selectedStatus == 1){console.log("1")}  
    if(selectedStatus == 2){console.log("2")} 
    if(selectedStatus == 3){console.log("3")} 
}

function createBtn(taskOb){    
    
    const statusUp = document.createElement('div')
    statusUp.className = 'options'
    let line = document.createElement('div')
    line.className = 'choice'
    let status1 = document.createElement('input')
    status1.type = 'radio'
    status1.name = taskOb.id
    status1.value = 1
    line.innerHTML +=  `לא בוצע`
    line.appendChild(status1)
    statusUp.appendChild(line)
   
    line = document.createElement('div')
    line.className = 'choice'
    let status2 = document.createElement('input')
    status2.type = 'radio'
    status2.name = taskOb.id
    status2.value = 2
    line.innerHTML +=  `בתהליך ביצוע`
    line.appendChild(status2)
    statusUp.appendChild(line)

    line = document.createElement('div')
    line.className = 'choice'    
    let status3 = document.createElement('input')
    status3.type = 'radio'
    status3.name = taskOb.id
    status3.value = 3
    line.innerHTML +=  `בוצע`
    line.appendChild(status3)
    statusUp.appendChild(line)

    const finishBtn = document.createElement('button')
    finishBtn.className = 'finishBtn'
    finishBtn.innerHTML = 'אישור'
    statusUp.appendChild(finishBtn)
    finishBtn.addEventListener('click',handleButtonClick(taskOb))
        
    return statusUp
}

const createBtn2 = (taskOB) => {
    const statusBth = document.createElement('select')
    statusBth.id = taskOB.id
    const option0 = document.createElement('option')
    option0.innerHTML =`עדכן סטטוס משימה`
    statusBth.appendChild(option0)
    const option1 = document.createElement('option')
    option1.innerHTML = `לא בוצע`
    statusBth.appendChild(option1)
    const option2 = document.createElement('option')
    option2.innerHTML = `בתהליך`
    statusBth.appendChild(option2)
    const option3 = document.createElement('option')
    option3.innerHTML = `בוצע`
    statusBth.appendChild(option3)
    return statusBth


}
const createRow = (taskOB) => {
    const rowEL = document.createElement('div')
    rowEL.className = 'row'
    rowEL.id = taskOB.id
    let selectBtn = createBtn(taskOB)
    rowEL.appendChild(selectBtn)
    rowEL.innerHTML += `
        <div class="col"> <h3>${taskOB.status == "before" ? taskOB.task : ""}</h3></div>
        <div class="col"> <h3>${taskOB.status == "inProcess" ? taskOB.task : ""}</h3></div>
        <div class="col"> <h3>${taskOB.status == "done" ? taskOB.task : ""}</h3></div>`
    return rowEL
}


const callApi = async () => {
    console.log("hyy");
    const url = `http://127.0.0.1:3000/`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  async function renderTasks() {
    const arr = await callApi();
    const htmlTasks = arr.map(taskOB => {
      console.log("create div");
      let div = createRow(taskOB);
      return div;
    });
    htmlTasks.forEach(element => containerHolder.appendChild(element));
  }
  
  renderTasks();
