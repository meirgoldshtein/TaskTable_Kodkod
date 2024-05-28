const containerHolder = document.querySelector(".container")

const createBth = (taskOB) => {
    const statusBth = document.createElement('select')
    statusBth.id = taskOB.id
    statusBth.innerHTML =`עדכן סטטוס משימה`
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
    const rowEL = document.createElement('div') // <div></div>
    rowEL.className = 'row'
    rowEL.id = taskOB.id
    let selectBth = createBth(taskOB)
    rowEL.innerHTML = `
        <div class="col">${selectBth}</div>
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
