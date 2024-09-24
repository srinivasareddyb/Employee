




const cds =  require('@sap/cds');

module.exports = function(srv){
    
    console.log("beforesrv");
    srv.after("READ", "EmpData", function(xs){         
              console.log(xs);
          });
    
  srv.before("CREATE", "EmpData", async (req)=>{
    //  debugger;
    //  const data = req.data;
    //  const sData = Array.isArray(data) ? data : [data];

     const aRecord = await SELECT.from () .where ({Eid: '4'});
        console.log(aRecord);
        if (aRecord){
            return req.reject(`Can't modify a closed incident`)
        }

  });


}














// const cds = require('@sap/cds');

// module.exports = (srv) =>{
//     console.log("Srinivasa Reddy B");
//   srv.after("READ", "EmpData", xs=>{
//       console.log("Srini");
//       console.log(xs);
//   });

//   srv.before("CREATE", "EmpData", async (req)=>{
//     //  debugger;
//     //  const data = req.data;
//     //  const sData = Array.isArray(data) ? data : [data];

//     //  const aRecord = await SELECT.from `EmpData` .where `(Eid, "4")`;
//     //     console.log(aRecord);
//     //     if (aRecord){
//     //         return req.reject(`Can't modify a closed incident`)
//     //     }

//   });

  

// }