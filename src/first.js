import React from 'react';

export default function First() {
  return (
    <div >
    <h1 className='aa App'>
      Welcome To the React
    </h1>
    <p className='ss App'>REACT LANGUAGE</p>

   <table border="1" align="center">
     <tr>
       <th colspan="7"> User Details</th>
     </tr>
     <tr>
       <th>S.No</th>
       <th> Name </th>
       <th> Profile </th>
       <th> Email </th>
       <th> Contact </th>
       <th> Address </th>
       <th> Salary </th>
     </tr>
     <tr>
       <td>1</td>
       <td>Vaibhav Goel</td>
       <td>Software Engineer</td>
       <td> vaibhavgoel1904@gmail.com </td>
       <td>8630121549</td>
       <td>W-14 landcraft</td>
       <td>32 LPA</td>
     </tr>
     <tr>
       <td>2</td>
       <td>Mansi Goel</td>
       <td>Doctor</td>
       <td>kansalmansi18@gmail.com</td>
       <td>8791885659</td>
       <td>W-14 landcraft</td>
       <td>32 LPA</td>
     </tr>
   </table>
   <div className="App">
   <a  href="http://www.starkiot.in" target="_blank" rel="noreferrer" title='Starkiots' align="center"> STARKIOT</a>
   </div>
   <ol start="101">
     <li>apple</li>
     <li>banana</li>
     <li>orange</li>
   </ol>

   <ol type="I">
     <li>apple</li>
     <li>banana</li>
     <li>orange</li>
   </ol>
   <ul type="circle">
     <li>apple</li>
     <li>banana</li>
     <li>orange</li>
   </ul>

   </div>
  );
}
