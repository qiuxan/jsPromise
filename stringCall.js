const pro1 = new Promise((resolve, reject) => {
  console.log('Study'); 
  resolve();
});

const pro2 = pro1.then(() => {
  console.log('Exam'); 
  const a  = null;
  a.toString();
});

setTimeout(() => {
  console.log(pro2);
}, 1000);    