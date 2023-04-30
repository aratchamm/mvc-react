const Data = [
    { id: 1,  Status: "ยืนยันแล้ว", By: "Loveu24/7", Menu: "ข้าวหน้าเทอริยากิ", Detail:''},
    { id: 1,  Status: "รอการยืนยัน", By: "Loveu24/7", Menu: "ข้าวหน้าเทอริยากิ", Detail:''},
    { id: 1,  Status: "รอการยืนยัน", By: "Loveu24/7", Menu: "ข้าวหน้าเทอริยากิ", Detail:''}
  ];
  

  const StatusColor = {
    รอการยืนยัน: '#8D8D8D',
    ยืนยันแล้ว: 'green',
    ยกเลิกแล้ว: 'red'
  }
  
  Data.forEach((val, index, arr) => { arr[index].Color = StatusColor[val.Status] })

  
  
  export default Data;