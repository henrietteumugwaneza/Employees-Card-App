import React from "react";  
import { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchBar from "./components/SearchBar";

function App() {

const [employees, setEmployees] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [search, setSearch] = useState("")

useEffect(() => {

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
setEmployees(data)
setLoading(false)
})
.catch((err) => {
setError("Failed to fetch employees")
setLoading(false)
})

}, [])

if (loading) return <h2>Loading...</h2>
if (error) return <h2>{error}</h2>

const filteredEmployees = employees.filter((emp)=>
emp.name.toLowerCase().includes(search.toLowerCase()) ||
emp.email.toLowerCase().includes(search.toLowerCase())
)

return (
<div className="container">

<h1>Employee Directory</h1>

<SearchBar search={search} setSearch={setSearch}/>

<div className="card-container">

{filteredEmployees.map((employee)=>(
<EmployeeCard key={employee.id} employee={employee}/>
))}

</div>

</div>
)

}

export default App