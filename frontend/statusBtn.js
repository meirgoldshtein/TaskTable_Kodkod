function createBtn(taskOb){    
    
    const statusUp = document.createElement('div')
    let status1 = document.createElement('input')
    status1.type = 'radio'
    status1.name = taskOb.id
    status1.value = 1
    statusUp.appendChild(status1)
    statusUp.innerHTML +=  `לא בוצע`

    let status2 = document.createElement('input')
    status2.type = 'radio'
    status2.name = taskOb.id
    status2.value = 2
    statusUp.appendChild(status2)
    statusUp.innerHTML +=  `בתהליך ביצוע`

    let status3 = document.createElement('input')
    status3.type = 'radio'
    status3.name = taskOb.id
    status3.value = 3
    statusUp.appendChild(status3)
    statusUp.innerHTML +=  `לאחר ביצוע`
    return statusUp
}

export default createBtn