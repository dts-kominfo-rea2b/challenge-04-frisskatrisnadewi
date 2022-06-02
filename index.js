// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];



// TODO: Buatlah fungsi createDate
const createDate = (arrDates,position)=>{
  const datasPosition= arrDates[position]
  let allDatesArr=[]
 // console.log(pos)
  for(i=0;i<arrDates.length;i++){
       
    if(arrDates[i]==datasPosition){
      let indexDateske= arrDates[i]
      let parsingToScnd= Date.parse(indexDateske)/1000
      let cnvrtStr=parsingToScnd.toString()
      return cnvrtStr
    // }else if (daten[i] !== pos){
    //   let tg= daten[i]
    //   let cv= Date.parse(tg)/1000
    //   let cf= cv.toString()
    //   let result = 
    //   u.push(cf)
      
    }   
      let keepAllDates= arrDates[i]
      let parsingToScnd2= Date.parse(keepAllDates)/1000
      let cnvrtStr2= parsingToScnd2.toString()
      allDatesArr.push(cnvrtStr2)
     
  }
  let sortir=allDatesArr.sort()
  let hasil= sortir.join("-")
  return hasil 

};


// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
