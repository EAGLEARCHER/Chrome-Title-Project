
async function fetchData() {
  const reply = await fetch("http://localhost:3000/api/test");
  console.log(reply)
}

fetchData()