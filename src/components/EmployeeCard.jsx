import React from "react"; 
function EmployeeCard({ employee }) {

const { id, name, email, phone, website, company } = employee

return (

<div className="card">

<img
src={`https://i.pravatar.cc/150?img=${id}`}
alt="employee"
className="avatar"
/>

<h3>{name}</h3>

<p><strong>Email:</strong> {email}</p>
<p><strong>Phone:</strong> {phone}</p>
<p><strong>Website:</strong> {website}</p>
<p><strong>Company:</strong> {company.name}</p>

</div>

)
}

export default EmployeeCard